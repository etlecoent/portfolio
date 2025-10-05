import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import theme from '@/theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Etlecoent',
  description: 'Etlecoent Website'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
