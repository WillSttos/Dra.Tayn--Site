
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Facebook, Star, Clock, MapPin, Phone, Stethoscope, Scissors } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ImageCompareSlider } from '@/components/ui/image-compare-slider';

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.953 3.141a2.23 2.23 0 0 1 4.094 0l.138.414a1.5 1.5 0 0 0 1.415 1.166h.455a2.5 2.5 0 0 1 2.5 2.5v.455a1.5 1.5 0 0 0 1.166 1.415l.414.138a2.23 2.23 0 0 1 0 4.094l-.414.138a1.5 1.5 0 0 0-1.166 1.415v.455a2.5 2.5 0 0 1-2.5 2.5h-.455a1.5 1.5 0 0 0-1.415 1.166l-.138.414a2.23 2.23 0 0 1-4.094 0l-.138-.414a1.5 1.5 0 0 0-1.415-1.166H7a2.5 2.5 0 0 1-2.5-2.5v-.455a1.5 1.5 0 0 0-1.166-1.415l-.414-.138a2.23 2.23 0 0 1 0-4.094l.414-.138a1.5 1.5 0 0 0 1.166-1.415V7.5a2.5 2.5 0 0 1 2.5-2.5h.455a1.5 1.5 0 0 0 1.415-1.166z" />
      <path d="M14.5 13.5h-5" />
      <path d="M12 11v5" />
    </svg>
);


const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o.';

const specialties = [
  {
    title: 'Periodontia',
    description:
      'Cuidamos da saúde das suas gengivas e das estruturas que sustentam seus dentes, prevenindo e tratando doenças como gengivite e periodontite.',
    icon: Stethoscope,
  },
  {
    title: 'Cirurgia Oral e Periodontal',
    description:
      'Procedimentos cirúrgicos com precisão e segurança, incluindo enxertos, cirurgias gengivais estéticas e extrações complexas.',
    icon: Scissors,
  },
  {
    title: 'Implantes',
    description:
      'A solução definitiva para a perda de dentes. Devolvemos a função e a estética do seu sorriso com implantes dentários de titânio.',
    icon: ToothIcon,
  },
];

const testimonials = [
  {
    quote:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fui muito bem atendida, e o resultado foi além das minhas expectativas. Recomendo!"',
    author: 'Paciente Satisfeita',
  },
  {
    quote:
      '"A Dra. Tayná é uma profissional incrível. Tinha muito medo de dentista, mas ela e sua equipe me passaram total segurança. Obrigado!"',
    author: 'Paciente Satisfeito',
  },
  {
    quote:
      '"Desde a recepção até o tratamento, tudo perfeito. Clínica moderna e atendimento humanizado. Consegui meu implante sem dor."',
    author: 'Paciente Satisfeita',
  },
];

const navLinks = [
    { href: "#especialidades", label: "Especialidades" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#localizacao", label: "Localização" },
]

const beforeAfterCases = [
    { id: 'case-1', before: PlaceHolderImages.find(img => img.id === 'antes-1'), after: PlaceHolderImages.find(img => img.id === 'depois-1') },
    { id: 'case-2', before: PlaceHolderImages.find(img => img.id === 'antes-2'), after: PlaceHolderImages.find(img => img.id === 'depois-2') },
    { id: 'case-3', before: PlaceHolderImages.find(img => img.id === 'antes-3'), after: PlaceHolderImages.find(img => img.id === 'depois-3') },
    { id: 'case-4', before: PlaceHolderImages.find(img => img.id === 'antes-4'), after: PlaceHolderImages.find(img => img.id === 'depois-4') },
]

export default function Home() {
  const openWhatsapp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const heroBanner = PlaceHolderImages.find(p => p.id === 'hero-banner-desktop');

  return (
    <div className="bg-background font-sans text-foreground antialiased overflow-x-hidden">
      <header className="bg-background/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-secondary font-serif">
            Dra. Tayná Magalhães
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                 </Link>
            ))}
          </div>
          <Button
            onClick={openWhatsapp}
            className="text-white px-6 py-2 rounded-full font-semibold transition duration-300 text-sm shadow-lg pulse-button bg-primary hover:bg-secondary"
          >
            Agende sua Avaliação
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center">
          {heroBanner && (
            <Image
              src={heroBanner.imageUrl}
              alt={heroBanner.description}
              fill
              className="object-cover object-center"
              data-ai-hint={heroBanner.imageHint}
              priority
            />
          )}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-xl text-white">
              <h1
                className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6 text-gradient"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
              >
                Recupere sua <em className="not-italic">autoestima</em> com o Sorriso dos Sonhos!
              </h1>
              <p
                className="text-lg mb-8"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
              >
                Oferecemos tratamentos periodontais e de implantes com a mais alta tecnologia, focados na sua saúde e bem-estar.
              </p>
              <Button
                onClick={openWhatsapp}
                className="text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-xl pulse-button bg-primary hover:bg-secondary"
              >
                Agendar autoavaliação
              </Button>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Estética Odontológica Personalizada
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
             Nossas especialidades são focadas em devolver a função e a estética do seu sorriso.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((spec, index) => (
                <Card
                  key={spec.title}
                  className="bg-card rounded-2xl shadow-lg text-center border-t-4 border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 fade-in-up"
                   style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className="p-8 flex flex-col items-center">
                      <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <spec.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-secondary mb-3">
                          {spec.title}
                      </h3>
                      <p className="text-muted-foreground">{spec.description}</p>
                    </div>
                </Card>
              ))}
            </div>
            <Button
              onClick={openWhatsapp}
              className="mt-16 inline-block text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
            >
              Quero agendar minha avaliação
            </Button>
          </div>
        </section>
        
        {/* Antes e Depois */}
        <section className="bg-card py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col items-center gap-12">
                <div className="w-full text-center">
                    <p className="font-serif text-primary text-lg">Resultados Reais</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8">
                        Resultados que transformam sorrisos
                    </h2>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {beforeAfterCases.map((caseItem) => (
                        caseItem.before && caseItem.after && (
                            <ImageCompareSlider
                                key={caseItem.id}
                                before={caseItem.before.imageUrl}
                                after={caseItem.after.imageUrl}
                                alt={`Comparativo do ${caseItem.id}`}
                                beforeHint={caseItem.before.imageHint}
                                afterHint={caseItem.after.imageHint}
                            />
                        )
                    ))}
                </div>
                <div className="w-full text-center">
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Veja um exemplo do nosso trabalho dedicado. Cada paciente recebe
                    um plano de tratamento personalizado para alcançar o melhor
                    resultado possível, unindo saúde e estética.
                    </p>
                    <Button
                        onClick={openWhatsapp}
                        className="text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
                    >
                        Eu também quero transformar meu sorriso
                    </Button>
                </div>
            </div>
        </section>


        {/* Sobre a Doutora */}
        <section id="sobre" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 relative">
                 <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-2xl transform -rotate-3"></div>
                <Image
                    src={PlaceHolderImages[9].imageUrl}
                    alt="Retrato da Dra. Tayná Magalhães"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10"
                    data-ai-hint={PlaceHolderImages[9].imageHint}
                />
            </div>
            <div className="md:w-2/3">
              <p className="font-serif text-primary text-lg">Conheça a especialista</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Dra. Tayná Magalhães
              </h2>
              <p className="text-lg font-semibold text-secondary mb-2">
                Esp. em Periodontia | Cirurgia Oral e Periodontal | Implantes
              </p>
              <p className="text-md font-semibold text-gray-700 mb-6">
                CRO-BA 25109
              </p>
              <p className="text-muted-foreground mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <p className="font-serif text-4xl text-primary/70 mt-6">
                Tayná Magalhães
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <p className="font-serif text-primary text-lg">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-16">
              O que nossos pacientes dizem!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-background p-8 rounded-2xl shadow-lg text-left"
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20}/>)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 italic">{testimonial.quote}</p>
                    <p className="font-bold text-secondary">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Localização */}
        <section id="localizacao" className="py-20 md:py-28 text-center bg-background">
            <div className="container mx-auto px-6">
                <p className="font-serif text-primary text-lg">Onde estamos</p>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12">
                    Venha Conhecer Nossa Clínica!
                </h2>
                <div className="w-full h-96 rounded-2xl shadow-xl overflow-hidden mb-8">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.971339180709!2d-38.4593430851779!3d-12.97371199085449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b204e8b0001%3A0x8f2d5c3695d52044!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1678888888888!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                        <MapPin className="text-primary mt-1" size={24}/>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Endereço</h3>
                            <p className="text-muted-foreground">
                                Av. Tancredo Neves, 2539 - Caminho das Árvores, Salvador - BA,
                                41820-021
                            </p>
                             <a
                                href="https://maps.app.goo.gl/u5X1eZ9Y8wZ6aXbX7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-primary font-semibold mt-2 hover:underline"
                            >
                                Ver no Google Maps
                            </a>
                        </div>
                    </div>
                     <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                        <Clock className="text-primary mt-1" size={24}/>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Horário de Funcionamento</h3>
                            <p className="text-muted-foreground">
                                Segunda a Sexta: 08:00 - 18:00<br/>
                                Sábado: 08:00 - 12:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-gradient-to-r from-[#E0A45E] to-[#AE5E55] text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
            <div>
                 <Link href="/" className="text-3xl font-bold text-white font-serif mb-4 inline-block">
                    Dra. Tayná Magalhães
                </Link>
                <p className="text-gray-200">
                    Recupere sua autoestima com o sorriso dos seus sonhos.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Navegação</h4>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-gray-200 hover:text-white transition-colors">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Redes Sociais</h4>
                 <div className="flex justify-center md:justify-start gap-6 mb-6">
                    <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                    aria-label="Instagram"
                    >
                    <Instagram />
                    </a>
                    <a
                    href="#"
                    className="text-gray-200 hover:text-white transition duration-300"
                    aria-label="Facebook"
                    >
                    <Facebook />
                    </a>
                </div>
                <p className="text-gray-200 text-sm">CRO-BA 25109</p>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-10 border-t border-gray-400 pt-8 text-center text-gray-200 text-sm">
             <p>
                &copy; {new Date().getFullYear()} Dra. Tayná Magalhães. Todos os
                direitos reservados.
            </p>
        </div>
      </footer>
    </div>
  );
}
