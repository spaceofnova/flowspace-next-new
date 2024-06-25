import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <HeroHighlight containerClassName="mb-12 lg:mb-16">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Created by a student, built for students: Tools to maximize your breaks
        and <Highlight>minimize stress.</Highlight>
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex flex-col w-fit m-auto mt-24"
      >
        <Link
          to="/auth/signup"
          className="p-2 border bg-background/80 border-white/25 rounded-lg hover:-translate-y-1 hover:scale-105 hover:shadow-[0px_19px_72px_0px_#c98f8e] transition-all duration-300"
        >
          Get Started!
        </Link>
        <small>Not convinced yet? Scroll down!</small>
      </motion.div>
    </HeroHighlight>
  );
}
