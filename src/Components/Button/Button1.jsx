/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import clsx from "clsx";

function SuccessParticles({ buttonRef }) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const distance = Math.random() * 50 + 30; // Spread particles

        return (
          <motion.div
            key={i}
            className="fixed w-1.5 h-1.5 bg-black dark:bg-white rounded-full shadow-lg"
            style={{ left: centerX, top: centerY }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              x: [0, Math.cos(angle) * distance],
              y: [0, Math.sin(angle) * distance],
              opacity: [1, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

export default function ParticleButton({
  children,
  variant = "primary", // Default variant
  successDuration = 1000,
  className,
  ...props
}) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = async () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), successDuration);
  };

  const buttonStyles = clsx(
    "relative flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-150 active:scale-95",
    showParticles && "scale-95",
    {
      primary:
        "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300",
      outline:
        "border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
      ghost:
        "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
    }[variant],
    className
  );

  return (
    <>
      {showParticles && <SuccessParticles buttonRef={buttonRef} />}
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={buttonStyles}
        aria-label="Button with particle effect"
        {...props}
      >
        {children}
        <MousePointerClick className="h-4 w-4" />
      </button>
    </>
  );
}
