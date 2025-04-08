'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {pathname === '/' && <Header />}
      {children}
    </body>
  );
}