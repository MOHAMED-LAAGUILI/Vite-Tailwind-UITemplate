/* eslint-disable react/prop-types */

const TestimonialCard = ({ motion, Star,  name, role, initials, message, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{message}</p>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 fill-current ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Testimonials({ t, motion, Star }) {
  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Developer",
      initials: "JD",
      message: t(
        "One UI has completely transformed how I build interfaces. The components are well-designed, accessible, and incredibly easy to customize."
      ),
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      initials: "JS",
      message: t(
        "As a designer, I appreciate the attention to detail in One UI. The components are visually consistent and follow modern design principles."
      ),
      rating: 5,
    },
    {
      name: "Robert Johnson",
      role: "Frontend Lead",
      initials: "RJ",
      message: t(
        "The internationalization support in One UI is exceptional. It made localizing our application to multiple languages incredibly straightforward."
      ),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
          >
            {t("Testimonials")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {t("What Our Users Say")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            {t(
              "Discover why developers and designers around the world choose One UI for their projects."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial}
            
            motion={motion}
             Star={Star} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
