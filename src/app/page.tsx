import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="w-full"
                  width={500}
                  height={500}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Tu imagen en una{" "}
                <span className="bg-cyan-600 px-2 text-white">Funda</span>{" "}
                personalizada!
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Captura tus recuerdos favoritos con una funda para celular única
                y personalizada.{" "}
                <span className="font-semibold">CaseCraze</span> te permite
                proteger tus memorias, no solo tu teléfono.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                    Material de alta calidad y durabilidad.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                    Garantía de 1 año.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-cyan-600" />
                    Compatible con los ultimos modelos de Iphone.
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-opacity-70 ring-cyan-600"
                    src="/users/user-1.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-opacity-70 ring-cyan-600"
                    src="/users/user-2.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-opacity-70 ring-cyan-600"
                    src="/users/user-3.png"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-opacity-70 ring-cyan-600"
                    src="/users/user-4.jpg"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-opacity-70 ring-cyan-600"
                    src="/users/user-5.jpg"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                    <Star className="h-4 w-4 text-cyan-600 fill-cyan-600" />
                  </div>

                  <p>
                    <span className="font-semibold">+1.250</span> clientes
                    satisfechos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/tu-imagen.png" alt="Tu imagen" className="absolute w-40 lg:w-52 left-56 -top-24 select-none hidden sm:block lg:hidden xl:block"/>
              {/* <img src="/linea.png" className="absolute w-20 -left-6 -bottom-6 select-none" /> */}
              <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
