
export default function BlankPage1() {
  return(
  <>


    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Header Section */}
      <header className="bg-primary text-white py-8">
        <h1 className="text-center text-4xl font-display animate-fade-in">Tailwind CSS with Custom Configuration</h1>
        <p className="text-center text-lg mt-4">A long page demonstrating various Tailwind features</p>
      </header>

      {/* Custom Colors Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-display">Custom Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
          <div className="w-full h-48 bg-primary rounded-xl"></div>
          <div className="w-full h-48 bg-secondary rounded-xl"></div>
          <div className="w-full h-48 bg-accent rounded-xl"></div>
          <div className="w-full h-48 bg-brand-blue rounded-xl"></div>
          <div className="w-full h-48 bg-brand-yellow rounded-xl"></div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-16 bg-gray-200 dark:bg-gray-700">
        <h2 className="text-3xl text-center font-display mb-6">Typography</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This is an example of text styled with the <code>body</code> font-family. The body text is set to Lora, a serif font.
          </p>
          <p className="text-2xl text-gray-700 dark:text-gray-300">
            Here is another example, with <code>font-display</code> for display text, which uses the Roboto font-family.
          </p>
          <blockquote className="border-l-4 pl-4 text-lg italic font-serif text-gray-600 dark:text-gray-400">
            Typography is a key to great design. Its about readability and style
          </blockquote>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16">
        <h2 className="text-3xl text-center font-display mb-6">Forms</h2>
        <div className="max-w-md mx-auto space-y-6">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" rows="4"></textarea>
            <button type="submit" className="w-full py-3 px-6 bg-primary text-white rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Aspect Ratio Section */}
      <section className="py-16 bg-gray-200 dark:bg-gray-700">
        <h2 className="text-3xl text-center font-display mb-6">Aspect Ratio</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-full bg-brand-blue rounded-xl overflow-hidden">
          <img src="https://via.placeholder.com/1920x1080" alt="Sample Image" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Line Clamp Section */}
      <section className="py-16">
        <h2 className="text-3xl text-center font-display mb-6">Line Clamp</h2>
        <div className="max-w-lg mx-auto">
          <p className="line-clamp-3 text-gray-700 dark:text-gray-300">
            This is an example of a paragraph that will be truncated after three lines, thanks to the Tailwind line-clamp plugin. 
            You can control how many lines should be visible before the text is truncated. The rest of the content will be hidden.
          </p>
        </div>
      </section>

      {/* Scrollbar Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl text-center font-display mb-6">Custom Scrollbar</h2>
        <div className="h-64 overflow-y-scroll scrollbar scrollbar-thumb-primary scrollbar-track-gray-300 dark:scrollbar-thumb-primary-dark dark:scrollbar-track-gray-600 p-4">
          <p className="text-gray-700 dark:text-gray-300">
            Scroll through this content and observe the custom scrollbar styles in action. The scrollbar thumb and track colors are customized.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            This is useful for improving UI/UX, especially in areas with a lot of content to scroll through. You can style it however you want.
          </p>
        </div>
      </section>

      {/* Animations Section */}
      <section className="py-16">
        <h2 className="text-3xl text-center font-display mb-6">Animations</h2>
        <div className="flex justify-center space-x-8">
          <div className="w-32 h-32 bg-primary rounded-full animate-bounce"></div>
          <div className="w-32 h-32 bg-secondary rounded-full animate-fade-in"></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-700 text-white text-center">
        <p>&copy; 2025 Tailwind CSS Example Page</p>
      </footer>
    </div>

  </>
  );
}
