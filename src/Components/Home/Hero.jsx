/* eslint-disable react/prop-types */

export default function Hero({
  t, fadeIn, Github, ChevronRight, motion
}) {
  return (
    <div>
      <section className="relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="py-20 md:py-28 lg:py-32 flex flex-col md:flex-row items-center">
            {/* Hero Content */}
            <motion.div
              className="md:w-1/2 text-center md:text-left text-white z-10 mb-12 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="inline-block px-3 py-1 mb-4 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                variants={fadeIn}
              >
                {t("Version 2.0 Now Available")}
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                variants={fadeIn}
              >
                {t("One UI - Empowering Your Digital Experience")}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto md:mx-0"
                variants={fadeIn}
              >
                {t(
                  "Transform the way you interact with technology. Join us today to experience seamless integration, ease of use, and innovative features."
                )}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                variants={fadeIn}
              >
                <a
                  href="#features"
                  className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {t("Get Started")}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>

                <a
                  href="https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate"
                  className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 w-5 h-5" />
                  {t("View on GitHub")}
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image/Illustration */}
            <motion.div
              className="md:w-1/2 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative mx-auto w-full max-w-md">
                <div className="aspect-w-5 aspect-h-3">
                  <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 h-4 w-24 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded-full w-full"></div>
                      <div className="h-4 bg-white/20 rounded-full w-5/6"></div>
                      <div className="h-4 bg-white/20 rounded-full w-4/6"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-lg shadow-lg transform rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-indigo-300 rounded-full shadow-lg"></div>
              </div>
            </motion.div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-auto"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                className="dark:fill-gray-900"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
