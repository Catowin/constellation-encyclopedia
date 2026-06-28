import { constellations } from "@/data/constellations";

export const BASE_URL = "https://constellation-encyclopedia.vercel.app";

export type SupportedLang = "en" | "uk";

export function getConstellationMeta(id: string, lang: SupportedLang) {
  const constellation = constellations.find((c) => c.id === id);
  if (!constellation) return null;

  const name =
    lang === "uk"
      ? (typeof constellation.name === "object" ? constellation.name.uk : constellation.name)
      : (typeof constellation.name === "object" ? constellation.name.en ?? constellation.name.uk : constellation.name);

  const canonicalPath =
    lang === "uk"
      ? `${BASE_URL}/ua/constellation/${id}`
      : `${BASE_URL}/constellation/${id}`;

  const alternatePath =
    lang === "uk"
      ? `${BASE_URL}/constellation/${id}`
      : `${BASE_URL}/ua/constellation/${id}`;

  const title =
    lang === "uk"
      ? `${name} — розташування на нічному небі | Енциклопедія сузір'їв`
      : `${name} constellation in the night sky | Constellation Encyclopedia`;

  const description =
    lang === "uk"
      ? `Що таке сузір'я ${name}? Як виглядає ${name}? Як знайти ${name} на нічному небі? Міфологія, легенди та цікаві факти про сузір'я ${name}.`
      : `What is ${name} constellation? How does ${name} constellation look like? How to find the ${name} constellation in the night sky? ${name} mythology, and fascinating facts.`;

  return { name, title, description, canonicalPath, alternatePath };
}