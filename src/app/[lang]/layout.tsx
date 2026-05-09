import type { Metadata } from "next";
import { Jersey_25, Montserrat } from "next/font/google";
import {hasLocale} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import "../globals.css";

const displayFont = Jersey_25({
  variable: "--font-jersey",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dam.cool"),
  title: {
    default: "dam.cool | Coole plekken in Amsterdam",
    template: "%s | dam.cool",
  },
  description:
    "dam.cool verzamelt coole plekken in Amsterdam: minimalistisch, snel en tweetalig (NL/EN).",
  keywords: [
    "Amsterdam",
    "coole plekken",
    "hidden gems",
    "dam.cool",
    "things to do Amsterdam",
  ],
  openGraph: {
    title: "dam.cool | Coole plekken in Amsterdam",
    description:
      "Een minimalistische gids voor coole plekken in Amsterdam, in NL en EN.",
    url: "https://dam.cool",
    siteName: "dam.cool",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/logo-dam-cool.png",
        width: 1200,
        height: 630,
        alt: "dam.cool logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dam.cool | Coole plekken in Amsterdam",
    description:
      "Minimalistische gids met coole plekken in Amsterdam, in NL en EN.",
    images: ["/logo-dam-cool.png"],
  },
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((lang) => ({lang}));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();

  setRequestLocale(lang);

  return (
    <html
      lang={lang}
      className={`${displayFont.variable} ${bodyFont.variable} ${bodyFont.className}`}
    >
      <body className="bg-white text-dam-ink antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
