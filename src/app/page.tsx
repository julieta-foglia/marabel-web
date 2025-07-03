"use client";

import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroBanner />
        <div className="flex flex-col gap-6 mx-20 mb-20 items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="font-[family-name:var(--font-raleway)] text-2xl text-accent font-medium">
              Colección 2025
            </p>
            <p className="font-[family-name:var(--font-nunito)] text-5xl font-semibold text-primary">
              Los más elegidos
            </p>
            <p className="font-[family-name:var(--font-nunito)] text-base text-grey-primary mt-4">
              Amplia gama de fragancias en diferentes formatos. En Marabel vas a
              encontrar aromatizadores para tela y ambientes, spray para el
              hogar, aerosoles, varillas difusoras, aceites esenciales,
              sahumerios, jabones de manos, body splash, perfumes, cremas y
              mucho más!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
