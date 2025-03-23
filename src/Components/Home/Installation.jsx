/* eslint-disable react/prop-types */

export default function Installation({ t, motion, Clipboard, toast }) {

  // Handle the copy action
  const handleCopy = () => {
    // Use the Clipboard API to copy the text
    const textToCopy = "git clone https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate";
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show a success toast when the text is successfully copied
      toast.success('Command copied to clipboard!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: true,
      });
    }).catch(() => {
      toast.error('Failed to copy the command. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: true,
      });
    });
  };

  return (
    <>
      <section id="installation" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
              >
                {t('Installation')}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                {t('Get Started in Minutes')}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
              >
                {t('To get started with One UI, simply clone the repository from GitHub and follow the setup instructions below.')}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-400">Terminal</div>
              </div>
              
              <div className="p-6 relative">
                <pre className="bg-gray-800 text-white p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>git clone https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate</code>
                </pre>
                
                <button
                  onClick={handleCopy} // Add the click handler for the copy action
                  className="copy-btn absolute top-8 right-8 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <Clipboard className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">{t('Next Steps')}</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                  <li>{t('Navigate to the project directory:')}<br />
                    <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">cd Vite-Tailwind-UITemplate</code>
                  </li>
                  <li>{t('Install dependencies:')}<br />
                    <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm install</code> {t('or')} <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">yarn</code>
                  </li>
                  <li>{t('Start the development server:')}<br />
                    <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm run dev</code> {t('or')} <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">yarn dev</code>
                  </li>
                </ol>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('Need help getting started? Check out our comprehensive documentation or join our community.')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate/blob/main/README.md" 
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('Read Documentation')}
                </a>
                
                <button
                  className="px-6 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              
                >
                  {t('Join Community')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
