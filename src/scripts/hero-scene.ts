import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  DynamicDrawUsage,
  Group,
  OrthographicCamera,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from "three";
import type { Scene as GateScene } from "./webgl-gate";

/** Hero timeline, in seconds: scatter → form the mark → hold while the real logo fades in → drift as dust. */
const FORM = 2.5;
const HOLD = 1.2;
const DISPERSE = 1.8;

/** Samples the mark image into points (x, y in [0, 1] of the image box) carrying the pixel's own colour. */
async function sampleMark(img: HTMLImageElement, cap: number) {
  await img.decode();
  const size = 96;
  const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
  ctx.canvas.width = ctx.canvas.height = size;
  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;
  // Only the mark's bright pixels (silver ring, gold A): the dark disc behind them would read as a blob.
  const bright = (o: number) => data[o + 3] > 128 && Math.max(data[o], data[o + 1], data[o + 2]) > 90;
  let opaque = 0;
  for (let o = 0; o < data.length; o += 4) if (bright(o)) opaque++;
  const step = Math.max(1, Math.ceil(Math.sqrt(opaque / cap)));
  const pts: { x: number; y: number; r: number; g: number; b: number }[] = [];
  for (let y = 0; y < size; y += step) {
    for (let x = 0; x < size; x += step) {
      const o = (y * size + x) * 4;
      if (!bright(o)) continue;
      pts.push({
        x: (x + Math.random() * step) / size,
        y: (y + Math.random() * step) / size,
        // Lifted a little: additive blending on a dark overlay reads dull at the source values.
        r: Math.min(1, data[o] / 255 + 0.15),
        g: Math.min(1, data[o + 1] / 255 + 0.15),
        b: Math.min(1, data[o + 2] / 255 + 0.15),
      });
    }
  }
  return { pts, spacing: step / size };
}

function dotTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.85)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export async function init(canvas: HTMLCanvasElement): Promise<GateScene> {
  const hero = canvas.parentElement!;
  const mark = hero.querySelector<HTMLImageElement>(".hero__logo-item--2")!;
  const small = innerWidth < 768;

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1 : 1.5));
  const tick = Promise.withResolvers<void>();
  setTimeout(tick.resolve);
  await tick.promise;
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 1, 4000);
  camera.position.z = 2000;
  const group = new Group();
  scene.add(group);

  const { pts, spacing } = await sampleMark(mark, small ? 700 : 1400);
  const n = pts.length;
  const pos = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const start = new Float32Array(n * 2); // scatter origin, in [-1, 1] of the spread
  const drift = new Float32Array(n * 2); // dust destination, in [-1, 1] of the spread
  const phase = new Float32Array(n);
  pts.forEach((p, i) => {
    col.set([p.r, p.g, p.b], i * 3);
    start.set([Math.random() * 2 - 1, Math.random() * 2 - 1], i * 2);
    drift.set([Math.random() * 2 - 1, Math.random() * 2 - 1], i * 2);
    phase[i] = Math.random() * Math.PI * 2;
  });
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3).setUsage(DynamicDrawUsage));
  geo.setAttribute("color", new BufferAttribute(col, 3));
  const mat = new PointsMaterial({
    size: 3,
    map: dotTexture(),
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(geo, mat);
  points.frustumCulled = false;
  group.add(points);

  // Layout in CSS pixels, centred on the canvas (fixed to the viewport); the mark box, measured on
  // every scroll, is where the particles form.
  let W = 1;
  let H = 1;
  let mx = 0;
  let my = 0;
  let mw = 1;
  let spreadX = 1;
  let spreadY = 1;
  // Where the mark box sits on the canvas: cheap, so it can run on every scroll while forming.
  const measure = () => {
    const cr = canvas.getBoundingClientRect();
    const mr = mark.getBoundingClientRect();
    mx = mr.left - cr.left - W / 2;
    my = H / 2 - (mr.top - cr.top);
    mw = mr.width;
  };
  // Drawing buffer and camera: only on resize (setSize recreates the buffer, never do it per scroll).
  const resize = () => {
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    renderer.setSize(W, H, false);
    Object.assign(camera, { left: -W / 2, right: W / 2, top: H / 2, bottom: -H / 2 });
    camera.updateProjectionMatrix();
    spreadX = W * 0.55;
    spreadY = H * 0.55;
    measure();
    mat.size = Math.max(2.5, spacing * mw * 1.4);
  };
  resize();
  new ResizeObserver(resize).observe(canvas);
  addEventListener("scroll", () => formed || measure(), { passive: true });

  let px = 0;
  let py = 0;
  addEventListener(
    "pointermove",
    (e) => {
      px = (e.clientX / innerWidth) * 2 - 1;
      py = (e.clientY / innerHeight) * 2 - 1;
    },
    { passive: true },
  );

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let elapsed = 0;
  let last: number | undefined;
  let formed = false;

  const frame = (now: number) => {
    const dt = last === undefined ? 0 : Math.min((now - last) / 1000, 0.05);
    last = now;
    elapsed += dt;

    const k = easeOut(Math.min(elapsed / FORM, 1));
    if (!formed && k === 1) {
      formed = true;
      hero.classList.add("hero--formed");
    }
    const d = easeInOut(Math.min(Math.max((elapsed - FORM - HOLD) / DISPERSE, 0), 1));
    const wobble = mw * 0.01;
    for (let i = 0; i < n; i++) {
      const o = i * 3;
      const p = pts[i];
      const b = Math.sin(elapsed * 1.6 + phase[i]) * wobble;
      // Dust keeps drifting on its own after the dispersal, slowly, each grain on its own phase.
      const t = elapsed * 0.25 + phase[i];
      const dx = (drift[i * 2] + Math.sin(t) * 0.12) * spreadX;
      const dy = (drift[i * 2 + 1] + Math.cos(t * 0.8) * 0.12) * spreadY;
      const fx = mx + p.x * mw;
      const fy = my - p.y * mw + b;
      pos[o] = (start[i * 2] * spreadX * (1 - k) + fx * k) * (1 - d) + dx * d;
      pos[o + 1] = (start[i * 2 + 1] * spreadY * (1 - k) + fy * k) * (1 - d) + dy * d;
      pos[o + 2] = b * 4;
    }
    geo.attributes.position.needsUpdate = true;
    // Formed mark fades out under the real logo; the dust stays faint so the checklist keeps its contrast.
    mat.opacity = 1 - 0.7 * d;
    mat.size = Math.max(2.5, spacing * mw * 1.4) * (1 - 0.4 * d);

    const damp = 1 - Math.exp(-dt * 4);
    group.position.x += (-px * 12 * (1 + 2 * d) - group.position.x) * damp;
    group.position.y += (py * 12 * (1 + 2 * d) - group.position.y) * damp;

    renderer.render(scene, camera);
  };

  await renderer.compileAsync(scene, camera);

  return {
    start() {
      last = undefined;
      renderer.setAnimationLoop(frame);
    },
    stop() {
      renderer.setAnimationLoop(null);
    },
  };
}
