
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
import AnimateOnScroll from '@/components/AnimateOnScroll';

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400.141 400.141"
        fill="currentColor"
    >
        <g>
            <path d="M344.879,30.971C327.039,11,302.484,0,275.737,0c-20.946,0-43.379,12.377-59.76,21.414 c-5.425,2.992-13.523,7.894-15.911,7.895c-2.377,0.001-10.438-4.889-15.84-7.879C167.88,12.387,145.494,0,124.401,0 C97.654,0,73.099,11,55.26,30.971C38.308,49.951,28.972,74.93,28.972,101.303c0,16.988,3.122,36.946,8.017,59.606 c4.605,21.32,19.205,39.269,50.061,52.85c9.321,4.104,26.044,7.305,29.044,10.305c3.605,3.605,7.458,16.625,7.458,16.625 s0.875,3.068-0.412,3.068c-7.122,0-12.916,5.795-12.916,12.916s5.794,12.916,12.916,12.916c0,0,6.215,0,8.287,0 c1.625,0,2.154,1.67,2.154,1.67l4.472,13.805c0,0,0.375,2.533-2.6,2.533c-7.121,0-12.914,5.793-12.914,12.914 s5.793,12.916,12.914,12.916c0,0,7.669,0,10.225,0c1.875,0,2.501,1.512,2.501,1.512l5.201,15.561c0,0,0.298,0.936-0.827,0.936 c-1.17,0-4.682,0-4.682,0c-7.123,0-12.916,5.795-12.916,12.916c0,7.123,5.793,12.916,12.916,12.916c0,0,9.668,0,12.891,0 c1.75,0,2.022,1.373,2.022,1.373l7.974,23.855l0.047,0.125c4.757,11.623,14.385,17.52,28.617,17.52h0.791 c14.231,0,23.858-5.896,28.649-17.605c0,0,5.98-18.223,8.19-24.219c0.438-1.189,1.25-1.049,1.25-1.049h13.966 c7.121,0,12.915-5.793,12.915-12.916c0-7.121-3.506-12.916-12.915-12.916c-1.981,0-3.93,0.006-4.778,0.006 c-1.313,0-0.5-2.25-0.5-2.25l4.75-14.313c0,0,0.25-1.449,1.626-1.449c2.829,0,11.318,0,11.318,0 c7.121,0,12.915-5.795,12.915-12.916c0-7.12-5.176-12.913-12.297-12.913c-1.515,0-2.042,0.049-2.625,0.049 c-1.562,0-0.688-1.771-0.688-1.771s3.381-11.144,4.812-15.438c0.313-0.938,1.313-0.85,1.313-0.85h8.882 c7.121,0,12.914-5.795,12.914-12.916s-5.793-12.916-12.914-12.916c-1.132,0-0.92-1.494-0.736-2.234 c1.167-4.709,3.348-14.395,7.5-17.459c3.922-2.895,19.721-6.291,28.842-10.305c30.191-13.291,45.991-33.361,49.961-51.629 c5.019-23.091,8.604-43.98,8.604-60.828C371.168,74.93,361.832,49.954,344.879,30.971z M213.749,376.484 c-2.825,6.844-11.379,7.375-13.932,7.375c-2.548,0-11.065-0.529-13.913-7.324l-6.142-18.416c0,0-0.147-0.854,1.041-0.854 c9.864,0,29.086,0,38.78,0c0.688,0,0.541,0.396,0.541,0.396L213.749,376.484z M228.573,331.434c-14.224,0-42.562,0-56.896,0 c-0.875,0-1.063-0.869-1.063-0.869l-5.535-16.475c0,0-0.09-0.662,1.035-0.662c17.249,0,51.266,0,68.354,0 c0.646,0,0.48,0.477,0.48,0.477l-5.839,17.229C229.112,331.133,228.948,331.434,228.573,331.434z M244.136,286.982 c0,0-0.146,0.615-0.792,0.615c-6.161,0-65.66,0-86.208,0c-0.917,0-1.125-0.574-1.125-0.574l-5.42-16.388 c0,0-0.351-1.071,1.024-1.071c26.875,0,73.109,0.025,97.479,0.025c0.875,0,0.64,0.676,0.64,0.676L244.136,286.982z M256.928,243.753c-28.567,0-113.958-0.063-113.958-0.063s-0.875,0-1.292-0.875c-1.202-2.522-3.542-8.791-4.489-12.369 c-0.525-1.983,1.364-1.381,1.364-1.381c19.971,3.822,39.268,5.351,61.273,5.351c22.32,0,42.439-1.672,62.644-5.601 c0,0,1.417-0.25,1.087,0.653c-1.098,3.009-3.308,9.647-4.316,12.7C258.915,243.148,257.928,243.753,256.928,243.753z M348.261,157.066c-0.691,3.012-2.895,8.507-4.036,11.595c-4.261,11.532-18.773,21.91-38.087,30.414 c-9.916,4.365-21.131,8.088-33.332,11.064l-2.128,0.514c-21.528,5.049-46.028,7.717-70.853,7.717 c-24.134,0-48.009-2.529-69.107-7.318l-2.075-0.477c-12.884-3.041-24.7-6.908-35.129-11.498 c-18.93-8.334-34.325-19.907-38.899-31.041c-1.469-3.577-3.938-12.219-3.938-12.219c-4.931-21.021-5.661-39.273-5.661-54.512 c0-41.91,29.694-85.258,79.384-85.258c12.896,0,29.882,5.902,45.442,15.789c2.272,1.445,5.513,3.936,8.646,6.346 c1.245,0.957,2.473,1.9,3.618,2.764c3.715,2.779,8.735,6.418,14.615,9.879c3.093,1.826,5.907,3.445,9.021,4.768 c12.738,5.406,26.244,8.148,40.142,8.148c14.181,0,31.599-3.445,31.359-5.414c-0.24-1.969-29.273-1.969-48.604-7.09 c-7.717-2.043-16.462-5.355-16.462-7.17c0-1.935,2.729-3.453,4.871-4.732c1.868-1.117,3.987-2.383,6.688-3.873 c14.851-8.193,35.188-19.414,52-19.414c49.69,0,79.384,43.348,79.384,85.258C355.121,116.336,353.147,135.788,348.261,157.066z"></path>
        </g>
    </svg>
);

const PeriodontiaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xmlSpace="preserve">
        <path style={{fill: 'hsl(var(--secondary))'}} d="M256.01,437.556L256.01,437.556h-0.016c-118.606,0-72.186-103.997-255.979-95.997L0,511.992h511.996V341.559C328.187,333.559,374.623,437.556,256.01,437.556z"></path>
        <path style={{fill: 'hsl(var(--primary))'}} d="M469.902,180.875c22-53.171-3.25-114.123-56.436-136.138c-16.031-6.625-32.75-8.968-48.938-7.531 c-10.404-12.438-23.904-22.609-39.936-29.25c-53.178-22.015-114.13,3.25-136.145,56.436c-6.031,14.609-8.516,29.796-7.828,44.609 l3,74.842c-16.14,19.343-59.999,157.339-13.578,176.557c14.609,6.047,88.826-108.403,103.178-102.575 c14.342,5.828-14.102,139.449,0.5,145.48c46.436,19.219,112.902-109.419,115.152-134.512l55.061-50.828 C454.871,207.984,463.871,195.485,469.902,180.875z"></path>
    </svg>
);

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o.';

const specialties = [
  {
    title: 'Periodontia',
    description:
      'Cuidamos da saúde das suas gengivas e das estruturas que sustentam seus dentes, prevenindo e tratando doenças como gengivite e periodontite.',
    icon: PeriodontiaIcon,
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
      <header className="bg-white/10 backdrop-blur-lg shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-secondary font-serif">
            Dra. Tayná Magalhães
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
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
        <section className="relative w-full flex items-center">
            {heroBanner && (
              <div className="relative w-full h-auto">
                <Image
                  src={heroBanner.imageUrl}
                  alt={heroBanner.description}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-auto"
                  data-ai-hint={heroBanner.imageHint}
                  priority
                />
              </div>
            )}
            <div className="container mx-auto px-6 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="max-w-xl">
                <AnimateOnScroll>
                    <h1 className="text-gradient text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
                      Recupere sua <em>autoestima</em> com o Sorriso dos Sonhos!
                    </h1>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                    <p
                      className="text-lg mb-8"
                      style={{ color: '#553d30' }}
                    >
                      Oferecemos <strong>tratamentos periodontais</strong> e de <strong>implantes</strong> com a mais <strong>alta tecnologia</strong>, focados na sua <strong>saúde e bem-estar</strong>.
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.4}>
                  <Button
                    onClick={openWhatsapp}
                    className="text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-xl pulse-button bg-primary hover:bg-secondary"
                  >
                    Agendar autoavaliação
                  </Button>
                </AnimateOnScroll>
              </div>
            </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                Estética Odontológica Personalizada
                </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
                Nossas especialidades são focadas em devolver a função e a estética do seu sorriso.
                </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((spec, index) => (
                <AnimateOnScroll key={spec.title} delay={index * 0.2}>
                    <Card
                    className="bg-card rounded-2xl shadow-lg text-center border-t-4 border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
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
                </AnimateOnScroll>
              ))}
            </div>
             <AnimateOnScroll delay={0.3}>
              <Button
                onClick={openWhatsapp}
                className="mt-16 inline-block text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
              >
                Quero agendar minha avaliação
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
        
        {/* Antes e Depois */}
        <section className="bg-card py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col items-center gap-12">
                <div className="w-full text-center">
                    <AnimateOnScroll>
                        <p className="font-serif text-primary text-lg">Resultados Reais</p>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8">
                            Resultados que transformam sorrisos
                        </h2>
                    </AnimateOnScroll>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {beforeAfterCases.map((caseItem, index) => (
                        caseItem.before && caseItem.after && (
                          <AnimateOnScroll key={caseItem.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                            <ImageCompareSlider
                                before={caseItem.before.imageUrl}
                                after={caseItem.after.imageUrl}
                                alt={`Comparativo do ${caseItem.id}`}
                                beforeHint={caseItem.before.imageHint}
                                afterHint={caseItem.after.imageHint}
                            />
                          </AnimateOnScroll>
                        )
                    ))}
                </div>
                <div className="w-full text-center">
                     <AnimateOnScroll>
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
                    </AnimateOnScroll>
                </div>
            </div>
        </section>


        {/* Sobre a Doutora */}
        <section id="sobre" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <AnimateOnScroll className="md:w-1/3 relative" direction="left">
                 <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary rounded-2xl transform -rotate-3"></div>
                <Image
                    src={PlaceHolderImages[9].imageUrl}
                    alt="Retrato da Dra. Tayná Magalhães"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10"
                    data-ai-hint={PlaceHolderImages[9].imageHint}
                />
            </AnimateOnScroll>
            <div className="md:w-2/3">
              <AnimateOnScroll direction="right">
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
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2} direction="right">
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
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-card py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <AnimateOnScroll>
                <p className="font-serif text-primary text-lg">Depoimentos</p>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-16">
                O que nossos pacientes dizem!
                </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index} delay={index * 0.2}>
                    <Card
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
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        
        {/* Localização */}
        <section id="localizacao" className="py-20 md:py-28 text-center bg-background">
            <div className="container mx-auto px-6">
                <AnimateOnScroll>
                    <p className="font-serif text-primary text-lg">Onde estamos</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-12">
                        Venha Conhecer Nossa Clínica!
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll>
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
                </AnimateOnScroll>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                    <AnimateOnScroll direction="left">
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
                    </AnimateOnScroll>
                     <AnimateOnScroll delay={0.2} direction="right">
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
                    </AnimateOnScroll>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-gradient-to-r from-[#E0A45E] to-[#AE5E55] text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
            <AnimateOnScroll>
                 <Link href="/" className="text-3xl font-bold text-white font-serif mb-4 inline-block">
                    Dra. Tayná Magalhães
                </Link>
                <p className="text-gray-200">
                    Recupere sua autoestima com o sorriso dos seus sonhos.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
                <h4 className="font-bold text-lg mb-4 text-white">Navegação</h4>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-gray-200 hover:text-white transition-colors">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
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
            </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
            <div className="container mx-auto px-6 mt-10 border-t border-gray-400 pt-8 text-center text-gray-200 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Dra. Tayná Magalhães. Todos os
                    direitos reservados.
                </p>
            </div>
        </AnimateOnScroll>
      </footer>
    </div>
  );
}

    