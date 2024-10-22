import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const Metadata = {
  title: 'For tests',
  description: 'Some information',
};

// const space = Space_Mono({ subsets: ['latin', ''], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-mono bg-neutral-950 flex flex-col min-h-dvh text-neutral-50`}>
        <Header />
        <main className="flex-1 flex flex-col pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
