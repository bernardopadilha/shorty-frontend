import { ArrowRightIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";

export function Footer() {
  const { theme } = useTheme()

  return (
    <>
      <section className="container mx-auto px-4 relative py-16 flex flex-col md:flex-row items-start justify-between">
        <div className="flex flex-col items-start gap-8">
          <div>
            {theme === 'dark' ? (
              <img src="./logo-dark.svg" alt="Logo Shorty" className="w-32" />
            ) : (
              <img src="./logo.svg" alt="Logo Shorty" className="w-32" />
            )}
            <p className="text-black-800/80 dark:text-subtitle font-medium">Conectando ideias.</p>
            <p className="text-black-800/80 dark:text-subtitle font-medium">Encurtando distâncias.</p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <h3 className="text-xl font-medium text-title">Receba nossa apresentação</h3>

            <div className="flex items-center gap-2">
              <Input
                placeholder="Digite seu melhor e-mail"
                className="w-xs md:w-md h-12 border-lime-700 dark:border-title focus-visible:border-lime-900 dark:focus-visible:border-lime-600 placeholder:text-title"
              />
              <Button variant={"cartoon"} size={"lg"} className="h-11">
                Enviar
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-8 mt-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-title font-medium text-lg">Navegue</h2>
            <div className="flex flex-col gap-1.5 text-title font-light pr-2">
              <Link to={'/'} className="transition-all duration-300 hover:ml-1 hover:text-gray-100 dark:hover:text-primary">Home</Link>
              <Link to={'/#pricing'} className="transition-all duration-300 hover:ml-1 hover:text-gray-100 dark:hover:text-primary">Pricing</Link>
              <Link to={'/#contact-us'} className="transition-all duration-300 hover:ml-1 hover:text-gray-100 dark:hover:text-primary">Contact Us</Link>
              <Link to={'/#faq'} className="transition-all duration-300 hover:ml-1 hover:text-gray-100 dark:hover:text-primary">FAQ</Link>
            </div>
          </div>

          <div className="flex-col gap-4 sm:flex md:hidden lg:flex">
            <h2 className="text-title font-medium text-lg">Redes Sociais</h2>

            <div className="grid grid-cols-3 gap-3 text-title font-light pr-2">
              <Link to={'/'} className="transition-all duration-300 hover:mb-1 p-1 size-8 rounded-full flex items-center justify-center bg-primary">
                <FacebookIcon className="size-5 text-primary-foreground" />
              </Link>
              <Link to={'https://www.instagram.com/bernardo_limasss_/'} className="transition-all duration-300 hover:mb-1 p-1 size-8 rounded-full flex items-center justify-center bg-primary">
                <InstagramIcon className="size-5 text-primary-foreground" />
              </Link>
              <Link to={'https://github.com/bernardopadilha'} className="transition-all duration-300 hover:mb-1 p-1 size-8 rounded-full flex items-center justify-center bg-primary">
                <GithubIcon className="size-5 text-primary-foreground" />
              </Link>
              <Link to={'https://www.linkedin.com/in/bernardo-alves-padilha-8474a3232/'} className="transition-all duration-300 hover:mb-1 p-1 size-8 rounded-full flex items-center justify-center bg-primary">
                <LinkedinIcon className="size-5 text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </section >
      <p className="text-center pb-2 ">
        Desenvolvido por 
        <a 
          href="https://github.com/bernardopadilha" 
          className="font-medium dark:hover:text-primary hover:text-title ml-1 transition-all"
        >
          Bernardo Padilha
        </a>
      </p>
    </>
  )
}