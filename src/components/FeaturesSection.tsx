import { Brain, Globe, Monitor, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Tecnologia de IA avançada que entende o contexto das conversas e responde de forma inteligente aos seus clientes.",
  },
  {
    icon: Globe,
    title: "Atendimento Multilíngue",
    description:
      "Atenda clientes em diversos idiomas automaticamente, sem necessidade de tradutores ou equipes adicionais.",
  },
  {
    icon: Monitor,
    title: "Integração com Monitores",
    description:
      "Integre diretamente com seus monitores de cozinha e sistemas de gestão para uma operação mais eficiente.",
  },
  {
    icon: MessageSquare,
    title: "Linguagem Personalizada",
    description:
      "Personalize o tom de voz e a linguagem do chatbot para combinar com a identidade da sua marca.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Somos o 1° Copiloto de Vendas com IA para restaurantes do Brasil!
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          Tenha um atendimento automatizado dos seus pedidos e com uma linguagem mais natural
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, hsl(330, 85%, 45%), hsl(280, 70%, 40%))" }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
