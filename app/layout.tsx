import type { Metadata } from "next";
import "./globals.css";

import { FavoriteProvider } from "@/context/FavoriteContext";

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
      <body>
        <FavoriteProvider>{children}</FavoriteProvider>
      </body>
    </html>
  );
}