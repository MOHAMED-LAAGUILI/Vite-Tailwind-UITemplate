/* eslint-disable react/prop-types */
import { useForm, ValidationError } from "@formspree/react";

export default function Contact({
  t, motion, toast, Mail, MapPin, Phone, Github,
  Linkedin, Address, phoneNumber, githubLink,
  LinkedinLink, email, DiscordLink, FacebookLink, Facebook,
   MessageCircle, Spinner4, useState, useEffect
}) {
  const [state, handleSubmit] = useForm("xaneoarl");
  const [toastShown, setToastShown] = useState(false);

  // Avoid showing toast before submission is complete
  useEffect(() => {
    if (state.succeeded && !toastShown) {
      toast.success(t(`Your message has been sent successfully!`));
      setToastShown(true);
    } else if (state.errors && !toastShown) {
      toast.error(t("There was an error sending your message."));
      setToastShown(true);
    }
  }, [state.succeeded, state.errors, toast, t, toastShown]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setToastShown(false); // Reset toast state before new submission
    handleSubmit(event);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
            >
              {t("Contact Us")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {t("Get in Touch")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
            >
              {t(
                "Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
              )}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t("Contact Information")}</h3>
                    <p className="text-indigo-100 mb-8">
                      {t("Fill out the form and our team will get back to you within 24 hours.")}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="w-6 h-6 text-indigo-200 mt-1" />
                        <div className="ml-4">
                          <p className="text-indigo-100 font-medium">Email</p>
                          <p className="text-white">{email}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-indigo-200 mt-1" />
                        <div className="ml-4">
                          <p className="text-indigo-100 font-medium">{t("Location")}</p>
                          <p className="text-white">{Address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-indigo-200 mt-1" />
                        <div className="ml-4">
                          <p className="text-indigo-100 font-medium">{t("Phone")}</p>
                          <p className="text-white">{phoneNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="text-indigo-100 font-medium mb-4">{t("Follow Us")}</p>
                    <div className="flex space-x-4">
                      <a
                        href={LinkedinLink}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>

                      <a
                        href={FacebookLink}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Facebook"
                        target="_blank"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>

                      <a
                        href={DiscordLink}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Discord"
                        target="_blank"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>

                      <a
                        href={githubLink}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-col">
                    {/* Full Name Field */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("Full Name")}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("Email Address")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("Phone Number")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("Message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />

                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className={`w-full px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${state.submitting ? "opacity-70 cursor-not-allowed" : ""}`}
                      >
                        {state.submitting ? (
                          <span className="flex items-center justify-center">
                            
                            <div className="">
                            <Spinner4 />
                            </div>
                            {t("Sending...")}
                          </span>
                        ) : (
                          t("Send Message")
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">{t("We look forward to hearing from you.")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
