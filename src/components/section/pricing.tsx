import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "../ui/separator";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary" | 'cartoon';
}

const plans: PlanProps[] = [
  {
    name: "Free Plan",
    price: "Free",
    description: "Perfeito para começar com encurtamento de links básico",
    features: [
      "Até 10 links por mês",
      "Links personalizados básicos",
      "Estatísticas básicas",
      "Suporte por email",
      "Sem marca d'água"
    ],
    buttonText: "Começar Grátis",
    buttonVariant: "outline"
  },
  {
    name: "Pro Plan",
    price: "R$ 19,90",
    description: "Ideal para profissionais e pequenas empresas",
    features: [
      "Links ilimitados",
      "Estatísticas detalhadas",
      "QR Code",
      "API access",
      "Relatórios avançados"
    ],
    popular: true,
    buttonText: "Começar Pro",
    buttonVariant: "cartoon"
  },
  {
    name: "Enterprise Plan",
    price: "R$ 99,90",
    description: "Para grandes empresas com necessidades específicas",
    features: [
      "Tudo do plano Pro",
      "Múltiplos domínios",
      "Integração SSO",
      "Suporte 24/7",
      "Dedicated account manager"
    ],
    buttonText: "Falar com Vendas",
    buttonVariant: "outline"
  }
];

export function Pricing() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-[100px] sm:text-[170px] md:text-[200px] lg:text-[230px] font-semibold text-title">Pricing</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-2 -mt-20 sm:-mt-30 md:-mt-35 lg:-mt-40">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="bg-white/5 backdrop-blur-lg"
          >
            <CardHeader className="text-start">
              <CardTitle className="text-lg font-light">{plan.name}</CardTitle>
              <div>
                <span className="text-4xl font-medium">{plan.price}</span>
                {plan.price !== "Grátis" && (
                  <span className="text-muted-foreground">/mês</span>
                )}
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-primary p-1 size-7 flex items-center justify-center border border-lime-900 rounded-full dark:bg-neutral-800 dark:border-border">
                      <Check className="size-4 text-title" />
                    </div>
                    <span className="text-sm text-subtitle">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-6">
              <Button
                variant={plan.buttonVariant}
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm">
          Todos os planos incluem 30 dias de garantia. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
}