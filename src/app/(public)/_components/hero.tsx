import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "@/../public/doctor-hero.png"; 

export function Hero() {
  return (
    <section className="bg-background w-full">
      <div className="container mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          
          {/* Conteúdo de Texto */}
          <article className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
              Encontre os melhores profissionais em um único <span className="text-emerald-500">local!</span>
            </h1>
            
            {/* Usando text-muted-foreground para seguir o tema */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-emerald-600/90 hover:bg-emerald-600 text-white px-8 font-semibold text-base transition-all"
              >
                Encontre uma clínica
              </Button>
            </div>
          </article>

          {/* Imagem */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-3xl opacity-30" />
              
              <Image
                src={doctorImg}
                alt="Foto ilustrativa de um profissional de saúde"
                width={450} 
                height={500}
                className="relative object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
          
        </main>
      </div>
    </section>
  );
}