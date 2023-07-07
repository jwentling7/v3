import "@/styles/globals.css";

import Header from "@/components/Header/Header";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Wentling",
  description: "Jessica Wentling's personal website.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex flex-col h-screen`}>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
