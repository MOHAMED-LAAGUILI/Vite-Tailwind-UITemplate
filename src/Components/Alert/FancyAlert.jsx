import clsx from "clsx";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

export default function Alert04() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto"
        >
            <div
                className={clsx(
                    "relative overflow-hidden rounded-xl p-4",
                    "bg-gradient-to-b from-violet-50 to-white dark:from-violet-950/20 dark:to-zinc-950",
                    "border border-violet-200 dark:border-violet-900/50",
                    "shadow-lg dark:shadow-none"
                )}
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ rotate: -10, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                        }}
                    >
                        <div
                            className={clsx(
                                "p-3 rounded-xl shadow-md",
                                "bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500",
                                "dark:from-fuchsia-600 dark:via-violet-600 dark:to-indigo-600"
                            )}
                        >
                            <PartyPopper className="h-6 w-6 text-white" />
                        </div>
                    </motion.div>

                    <div className="space-y-1">
                        <motion.h3
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg font-semibold text-violet-900 dark:text-violet-100"
                        >
                            Amazing milestone! 🎉
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-sm text-violet-600 dark:text-violet-300"
                        >
                            {"You've "}just hit <span className="font-medium">1,000 followers</span> on your journey!
                        </motion.p>
                    </div>
                </div>

                <div className="hidden sm:block absolute top-4 right-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                            delay: 0.2,
                        }}
                        className={clsx(
                            "px-3 py-1 text-xs font-medium rounded-full",
                            "bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10",
                            "dark:from-fuchsia-500/20 dark:via-violet-500/20 dark:to-indigo-500/20",
                            "text-violet-700 dark:text-violet-200",
                            "ring-1 ring-violet-500/20 dark:ring-violet-400/20"
                        )}
                    >
                        Milestone
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
