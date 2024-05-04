import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Providers } from "@/app/providers";
import { fontMono, fontSans, fontSerif } from "@/config/fonts";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://igorantun.com",
    siteName: siteConfig.name,
    title: "Igor Antun - Senior Software Engineer",
    images: ["https://igorantun.vercel.app/images/preview.png"],
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <ScrollShadow id="scroll" className="h-screen scroll-smooth">
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
          </ScrollShadow>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
