import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://xeidan.com'),
  title: { default: 'Daniel Keme — Full-stack Software Engineer', template: '%s — Daniel Keme' },
  description: 'Full-stack software engineer building useful digital products, web applications, and backend systems.',
  openGraph: { title: 'Daniel Keme — Full-stack Software Engineer', description: 'I build useful software, from thoughtful interfaces to the systems behind them.', url: 'https://xeidan.com', siteName: 'Daniel Keme', type: 'website' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/mark.png' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
