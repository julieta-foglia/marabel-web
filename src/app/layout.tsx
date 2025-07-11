import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=optional&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <NuqsAdapter>
        <Suspense>
          <QueryClientProviderComponent>
            <body
              className={`${nunito.variable} ${raleway.variable} antialiased flex flex-col min-h-screen`}
            >
              <Header />
              <main className="font-[family-name:var(--font-nunito)] flex-1">
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
