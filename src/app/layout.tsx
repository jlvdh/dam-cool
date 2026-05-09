import type { Metadata } from "next";
import { Jersey_25, Montserrat } from "next/font/google";
import "./globals.css";

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
        url: "/logo-dam-cool.svg",
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
    images: ["/logo-dam-cool.svg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}>) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "nl";

  return (
    <html
      lang={locale}
      className={`${displayFont.variable} ${bodyFont.variable} ${bodyFont.className}`}
    >
      <body className="bg-white text-dam-ink antialiased">{children}</body>
    </html>
  );
}
