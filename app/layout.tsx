import type { Metadata } from "next";
import { inter } from "@/styles/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalez Matias Portfolio",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
