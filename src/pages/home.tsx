import { Banner } from '@/components/section/banner';
import { Pricing } from '@/components/section/pricing';
import { ContactUs } from '@/components/section/contact-us';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FAQ } from '@/components/section/FAQ';
import { Footer } from '@/components/section/footer';

export function Home() {
  const { hash } = useLocation()

  const refHeroSection = useRef<HTMLDivElement | null>(null)
  const refPricing: any = useRef<HTMLDivElement | null>(null)
  const refContactUs: any = useRef<HTMLDivElement | null>(null)
  const refFAQ: any = useRef<HTMLDivElement | null>(null)

  function scrollPageToSection({ refOffsetTop, scroll }: {
    refOffsetTop: {
      current: { offsetTop: number } | null,
    }
    scroll: number
  }) {
    if (refOffsetTop.current) {
      window.scroll({
        top: refOffsetTop.current.offsetTop + Number(scroll),
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (hash === '') {
      scrollPageToSection({
        refOffsetTop: refHeroSection,
        scroll: 0
      })
    }

    if (hash === '#pricing') {
      scrollPageToSection({
        refOffsetTop: refPricing,
        scroll: 190
      })
    }

    if (hash === '#contact-us') {
      scrollPageToSection({
        refOffsetTop: refContactUs,
        scroll: 150
      })
    }

    if (hash === '#faq') {
      scrollPageToSection({
        refOffsetTop: refFAQ,
        scroll: 150
      })
    }
  }, [hash])

  return (
    <section>
      <div id='home' ref={refHeroSection} className='pb-16'>
        <Banner />
      </div>
      <div id='pricing' ref={refPricing} className='py-16'>
        <Pricing />
      </div>
      <div id='contact-us' ref={refContactUs} className='py-16'>
        <ContactUs />
      </div>

      <div id='faq' ref={refFAQ} className='py-16'>
        <FAQ />
      </div>

      <div className='bg-primary dark:bg-background border-t-4 border-gray-400 dark:border-zinc-800'>
        <Footer />
      </div>
    </section>
  )
}