/* eslint-disable react/prop-types */

export default function Features({
  ArrowRight, Shield, Star, Zap, t, motion
}) {
  return (
    <>
            <section id="features" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {t("Powerful Features")}
                    </motion.div>
        
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                      {t("Everything You Need to Build Modern UIs")}
                    </motion.h2>
        
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
                    >
                      {t(
                        "One UI provides a comprehensive set of tools and components to help you build beautiful, responsive, and accessible user interfaces."
                      )}
                    </motion.p>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors duration-300">
                        <Zap className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t("Lightning Fast Performance")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(
                          "Optimized for speed and efficiency, One UI ensures your applications load quickly and run smoothly on all devices."
                        )}
                      </p>
                    </motion.div>
        
                    {/* Feature 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors duration-300">
                        <Shield className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t("Secure by Design")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(
                          "Built with security in mind, One UI helps you create applications that protect your users' data and privacy."
                        )}
                      </p>
                    </motion.div>
        
                    {/* Feature 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors duration-300">
                        <Star className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t("Premium Experience")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(
                          "Deliver exceptional user experiences with beautiful, accessible, and responsive components that work across all devices."
                        )}
                      </p>
                    </motion.div>
                  </div>
        
                  <div className="mt-16 text-center">
                    <a
                      href="#about"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      {t("Learn more about our features")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </section>
    </>
  )
}
