import type { Metadata } from "next";
import "./globals.css";
import type { ReactElement } from "react";
import TransitionProvider from "@/components/transitionProvider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "About ANIKET PATRA",
  icons: {
    icon: "/aniket.JPG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
