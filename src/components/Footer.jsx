import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-[#131224] to-[#1d1a35] text-white px-8 md:px-16 py-12 gap-12 md:gap-20">
      <div className="space-y-8 md:flex-1">
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">Download</h1>
          <ul className="space-y-2 text-gray-300 hover:[&>li]:text-white hover:[&>li]:translate-x-2 [&>li]:transition-all [&>li]:duration-300 [&>li]:cursor-pointer">
            <li>Mobile App</li>
            <li>Brochure</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">Services</h1>
          <ul className="space-y-2 text-gray-300 hover:[&>li]:text-white hover:[&>li]:translate-x-2 [&>li]:transition-all [&>li]:duration-300 [&>li]:cursor-pointer">
            <li>Learn More</li>
            <li>Manage Account</li>
          </ul>
        </div>
      </div>

      <div className="space-y-8 md:flex-1">
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">Company</h1>
          <ul className="space-y-2 text-gray-300 hover:[&>li]:text-white hover:[&>li]:translate-x-2 [&>li]:transition-all [&>li]:duration-300 [&>li]:cursor-pointer">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">Products</h1>
          <ul className="space-y-2 text-gray-300 hover:[&>li]:text-white hover:[&>li]:translate-x-2 [&>li]:transition-all [&>li]:duration-300 [&>li]:cursor-pointer">
            <li>Web</li>
            <li>App</li>
          </ul>
        </div>
      </div>

      <div className="md:flex-1">
        <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">Get In Touch</h1>
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:harshvadher5114@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-mail.png"
              alt="mail"
            />
          </a>
          <a
            href="http://instagram.com/harsh_v_101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png"
              alt="twitter"
            />
          </a>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
              alt="facebook"
            />
          </a>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#C1A5A9]">
            Subscribe to Our Newsletter
          </h1>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-lg bg-[#1f1b36] border border-[#C1A5A9]/30 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#C1A5A9] transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#C1A5A9] hover:bg-[#e8cacf] text-white hover:text-black px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
