import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Instagram, Facebook, Phone } from 'lucide-react';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Dra. Tayná Magalhães - Periodontia e Implantes',
  description: 'Recupere sua autoestima com o Sorriso dos Sonhos!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning={true}
    >
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
        <Link href="https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o." target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg pulse-button">
          <Phone size={24} />
        </Link>
      </body>
    </html>
  );
}
