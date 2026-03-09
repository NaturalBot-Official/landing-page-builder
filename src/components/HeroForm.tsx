import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  restaurante: z.string().min(1, "Selecione uma opção"),
  delivery: z.string().min(1, "Selecione uma opção"),
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  celular: z.string().trim().min(10, "Celular inválido").max(20),
  captcha: z.string().refine((val) => val === "11", "Resposta incorreta"),
  consentimento: z.literal(true, { errorMap: () => ({ message: "Você precisa aceitar para continuar" }) }),
});

type FormData = z.infer<typeof formSchema>;

const HeroForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurante: "",
      delivery: "",
      nome: "",
      email: "",
      celular: "",
      captcha: "",
      consentimento: undefined,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-lead-email", {
        body: {
          nome: data.nome,
          email: data.email,
          celular: data.celular,
          restaurante: data.restaurante,
          delivery: data.delivery,
        },
      });
      if (error) throw error;
      toast.success("Formulário enviado com sucesso! Entraremos em contato.");
      reset();
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-12 md:py-20"
      style={{
        background: "linear-gradient(135deg, hsl(330, 85%, 45%), hsl(280, 70%, 40%))",
      }}
    >
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Preencha o formulário, simule o seu pedido em uma pizzaria e veja como é ser atendido pelo nosso Copiloto de Vendas
          </h1>
          <p className="text-lg font-medium text-white/90 md:text-xl">
            Descubra porque somos a nova geração de chatbot
          </p>
        </div>

        {/* Right side - Form card */}
        <Card className="border-0 shadow-2xl" style={{ background: "hsl(38, 95%, 55%)" }}>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Select restaurante */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">
                  Trabalha, gerencia ou é dono de uma operação de restaurante?
                </Label>
                <Select onValueChange={(v) => setValue("restaurante", v)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                  </SelectContent>
                </Select>
                {errors.restaurante && <p className="text-xs font-medium text-destructive">{errors.restaurante.message}</p>}
              </div>

              {/* Radio delivery */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Trabalha com delivery?</Label>
                <RadioGroup onValueChange={(v) => setValue("delivery", v)} className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="sim" id="delivery-sim" />
                    <Label htmlFor="delivery-sim" className="text-foreground">Sim</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="nao" id="delivery-nao" />
                    <Label htmlFor="delivery-nao" className="text-foreground">Não</Label>
                  </div>
                </RadioGroup>
                {errors.delivery && <p className="text-xs font-medium text-destructive">{errors.delivery.message}</p>}
              </div>

              {/* Nome */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Nome</Label>
                <Input {...register("nome")} placeholder="Seu nome completo" className="bg-background" />
                {errors.nome && <p className="text-xs font-medium text-destructive">{errors.nome.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Email</Label>
                <Input {...register("email")} type="email" placeholder="seu@email.com" className="bg-background" />
                {errors.email && <p className="text-xs font-medium text-destructive">{errors.email.message}</p>}
              </div>

              {/* Celular */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Celular</Label>
                <div className="flex gap-2">
                  <span className="flex h-10 items-center rounded-md border border-input bg-background px-3 text-sm">
                    🇧🇷 +55
                  </span>
                  <Input {...register("celular")} placeholder="(00) 00000-0000" className="bg-background" />
                </div>
                {errors.celular && <p className="text-xs font-medium text-destructive">{errors.celular.message}</p>}
              </div>

              {/* Captcha */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Quanto é 10 + 1?</Label>
                <Input {...register("captcha")} placeholder="Sua resposta" className="bg-background" />
                {errors.captcha && <p className="text-xs font-medium text-destructive">{errors.captcha.message}</p>}
              </div>

              {/* Checkbox consentimento */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentimento"
                  onCheckedChange={(checked) => setValue("consentimento", checked === true ? true : undefined as any)}
                  className="mt-1"
                />
                <Label htmlFor="consentimento" className="text-xs leading-relaxed text-foreground">
                  Ao informar meus dados, eu concordo com a{" "}
                  <a href="#" className="underline font-semibold">Política de Privacidade</a> e com os{" "}
                  <a href="#" className="underline font-semibold">Termos de Uso</a>. Aceito receber comunicações da NaturalBot.
                </Label>
              </div>
              {errors.consentimento && <p className="text-xs font-medium text-destructive">{errors.consentimento.message}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-6 text-lg font-bold hover:bg-primary/90"
              >
                {isSubmitting ? "ENVIANDO..." : "TESTAR COPILOTO"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroForm;
