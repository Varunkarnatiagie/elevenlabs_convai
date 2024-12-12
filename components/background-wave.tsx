"use client";
import { motion } from "framer-motion";

export const BackgroundWave = () => {
  return (
    <motion.video
      src="/istockphoto-1796665109-640_adpp_is.mp4"
      autoPlay
      muted
      loop
      controls={false}
      className="fixed inset-0 w-full h-full object-cover z-[-1] pointer-events-none opacity-75"
    />
  );
};
