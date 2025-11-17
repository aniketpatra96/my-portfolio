"use client";
import Image from "next/image";
import type { ReactElement } from "react";

export default function Brain(): ReactElement {
  return (
    <div className="relative h-full w-full">
      <Image src="/brain.png" alt="brain" fill className="object-contain" />
    </div>
  );
}
