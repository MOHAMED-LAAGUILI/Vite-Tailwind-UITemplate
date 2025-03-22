
export default function Form0() {
  return (
    <>
        
       {/* Form Example */}
       <section >
          <form className="space-y-4">
            <div className="form-control">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                className="form-input block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your Name"
              />
            </div>

            <div className="form-control">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="form-input block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your Email"
              />
            </div>

            <div className="form-control">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="form-textarea block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </section>


   
    </>
  )
}
