/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AnimatePresence, motion } from "framer-motion";
import {
    Filter,
    Settings,
    Download,
    Share2,
    User,
    Bell,
    Sun,
    Edit2,
    Lock,
} from "lucide-react";
import { useRef, useState } from "react";

const buttonVariants = {
    animate: (isSelected) => ({
        gap: isSelected ? "0.5rem" : 0,
        paddingInline: isSelected ? "1rem" : "0.5rem",
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const notificationVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: -10 },
    exit: { opacity: 0, y: -20 },
};

const transition = { type: "spring", stiffness: 300, damping: 20 };

export function Toolbar({ className, activeColor = "text-primary" }) {
    const [selected, setSelected] = useState("filter");
    const [isToggled, setIsToggled] = useState(false);
    const [activeNotification, setActiveNotification] = useState(null);
    const outsideClickRef = useRef(null);

    const toolbarItems = [
        { id: "filter", title: "Filter", icon: Filter },
        { id: "settings", title: "Settings", icon: Settings },
        { id: "download", title: "Download", icon: Download },
        { id: "share", title: "Share", icon: Share2 },
        { id: "notifications", title: "Notifications", icon: Bell },
        { id: "profile", title: "Profile", icon: User },
        { id: "theme", title: "Theme", icon: Sun },
    ];

    const handleItemClick = (itemId) => {
        setSelected(selected === itemId ? null : itemId);
        setActiveNotification(itemId);
        setTimeout(() => setActiveNotification(null), 1500);
    };

    return (
        <div className="space-y-3 flex justify-center">
            <div
                ref={outsideClickRef}
                className={`flex items-center gap-3 p-3 relative bg-background border rounded-2xl shadow-md transition-all duration-300 ${className}`}
            >
                <AnimatePresence>
                    {activeNotification && (
                        <motion.div
                            variants={notificationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-50 bg-primary text-white px-3 py-1 rounded-lg text-xs shadow-lg"
                        >
                            {toolbarItems.find((item) => item.id === activeNotification)?.title} clicked!
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center gap-2">
                    {toolbarItems.map((item) => (
                        <motion.button
                            key={item.id}
                            variants={buttonVariants}
                            animate="animate"
                            custom={selected === item.id}
                            onClick={() => handleItemClick(item.id)}
                            transition={transition}
                            className={`relative flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                selected === item.id
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            <item.icon size={18} className={`${selected === item.id ? "text-white" : "text-gray-500"}`} />
                            <AnimatePresence initial={false}>
                                {selected === item.id && (
                                    <motion.span
                                        variants={spanVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={transition}
                                        className="overflow-hidden"
                                    >
                                        {item.title}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsToggled(!isToggled)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary dark:text-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        {isToggled ? <Edit2 size={18} /> : <Lock size={18} />}
                        <span className="text-sm font-medium">{isToggled ? "On" : "Off"}</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;
