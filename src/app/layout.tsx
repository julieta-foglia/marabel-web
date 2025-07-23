import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QueryClientProviderComponent from "./components/queryClientProvider";

import WhatsappSticky from "./components/WhatsappSticky";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marabel | Aromas que transforman espacios",
  description:
    "Marabel ofrece soluciones completas de aromatización, productos de limpieza y perfumería. Venta mayorista y minorista. Aromas que transforman espacios.",
  keywords: [
    "aromatización de ambientes",
    "esencias",
    "productos de limpieza",
    "perfumería",
    "equipos aromatizadores",
    "Marabel",
    "fragancias",
    "ambientadores",
  ],
  openGraph: {
    title: "Marabel | Aromatización de Ambientes, Limpieza y Perfumería",
    description:
      "Desde equipos aromatizadores hasta fragancias exclusivas, Marabel transforma tu espacio. Conocé nuestros productos de limpieza, perfumería y ambientación.",
    url: "https://www.marabel.com.ar",
    siteName: "Marabel",
    images: [
      {
        url: "https://images.ctfassets.net/lxeukizmc9ta/2gWmKULzTN5GzqWhv8AKqj/cc66c6723d0289d7f946eb58263ffeea/logo_marabel.png", // Asegurate de tener esta imagen
        width: 1200,
        height: 630,
        alt: "Marabel - Aromas que transforman espacios",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marabel | Aromatización de Ambientes, Limpieza y Perfumería",
    description:
      "Productos y servicios de aromatización, limpieza y perfumería. Fragancias que transforman espacios.",
    images: ["https://www.marabel.com.ar/images/og-image.jpg"],
  },
  metadataBase: new URL("https://www.marabel.com.ar"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NuqsAdapter>
        <Suspense>
          <QueryClientProviderComponent>
            <body
              className={`${nunito.variable} ${raleway.variable} antialiased flex flex-col min-h-screen`}
            >
              <NextTopLoader height={5} showSpinner color="#ffb770" />
              <Header />
              <main className="font-[family-name:var(--font-nunito)] flex-1 overflow-x-hidden lg:overflow-x-scroll">
                {children}
              </main>
              <WhatsappSticky />
              <Footer />
            </body>
          </QueryClientProviderComponent>
        </Suspense>
      </NuqsAdapter>
    </html>
  );
}
