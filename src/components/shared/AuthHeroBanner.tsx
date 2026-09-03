"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";

type TProps = {
  data?: {
    className?: string;
    children?: React.ReactNode;
  };
};

export default function AuthHeroBanner({ data }: TProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex flex-col justify-end pb-11 overflow-hidden",
        data?.className,
      )}
    >
      {/* Background image */}
      <div
        style={{ backgroundImage: `url('/banner_image.png')` }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Base darkening gradient */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-59.22%,rgba(0,0,0,0.7)_69.98%)]" />

      <div className="relative z-30">
        <Container className="mb-5 w-full">{data?.children}</Container>
      </div>
    </div>
  );
}