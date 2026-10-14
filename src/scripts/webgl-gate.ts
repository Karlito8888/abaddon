/**
 * Starts a three.js scene as soon as it can run: WebGL 2 available, after `load` and an
 * idle slot. Runs only while the canvas is on screen (IntersectionObserver), and swallows
 * every failure so the static fallback stays in place. No user or system preference stops it.
 */
export interface Scene {
  start(): void;
  stop(): void;
}

export type SceneModule = { init(canvas: HTMLCanvasElement): Scene | Promise<Scene> };

export async function startWhenIdle(canvas: HTMLCanvasElement, load: () => Promise<SceneModule>): Promise<void> {
  try {
    if (!(window.WebGL2RenderingContext && document.createElement("canvas").getContext("webgl2"))) return;
  } catch {
    return;
  }

  const idle = Promise.withResolvers<void>();
  const schedule = () =>
    "requestIdleCallback" in window
      ? requestIdleCallback(() => idle.resolve(), { timeout: 2000 })
      : setTimeout(idle.resolve, 200);
  if (document.readyState === "complete") schedule();
  else addEventListener("load", schedule, { once: true });
  await idle.promise;

  try {
    const scene = await (await load()).init(canvas);
    scene.start();
    canvas.classList.add("is-live");
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? scene.start() : scene.stop())).observe(canvas);
  } catch (err) {
    console.warn("Animation disabled:", err);
  }
}
