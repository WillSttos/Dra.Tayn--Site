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

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M16.75 13.96c.25.13.41.34.41.58v1.5c0 .32-.19.61-.48.74-.62.29-1.92.93-3.23.3-1.63-.78-2.92-2.1-3.69-3.72-.2-.42-.38-.93-.38-1.47v-1.5c0-.24.16-.45.41-.58.27-.13.58-.16.86-.08l1.39.4c.25.07.45.27.53.52.1.31.02.65-.2.87l-.49.49c-.27.27-.27.71 0 .98.78.78 1.83 1.25 2.92 1.25.26 0 .52-.05.77-.14l.5-.5c.22-.22.56-.29.87-.2.25.08.45.28.53.52l.4 1.39c.08.28.05.59-.08.86zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
);


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
        <Link href="https://api.whatsapp.com/send?phone=5571996485189&text=Ol%C3%A1%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20autoavalia%C3%A7%C3%A3o." target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-lg pulse-button transition-transform duration-300 hover:scale-110 active:scale-105">
          <WhatsAppIcon className="w-8 h-8" />
        </Link>
      </body>
    </html>
  );
}
