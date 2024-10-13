import React from 'react';

function ContactUs() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Contact Us</h2>
          <p className="text-lg text-gray-700 text-center mb-10">
            Have questions or need assistance? Get in touch with us via email, phone, or by filling out the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-semibold text-blue-700 mb-2">Email</p>
              <p className="text-gray-600 mb-4">info@lifelink.com</p>

              <p className="text-xl font-semibold text-blue-700 mb-2">Phone</p>
              <p className="text-gray-600 mb-4">+123-456-7890</p>

              <p className="text-xl font-semibold text-blue-700 mb-2">Address</p>
              <p className="text-gray-600 mb-4">
                LifeLink HQ, 123 Health St, Karachi, Pakistan
              </p>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
