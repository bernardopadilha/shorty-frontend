import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faq: { name: string; description: string }[] = [
  {
    name: 'Como funciona o encurtamento de links?',
    description: 'Cole seu link longo e receba um link curto e personalizado instantaneamente.'
  },
  {
    name: 'Os links expiram?',
    description: 'Não! Seus links ficam ativos para sempre, sem expiração.'
  },
  {
    name: 'Posso personalizar meus links?',
    description: 'Sim! Escolha um alias personalizado para seus links curtos.'
  },
]

export function FAQ() {
  return (
    <section className="container mx-auto px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-primary/7 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-[120px] font-semibold text-title leading-none mb-4">
          FAQ
        </h2>
        <p className="text-xl text-subtitle max-w-2xl mx-auto">
          Tem alguma dúvida? Estamos aqui para ajudar você a aproveitar ao máximo nossa plataforma.
        </p>
      </div>

      <Accordion
        type="single"
        defaultValue="item-1"
        className="w-full flex flex-col gap-4"
      >
        {faq.map((item, i) => (
          <AccordionItem value={`item-${i + 1}`} className = "bg-white/5 backdrop-blur-lg shadow" >
          <AccordionTrigger>{item.name}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
        ))}
    </Accordion>
    </section >
  )
}