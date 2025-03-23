/* eslint-disable react/prop-types */
import { useState } from "react"
import emailjs  from 'emailjs-com';

export default function Contact({
  t, motion, toast , Mail, MapPin, Phone,Github,
   Linkedin, Address, phoneNumber,
githubLink, LinkedinLink, email,DiscordLink, FacebookLink,Facebook, MessageCircle
   }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    // Call the EmailJS API to send the email
    emailjs
      .sendForm(
        "service_u5v084a", // Replace with your service ID
        "template_dgshtbj", // Replace with your template ID
        e.target, // Form element
        "pBMA78sj3B0-cWnBo", // Replace with your User ID from EmailJS
      )
      .then(
        () => {
          setIsSending(false)
          toast.success(t("Your message has been sent successfully!"))
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          setIsSending(false)
          console.error("Email error:", error)
          toast.error(t("There was an error sending your message."))
        },
      )
  }


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
                        aria-label="LinkedIn"
                        target="_blank"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={DiscordLink}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t("Full Name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        {t("Email Address")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t("Subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t("Message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      required
                    ></textarea>
                  </div>


                  <div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                        isSending ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSending ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t("Sending...")}
                        </span>
                      ) : (
                        t("Send Message")
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Map or additional contact info could go here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              {t("Need immediate assistance? Call our support team at")}{" "}
              <span className="font-medium text-gray-900 dark:text-white">+1 (555) 123-4567</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

