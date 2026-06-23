"use client";

import { LottieProps } from "@/types/lottie";
import { useLottie } from "lottie-react";

const LottieClient = ({
  loop = true,
  jsonData,
  className = "w-full",
}: LottieProps) => {
  const defaultOptions = {
    animationData: jsonData,
    loop: loop,
  };

  const { View } = useLottie(defaultOptions);

  return <div className={className}>{View}</div>;
};

export default LottieClient;
