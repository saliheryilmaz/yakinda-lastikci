import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { TrackingScripts } from '@/components/tracking-scripts';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'En Yakın Mobil Lastikçi | Yakında Lastikçi',
    template: '%s | Yakında Lastikçi',
  },
  description: siteConfig.description,
  applicationName: siteConfig.displayName,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/images/yakindalogo.png',
    apple: '/images/yakindalogo.png',
  },
  openGraph: {
    images: [{ url: '/images/yakindalogo.png', width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
