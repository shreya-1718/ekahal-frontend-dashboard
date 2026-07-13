import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { FavoriteProvider } from "@/context/FavoriteContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Product Dashboard",
  description: "Frontend Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}