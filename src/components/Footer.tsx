import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-16">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} V Chaitanya Chowdari. All rights reserved.</p>
        </div>
        <div className="w-full md:w-2/3 flex justify-center md:justify-end space-x-6">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/refund" className="hover:underline">
            Refund & Cancellation
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;