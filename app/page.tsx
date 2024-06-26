"use client";

import Image from "next/image";
import Header from "@/components/header";
import Timer from "@/components/timer";
import { useBackgroundContext } from "@/context/background-context";
import Quote from "@/components/quote";

export default function Home() {
  const { background } = useBackgroundContext();

  return (
    <div className="h-screen w-full relative -z-index-10">
      <Image
        alt="Background"
        src={background.src}
        quality={100}
        fill
        style={{ objectFit: "cover" }}
        placeholder="blur"
        blurDataURL={background.blurDataURL || undefined}
      />
      <div className="absolute left-0 top-0 h-screen w-screen flex flex-col justify-between">
        <Header />
        <Timer />
        <Quote />
      </div>
    </div>
  );
}
