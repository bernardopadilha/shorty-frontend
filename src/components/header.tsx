import { Button } from './ui/button'
import { ModeToggle } from './mode-togle'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'

const items = [
  { label: 'Início', param: '', id: 'home' },
  { label: 'Pricing', param: '#pricing', id: 'pricing' },
  { label: 'Contact us', param: '#contact-us', id: 'contact-us' },
  { label: 'FAQ', param: '#faq', id: 'faq' },
]

export const Header = () => {
  const [hovering, setHovering] = useState<string | null>(null)
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -30% 0px',
      threshold: 0.1,
    }

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const sectionId =
          entry.target.id === 'home' ? '' : `#${entry.target.id}`
          console.log(sectionId)
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length > 0) {
      sections.forEach((section) => section && observer.observe(section))
    }

    return () => {
      sections.forEach((section) => section && observer.unobserve(section))
    }
  }, [])

  return (
    <div className='flex flex-row items-center justify-between rounded-2xl bg-background border py-2 px-4 shadow dark:shadow dark:shadow-gray-800'>
      <img src="/logo-dark.svg" alt="Logo Shorty" className='w-28' />

      <nav>
        <ul className="hidden items-center gap-1 text-base text-title lg:flex">
          {items.map(({ label, param }) => (
            <li
              key={label}
              className={cn(
                'relative cursor-pointer px-4 after:absolute after:-bottom-[25px] after:left-0 after:h-[3px] after:w-0 after:rounded-b-md after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
                param === activeSection && !hovering && 'after:w-full',
              )}
              onMouseEnter={() => setHovering(param)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => navigate(param)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex gap-2'>
        <Button variant={'cartoon'} className='text-primary-foreground hidden lg:flex'>Entrar</Button>
        <Button variant={'cartoon'} className='text-primary-foreground hidden lg:flex'>Cadastrar</Button>
        <ModeToggle />
        
        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'cartoon'} className='flex lg:hidden'>
              <MenuIcon className='size-5 text-white dark:text-primary-foreground' />
            </Button>
          </SheetTrigger>
          <MenuMobile />
        </Sheet>
      </div>
    </div>
  )
}

export function MenuMobile() {
  return (
    <SheetContent className='p-5'>
      <img src='./logo-dark.svg' alt='Logo Shorty' className='w-28'/>

      <div className='flex flex-col w-full gap-3'>
        {items.map(item => (
        <SheetClose asChild>
          <Link 
            to={item.param}
            className='font-inherit bg-primary border border-lime-700 text-primary-foreground shadow-[0px_3px_0px_0px_#64A30D] active:translate-y-[0.225em] active:shadow-[0px_2px_0px_0px_#64A30D] hover:brightness-90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer h-10' 
          >
            {item.label}
          </Link>
        </SheetClose>
        ))}
      </div>

      <SheetFooter>
        <h2>Redes Sociais</h2>

      </SheetFooter>
    </SheetContent>
  )
}