import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { SessionProvider } from "next-auth/react"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobHunt",
  description: "Job marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionProvider session={session}>  
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
      </body>
    </html>
    // </SessionProvider>
  );
}
