/** Single source for brand and contact data. Layout, components and JSON-LD read from here. */

export const SITE_URL = new URL(import.meta.env.SITE).origin;
export const BRAND = "Abaddon Pest Control Services Inc.";
export const EMAIL = "abaddonpco@gmail.com";
export const FDA_LICENSE = "CCHUHSRR-RIVA-PCO-01-ER-732510";

export interface Phone {
  e164: string;
  display: string;
}

export const PHONES: Phone[] = [
  { e164: "+639175842100", display: "+63 917 584 2100" },
  { e164: "+639175090485", display: "+63 917 509 0485" },
];

export const ADDRESS = {
  street: "Garden Grove Village, Salitran IV",
  locality: "Dasmariñas",
  region: "Cavite",
  postalCode: "4114",
  country: "PH",
} as const;

export const GEO = { lat: 14.344438363320867, lng: 120.9524173725775 } as const;

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100063857540013";
export const TIKTOK_URL = "https://tiktok.com/@abaddon_2020";
export const MAPS_URL = `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}`;

export const SERVICE_AREAS = ["Dasmariñas City, Cavite", "Muntinlupa City", "Parañaque City"];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const telHref = (e164: string) => `tel:${e164}`;
export const viberHref = (e164: string) => `viber://chat?number=%2B${e164.slice(1)}`;
export const whatsappHref = (e164: string) => `https://wa.me/${e164.slice(1)}`;
