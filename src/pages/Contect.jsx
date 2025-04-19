import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // You can handle the form submission logic here (e.g., API call)
    alert("Form submitted!");
  };

  return (
    <>
      {/* Contact Section */}
      <section className="grid md:grid-cols-[70%_30%] gap-4 bg-[#E6DDE1] m-8">
        {/* Left Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#C1A5A9] p-8 text-center items-center justify-center">
          <div className="w-full mx-auto+">
            <img
              src="https://img.icons8.com/ios-filled/50/apple-phone.png"
              alt="Phone"
              className="mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">BY PHONE</h2>
            <p>
              (Monday to Friday,
              <br /> 9pm to 4pm IST)
              <br />
              <br />
              Phone Number:
              <br /> 080-23513689
            </p>
          </div>
          <div className="w-full mx-auto">
            <img
              src="https://img.icons8.com/ios-filled/50/chat-message--v1.png"
              alt="Start New Case"
              className="mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">START A NEW CASE</h2>
            <p>Send us your questions or concerns by starting a new case.</p>
          </div>
          <div className="w-full mx-auto">
            <img
              src="https://img.icons8.com/ios-filled/50/chat.png"
              alt="Live Chat"
              className="mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">LIVE CHAT</h2>
            <p>Need help fast? Our live chat offers instant support.</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-[#C1A5A9] p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-bold text-center mb-6">Contact Us</h2>
            <div className="grid grid-cols-[auto_1fr] items-center bg-[#E6DDE1] p-4 rounded-lg">
              <label htmlFor="name" className="pr-4">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="col-span-2 bg-white rounded-md px-4 py-2 mt-2"
              />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center bg-[#E6DDE1] p-4 rounded-lg">
              <label htmlFor="email" className="pr-4">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="someone@gmail.com"
                required
                className="col-span-2 bg-white rounded-md px-4 py-2 mt-2"
              />
            </div>
            <div className="grid grid-cols-1 bg-[#E6DDE1] p-4 rounded-lg">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here..."
                required
                className="mt-2 bg-white rounded-md px-4 py-2 resize-y"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1D1A31] hover:bg-[#A3858D] text-white font-semibold px-6 py-2 rounded transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
