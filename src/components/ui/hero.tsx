import { motion } from "framer-motion";
import { buttonVariants } from "./button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center p-12">
      <div className="flex flex-col gap-16">
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
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug mx-auto text-center"
        >
          Made by a student, built for students: Tools to maximize your breaks
          and lower stress.
        </motion.h1>
        <Link
          to="/auth/signup"
          className={buttonVariants({ variant: "default" }) + " w-fit mx-auto"}
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
}
