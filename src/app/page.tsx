'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Facebook } from 'lucide-react';

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o.';

const specialties = [
  {
    title: 'Periodontia',
    description:
      'Cuidamos da saúde das suas gengivas e das estruturas que sustentam seus dentes, prevenindo e tratando doenças como gengivite e periodontite.',
    image: PlaceHolderImages[1],
  },
  {
    title: 'Cirurgia Oral e Periodontal',
    description:
      'Procedimentos cirúrgicos com precisão e segurança, incluindo enxertos, cirurgias gengivais estéticas e extrações complexas.',
    image: PlaceHolderImages[2],
  },
  {
    title: 'Implantes',
    description:
      'A solução definitiva para a perda de dentes. Devolvemos a função e a estética do seu sorriso com implantes dentários de titânio.',
    image: PlaceHolderImages[3],
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

export default function Home() {
  const openWhatsapp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-brand-50 font-sans text-gray-800 antialiased">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-secondary font-serif">
            Dra. Tayná Magalhães
          </a>
          <Button
            onClick={openWhatsapp}
            className="text-white px-6 py-2 rounded-full font-semibold transition duration-300 text-sm shadow-lg pulse-button bg-primary hover:bg-secondary"
          >
            Agende sua Autoavaliação
          </Button>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-serif leading-tight mb-4">
              Recupere sua <em className="italic">autoestima</em> com o Sorriso
              dos Sonhos!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Oferecemos tratamentos periodontais e de implantes com a mais alta
              tecnologia, focados na sua saúde e bem-estar.
            </p>
            <Button
              onClick={openWhatsapp}
              className="text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-xl pulse-button bg-primary hover:bg-secondary"
            >
              Agendar autoavaliação
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={PlaceHolderImages[0].imageUrl}
              alt="Dra. Tayná Magalhães"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              data-ai-hint={PlaceHolderImages[0].imageHint}
            />
          </div>
        </section>

        <section className="bg-card py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
              Nossas Especialidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((spec) => (
                <div
                  key={spec.title}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <Image
                    src={spec.image.imageUrl}
                    alt={spec.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full"
                    data-ai-hint={spec.image.imageHint}
                  />
                  <h3 className="text-xl font-bold font-serif text-secondary mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
            <Button
              onClick={openWhatsapp}
              className="mt-12 inline-block text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
            >
              Quero agendar minha avaliação
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Resultados que transformam sorrisos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
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
          <div className="md:w-1/2">
            <Image
              src={PlaceHolderImages[4].imageUrl}
              alt="Imagem de Antes e Depois de um tratamento"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              data-ai-hint={PlaceHolderImages[4].imageHint}
            />
          </div>
        </section>

        <section className="bg-card py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
              Confira mais procedimentos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PlaceHolderImages.slice(5, 9).map((image) => (
                <Image
                  key={image.id}
                  src={image.imageUrl}
                  alt={`Imagem de caso clínico ${image.id}`}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  data-ai-hint={image.imageHint}
                />
              ))}
            </div>
            <Button
              onClick={openWhatsapp}
              className="mt-12 inline-block text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
            >
              Agendar minha autoavaliação
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <Image
              src={PlaceHolderImages[9].imageUrl}
              alt="Retrato da Dra. Tayná Magalhães"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              data-ai-hint={PlaceHolderImages[9].imageHint}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Conheça a Dra. Tayná Magalhães
            </h2>
            <p className="text-lg font-semibold text-secondary mb-2">
              Esp. em Periodontia | Cirurgia Oral e Periodontal | Implantes
            </p>
            <p className="text-md font-semibold text-gray-700 mb-6">
              CRO-BA 25109
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="font-serif text-3xl text-primary mt-6">
              Tayná Magalhães
            </p>
          </div>
        </section>

        <section className="bg-card py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
              Veja o que nossos pacientes dizem!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-left"
                >
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <p className="font-bold text-secondary">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
            <Button
              onClick={openWhatsapp}
              className="mt-12 inline-block text-white px-8 py-3 h-auto rounded-full font-bold text-lg transition duration-300 shadow-lg bg-primary hover:bg-secondary"
            >
              Agende você também
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
            Venha Conhecer Nossa Clínica!
          </h2>
          <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden mb-8">
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
          <p className="text-lg text-gray-600 mb-8">
            Av. Tancredo Neves, 2539 - Caminho das Árvores, Salvador - BA,
            41820-021
          </p>
          <a
            href="https://maps.app.goo.gl/u5X1eZ9Y8wZ6aXbX7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-secondary transition duration-300 shadow-lg"
          >
            Ver no Google Maps
          </a>
        </section>
      </main>

      <footer className="bg-[#AE5E55] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <a href="#" className="text-3xl font-bold text-primary font-serif">
            Dra. Tayná Magalhães
          </a>
          <p className="text-gray-300 mt-2">
            Esp. em Periodontia | Cirurgia Oral e Periodontal | Implantes
          </p>
          <p className="text-gray-400 text-sm mt-1">CRO-BA 25109</p>
          <div className="flex justify-center gap-6 my-6">
            <a
              href="#"
              className="text-gray-300 hover:text-accent transition duration-300"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-accent transition duration-300"
            >
              <Facebook />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dra. Tayná Magalhães. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
