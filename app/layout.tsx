import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Providers } from "@/app/providers";
import { fontMono, fontSans, fontSerif } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
          <ScrollShadow className="h-screen">
            <main className="container mx-auto max-w-7xl px-6 py-6 md:py-16 flex-grow">
              {children}
            </main>
          </ScrollShadow>
        </Providers>
      </body>
    </html>
  );
}
