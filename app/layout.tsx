import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Layout from '../components/Layout';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

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
    <html lang="en" className={poppins.variable}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
