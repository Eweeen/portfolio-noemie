"use client";

import { LottieProps } from "@/types/lottie";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const LottieWrapper: ComponentType<LottieProps> = dynamic(
  () => import("@/components/animations/lottie-client"),
  { ssr: false },
);

const LottieAnimation = (props: LottieProps) => {
  return <LottieWrapper {...props} />;
};

export default LottieAnimation;
