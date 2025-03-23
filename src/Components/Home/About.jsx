/* eslint-disable react/prop-types */

export default function About({
  ArrowRight, t, motion
}) {

  return (
    <>
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* About Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/30 rounded-lg transform -rotate-6"></div>
                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-lg transform rotate-6"></div>
                    <div className="relative bg-white dark:bg-gray-700 p-6 rounded-xl shadow-xl">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-600 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                                UI
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded-full w-3/4 mx-auto"></div>
                              <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded-full w-5/6 mx-auto"></div>
                              <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded-full w-4/6 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 space-y-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3 text-gray-700 dark:text-gray-300">
                            {t("Responsive Design")}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3 text-gray-700 dark:text-gray-300">
                            {t("Accessibility Built-in")}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3 text-gray-700 dark:text-gray-300">
                            {t("Dark Mode Support")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
    
                {/* About Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
                >
                  <div className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {t("About One UI")}
                  </div>
    
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t("Modern UI Framework for Modern Developers")}
                  </h2>
    
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {t(
                      "One UI is a modern, fully responsive UI framework designed for simplicity and efficiency. Whether you are a developer or designer, One UI provides you with all the tools you need to build beautiful and functional websites."
                    )}
                  </p>
    
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {t(
                      "Our framework is built with performance, accessibility, and developer experience in mind. We believe that creating beautiful user interfaces should be easy and enjoyable."
                    )}
                  </p>
    
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          {t("Lightweight & Fast")}
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          {t("Fully Customizable")}
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          {t("Responsive by Default")}
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          {t("Internationalization")}
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <a
                    href="#installation"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                  >
                    {t("Get Started with One UI")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
    </>
  )
}
