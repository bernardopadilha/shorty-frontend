import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Mail, MessageSquare, Phone, MapPin, Send, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  action?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: <Mail className="size-6" />,
    title: "Email",
    description: "Envie-nos um email",
    value: "contato@shorty.com",
    action: "Enviar email"
  },
  {
    icon: <Phone className="size-6" />,
    title: "Telefone",
    description: "Ligue para nós",
    value: "+55 (11) 99999-9999",
    action: "Ligar agora"
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Endereço",
    description: "Visite nosso escritório",
    value: "São Paulo, SP - Brasil"
  }
];

const stats = [
  { icon: <Users className="size-5" />, value: "50K+", label: "Usuários ativos" },
  { icon: <Zap className="size-5" />, value: "1M+", label: "Links criados" },
  { icon: <Clock className="size-5" />, value: "24/7", label: "Suporte disponível" }
];

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
  };

  return (
    <section className="container mx-auto px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/7 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-[70px] sm:text-[100px] md:text-[120px] font-semibold text-title leading-none mb-4">
          Contact Us
        </h2>
        <p className="text-xl text-subtitle max-w-2xl mx-auto">
          Estamos aqui dispostos a ouvir seu feedback e melhorar no que for possível para melhoras sua experiência.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-3">
                <div className="bg-primary/20 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-title mb-1">{stat.value}</div>
              <div className="text-sm text-subtitle">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card className="bg-white/5 backdrop-blur-lg border">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-title flex items-center gap-2">
              <MessageSquare className="size-6" />
              Envie uma mensagem
            </CardTitle>
            <CardDescription className="text-subtitle">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-subtitle mb-2 block">
                    Nome completo
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-subtitle mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-subtitle mb-2 block">
                  Assunto
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-subtitle mb-2 block">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre sua dúvida ou sugestão..."
                  className="w-full min-h-[120px] px-3 py-2 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-lime-600 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="cartoon"
                size="lg"
                className="w-full"
              >
                <Send className="size-4" />
                Enviar mensagem
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-title mb-6">
              Outras formas de contato
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border hover:bg-white/10 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-title mb-1">{method.title}</h4>
                        <p className="text-sm text-subtitle mb-2">{method.description}</p>
                        <p className="text-base text-title font-medium">{method.value}</p>
                        {method.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3"
                          >
                            {method.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 shadow rounded-xl">
        <div className="bg-gradient-to-r from-lime-400 to-gray-200 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="text-2xl font-semibold text-title mb-4">
            Pronto para começar?
          </h3>
          <p className="text-subtitle mb-6 max-w-md mx-auto">
            Junte-se a milhares de usuários que já estão aproveitando o poder dos links curtos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cartoon" size="lg">
              Começar agora
            </Button>
            <Button variant="outline" size="lg" className="text-title border-2">
              Ver demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}