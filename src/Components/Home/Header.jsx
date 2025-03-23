/* eslint-disable react/prop-types */

export default function Header({
  motion,
  t,
  isMenuOpen,
  X,
  Menu,
  setIsMenuOpen,
}) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              One UI
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all"
            >
              {t("Features")}
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all"
            >
              {t("About")}
            </a>
            <a
              href="#installation"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all"
            >
              {t("Installation")}
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all"
            >
              {t("Testimonials")}
            </a>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 ease-in-out"
            >
              {t("Contact Us")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-3 space-y-2 sm:px-6">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Features")}
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("About")}
            </a>
            <a
              href="#installation"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
                {t("Installation")}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Testimonials")}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Contact Us")}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
