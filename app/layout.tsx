import type { Metadata } from 'next';
import { Poppins, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Layout from '../components/Layout';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

import CustomCursor from '../components/CustomCursor';

export const metadata: Metadata = {
  title: 'Nduka Ugochukwu | Backend & DevOps Engineer',
  description: 'Portfolio of Nduka Ugochukwu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${sourceSerif.variable}`}>
      <body>
        <CustomCursor />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
