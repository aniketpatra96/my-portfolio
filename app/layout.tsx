import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import TransitionProvider from "@/components/transitionProvider";
import job from "@/cron";

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
  children: ReactNode;
}>) {
  job.start();
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
