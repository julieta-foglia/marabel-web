import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QueryClientProviderComponent from "./components/queryClientProvider";

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
  title: "Marabel",
  description: "Marabel aromas",
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
              <Footer />
            </body>
          </QueryClientProviderComponent>
        </Suspense>
      </NuqsAdapter>
    </html>
  );
}
