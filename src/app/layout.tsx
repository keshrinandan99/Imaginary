import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex=IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight:["400","500","600","700"],
})
export const metadata:Metadata = {
  title: "Imaginary",
  description: "AI powered image generation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
