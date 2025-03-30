import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <section id="tos" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
          >
            Terms of Service
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Terms & Conditions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Please read these terms carefully before using our services. By accessing our platform, you agree to these terms and conditions.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-600 dark:text-gray-400">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Acceptance of Terms</h3>
            <p>By accessing our website, you agree to comply with and be bound by these Terms of Service.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. User Responsibilities</h3>
            <p>You agree to use our platform responsibly and refrain from engaging in unlawful activities.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. Intellectual Property</h3>
            <p>All content on our platform, including text, graphics, and logos, is the property of our company and is protected by copyright laws.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">4. Limitation of Liability</h3>
            <p>We are not responsible for any damages or losses resulting from the use of our services.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5. Changes to Terms</h3>
            <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the revised terms.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
