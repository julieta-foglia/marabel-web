"use server";
import { cookies } from "next/headers";
import MaterialIcon from "./MaterialIcon";

export default async function UnderMaintenance() {
  const cookieStore = await cookies();

  async function onClickButton(formData: FormData) {
    "use server";
    const code = formData.get("code");

    if (cookieStore && code === "2008") {
      (await cookies()).set("code", "valid");
    }
  }

  return (
    <div className="w-full flex grow flex-col gap-3 justify-center items-center">
      <MaterialIcon
        name="emergency_home"
        fontSize={42}
        className="text-primary"
      />
      <p className="font-[family-name:var(--font-raleway)] text-base lg:text-2xl font-medium">
        Este sitio se encuentra en mantenimiento
      </p>
      <p className="font-[family-name:var(--font-raleway)] text-base lg:text-lg">
        Podés contactarte por redes sociales y whatsapp
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3">
        <p>Acceso con código</p>
        <form className="flex flex-row gap-4" action={onClickButton}>
          <input
            name="code"
            className="bg-white rounded-lg font-[family-name:var(--font-raleway)] px-2"
          />
          <button
            type="submit"
            className="cursor-pointer font-bold w-full py-2 px-4 rounded-lg text-accent bg-white border border-accent shadow-md"
          >
            Validar
          </button>
        </form>
      </div>
    </div>
  );
}
