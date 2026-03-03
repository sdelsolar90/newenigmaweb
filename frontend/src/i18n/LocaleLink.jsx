import { Link } from "react-router-dom";
import { useT } from "./LanguageContext.jsx";
import { ROUTE_MAP, getEquivalentPath, getLangFromPath } from "./routes.js";

export function localeHref(to, lang) {
  if (ROUTE_MAP[lang]?.[to] !== undefined) {
    return ROUTE_MAP[lang][to];
  }

  if (typeof to === "string" && to.startsWith("/")) {
    const sourceLang = getLangFromPath(to.split("#")[0]);
    if (sourceLang !== lang) {
      return getEquivalentPath(to, lang);
    }
    return to;
  }

  return to;
}

export default function LocaleLink({ to, children, ...props }) {
  const { lang } = useT();
  const resolvedHref = localeHref(to, lang);

  return (
    <Link to={resolvedHref} {...props}>
      {children}
    </Link>
  );
}
