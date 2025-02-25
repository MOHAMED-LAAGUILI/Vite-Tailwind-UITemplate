import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlassLogin() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Floating Geometric Shapes */}
            <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
            <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

            {/* Glassmorphic Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md p-8 rounded-2xl border border-white/[0.1] backdrop-blur-0 bg-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
            >
                <h2 className="text-center text-2xl font-semibold text-white mb-6">Welcome Back</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-white/70 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/[0.15] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white/70 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/[0.15] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:opacity-90 transition-all">
                        Login
                    </button>
                </form>
                <p className="text-center text-white/50 mt-4">
                    Don't have an account? <a href="#" className="text-indigo-400 hover:underline">Sign up</a>
                </p>
            </motion.div>
        </div>
    );
}

// Floating Geometric Shapes Component
function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={`absolute ${className}`}
        >
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ width, height }} className="relative">
                <div className={clsx("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]")} />
            </motion.div>
        </motion.div>
    );
}
