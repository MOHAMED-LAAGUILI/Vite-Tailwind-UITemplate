/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import clsx from "clsx";

function GlassShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={`absolute ${className}`}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={clsx(
                        "absolute inset-0 rounded-full backdrop-blur-lg",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10 blur-3xl" />
            <div className="absolute inset-0 overflow-hidden">
                <GlassShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/20" className="left-[-10%] top-[15%]" />
                <GlassShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/20" className="right-[-5%] top-[70%]" />
            </div>
            <div className="relative z-10 text-center backdrop-blur-xl bg-white/10 border border-white/10 px-12 py-16 rounded-2xl shadow-lg">
                <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Elevate Your
                </h1>
                <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-rose-400">
                    Digital Vision
                </h1>
                <p className="mt-4 text-lg text-white/60">
                    Crafting exceptional digital experiences with innovation and elegance.
                </p>
            </div>
        </div>
    );
}
