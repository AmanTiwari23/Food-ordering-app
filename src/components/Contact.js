const Contact = () => {
  return (
    <div className="container mx-auto my-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-xl">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">
        Contact Us
      </h1>
      <div className="w-full lg:w-9/12 xl:w-8/12 mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
        <form>
          <div className="mb-6 flex items-center border-b-2 border-gray-300 transition-transform duration-300 hover:scale-105">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 text-lg border-0 focus:outline-none focus:ring-0"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6 flex items-center border-b-2 border-gray-300 transition-transform duration-300 hover:scale-105">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 text-lg border-0 focus:outline-none focus:ring-0"
              placeholder="Your email"
            />
          </div>

          <div className="mb-6 flex flex-col">
            <label className=" text-gray-700 text-base font-semibold mb-2 flex items-center">
            Message
            </label>
            <textarea
              className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
