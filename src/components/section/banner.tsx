import { useTheme } from "@/context/theme-provider";
import { Button } from "../ui/button";
import { ShortnerLink } from "../shortner-link";

export function Banner() {
  const { theme } = useTheme()

  return (
    <section className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-5xl font-semibold text-title text-balance">Links curtos, alcance <br className="hidden md:block" /> infinito</h2>
        <p className="text-xl text-subtitle">Mais do que encurtar: uma solução completa para proteger e crescer sua marca.</p>

        <ShortnerLink />

        <Button variant={"cartoon"} size={"lg"} className="font-medium text-base">
          Cadastre-se
        </Button>
      </div>

      {theme === "dark" ? (
        <img src="hero-dark.svg" alt="image hero" className="w-[600px]" />
      ) : theme === "light" ? (
        <img src="hero-light.svg" alt="image hero" className="w-[600px]" />
      ) : null}
    </section>
  )
}