import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { Clipboard } from 'lucide-react';
import ClipboardJS from 'clipboard';

export default function HomePage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    new ClipboardJS('.copy-btn');
  }, []);

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en'
      ? 'fr'
      : i18n.language === 'fr'
      ? 'es'
      : i18n.language === 'es'
      ? 'ar'
      : 'en';  // Default back to English if the current language is Arabic
    i18n.changeLanguage(newLang);
    toast.success(`${t('Language changed to')} ${newLang.toUpperCase()}`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen font-sans dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md dark:bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            One UI - {t('Welcome to Our Platform')}
          </div>
          <div className="space-x-4">
            <button
              onClick={handleLanguageChange}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 dark:text-blue-400"
            >
              {t('Change Language')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            One UI - {t('Empowering Your Digital Experience')}
          </h1>
          <p className="text-lg mb-8">
            {t('Transform the way you interact with technology. Join us today to experience seamless integration, ease of use, and innovative features.')}
          </p>
          <motion.button 
            className="bg-indigo-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-indigo-600 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t('Get Started')}
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t('About One UI')}</h2>
          <p className="text-lg mb-8">
            {t('One UI is a modern, fully responsive UI framework designed for simplicity and efficiency. Whether you are a developer or designer, One UI provides you with all the tools you need to build beautiful and functional websites.')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t('Our Features')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-4">{t('Feature 1')}</h3>
              <p>{t('Innovative solutions that drive your success and make your work easier.')}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-4">{t('Feature 2')}</h3>
              <p>{t('Seamless integration with your current systems for an effortless experience.')}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-4">{t('Feature 3')}</h3>
              <p>{t('Scalable solutions to fit your growing business needs without limitations.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">{t('Installation')}</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            {t('To get started with One UI, simply clone the repository from GitHub and follow the setup instructions below.')}
          </p>
          <pre className="bg-gray-800 text-white p-6 rounded-lg font-mono overflow-x-auto">
            git clone https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate
          </pre>
          <button
            className="copy-btn text-green-600 hover:text-green-800 transition-colors duration-300 dark:text-green-400"
            data-clipboard-target="pre"
          >
            <Clipboard className="inline-block" /> {t('Copy Link')}
          </button>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
            {t('Once cloned, follow the instructions in the README file to get up and running.')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>{t('One UI - The Future of Web Development')}</p>
          <p>{t('© 2025 One UI. All Rights Reserved.')}</p>
        </div>
      </footer>
    </div>
  );
}
