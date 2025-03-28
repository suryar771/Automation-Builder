import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'; // Add React import
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from "@/components/ui/sonner";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            {children}
            <Toaster/>

              </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}