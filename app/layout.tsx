import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobHunt",
  description: "Job marketplace",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={outfit.className}>
    <SessionProvider session={session}>  
        <Navbar/>
        {children}
    </SessionProvider>
      </body>
    </html>
  );
}
