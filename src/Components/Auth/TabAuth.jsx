/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tighter dark:text-white">
            Login
          </h1>

          <div
            className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 
                        border border-white/20 dark:bg-black/30 dark:border-black/20"
          >
            <form>
              <div className="mb-4">
                <label className="block text-left mb-2 text-lg text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-black 
                              text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-left mb-2 text-lg text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-black 
                              text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold 
                            hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
