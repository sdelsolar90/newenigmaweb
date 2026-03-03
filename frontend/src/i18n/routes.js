export const ROUTE_MAP = {
  es: {
    home: "/",
    services: "/servicios",
    plans: "/planes",
    clients: "/clientes",
    about: "/nosotros",
    contact: "/contacto",
    privacy: "/privacidad",
    terms: "/terminos",
    cookies: "/cookies",
    complaints: "/libro-reclamaciones",
  },
  en: {
    home: "/en",
    services: "/en/services",
    plans: "/en/plans",
    clients: "/en/clients",
    about: "/en/about",
    contact: "/en/contact",
    privacy: "/en/privacy",
    terms: "/en/terms",
    cookies: "/en/cookies",
  },
};

export function localePath(key, lang) {
  return ROUTE_MAP[lang]?.[key] ?? ROUTE_MAP["es"][key] ?? "/";
}

export function getEquivalentPath(currentPath, targetLang) {
  const [pathWithoutHash, hash] = currentPath.split("#");
  const hashSuffix = hash ? `#${hash}` : "";

  const sourceLang = getLangFromPath(pathWithoutHash);
  const sourceRoutes = ROUTE_MAP[sourceLang];
  const targetRoutes = ROUTE_MAP[targetLang];

  const matchedKey = Object.keys(sourceRoutes).find(
    (key) => sourceRoutes[key] === pathWithoutHash
  );

  if (matchedKey && targetRoutes[matchedKey]) {
    return targetRoutes[matchedKey] + hashSuffix;
  }

  return (ROUTE_MAP[targetLang].home ?? "/") + hashSuffix;
}

export function getLangFromPath(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}
