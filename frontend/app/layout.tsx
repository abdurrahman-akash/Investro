import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { calsans } from "@/fonts/calsans";
import { AuthProvider } from '@/lib/auth-context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investora - E-commerce Visibility Solutions",
  description: "Helping Temu and Amazon merchants increase their product visibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calsans.variable} antialiased bg-zinc-50 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen`}
      >
      <main>
        <AuthProvider>
          {children}
        </AuthProvider>
      </main>
      </body>
    </html>
  );
}
