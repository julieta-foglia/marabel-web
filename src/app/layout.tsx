import type { Metadata } from "next";
import { Cabin, Nunito_Sans, Quicksand, Raleway } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import Header from "./components/Header";
import QueryClientProviderComponent from "./components/queryClientProvider";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400"],
});

const cabin = Cabin({
  variable: "--font-cabin",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <NuqsAdapter>
        <QueryClientProviderComponent>
          <body
            className={`${nunito.variable} ${quicksand.variable} ${raleway.variable} ${cabin.variable} antialiased`}
          >
            <Header />
            {children}
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
          </body>
        </QueryClientProviderComponent>
      </NuqsAdapter>
    </html>
  );
}
