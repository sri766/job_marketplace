import type { Metadata } from "next";
import { Lexend, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });
const lex = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobNest",
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
      <body className={cn(`tracking-tighter`,lex.className)}>
        {children}
      </body>
    </html>
  );
}
