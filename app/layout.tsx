import type { Metadata } from "next";
import "./globals.css";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "About ANIKET PATRA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
