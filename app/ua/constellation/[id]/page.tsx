import type { Metadata } from "next";
import { getConstellationMeta, BASE_URL } from "@/lib/metadata-helpers";
import ConstellationPageInner from "@/components/ConstellationPageInner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = getConstellationMeta(id, "uk");

  if (!meta) {
    return {
      title: "Сузір'я не знайдено | Енциклопедія сузір'їв",
    };
  }

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: meta.canonicalPath,
      languages: {
        "en": `${BASE_URL}/constellation/${id}`,
        "uk": `${BASE_URL}/ua/constellation/${id}`,
        "x-default": `${BASE_URL}/constellation/${id}`,
      },
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonicalPath,
      siteName: "Енциклопедія сузір'їв",
      locale: "uk_UA",
      alternateLocale: ["en_US"],
      type: "article",
      images: [
        {
          url: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ursa_Major_constellation_map.svg/1200px-Ursa_Major_constellation_map.svg.png`,
          width: 1200,
          height: 630,
          alt: `Карта сузір'я ${meta.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UaConstellationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Рендерить той самий компонент але з defaultLang="uk"
  return <ConstellationPageInner params={params} defaultLang="uk" />;
}