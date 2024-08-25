import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              ISA HIT Students Chapter{" "}
            </h3>
            <p className="text-sm">
              ISA HIT Students Chapter empowers students with hands-on
              experience in automation and control systems. Join us to enhance
              your skills through workshops, seminars, and industry connections.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" passHref>
                  <span className="hover:text-blue-400 transition cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#event" passHref>
                  <span className="hover:text-blue-400 transition cursor-pointer">
                    Events
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#team" passHref>
                  <span className="hover:text-blue-400 transition cursor-pointer">
                    Team
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" passHref>
                  <span className="hover:text-blue-400 transition cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              {/* ISA Society Headquarters<br />
              123 Automation Ave<br />
              City, State, ZIP<br />
              Email: */}
              At Haldia Institute of Technology
              <br />
              EIE Department,
              <br />
              Haldia, West Bengal
              <br />
              <Link href="mailto:isa.hit.sc@gmail.com" passHref>
                <span className="text-blue-400 cursor-pointer"> isa.hit.sc@gmail.com</span>
              </Link>
              <br />
              {/* Phone: +1 234 567 890 */}
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/isa.hit15/" target="_blank" passHref>
                <span className="text-blue-600 hover:text-blue-400 transition cursor-pointer">
                  <FaFacebookF size={24} />
                </span>
              </Link>
              {/* <Link href="@" passHref>
                <span className="text-blue-400 hover:text-blue-300 transition cursor-pointer">
                  <FaTwitter size={24} />
                </span>
              </Link> */}
              <Link href="@" passHref>

                <span className="text-blue-700 hover:text-blue-500 transition cursor-pointer">
                  <FaLinkedinIn size={24} />
                </span>
              </Link>
              <Link href="https://www.instagram.com/isa_hit_students_chapter/" target="_blank" passHref>
                <span className="text-pink-500 hover:text-pink-400 transition cursor-pointer">
                  <FaInstagram size={24} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ISA Society. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
