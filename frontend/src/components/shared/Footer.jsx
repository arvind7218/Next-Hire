import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 py-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#6A38C2]">Job Hunt</h2>
            <p className="mt-2 text-sm">
              Find your dream job or your perfect hire. Join the fastest-growing job portal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/jobs" className="hover:text-[#6A38C2] transition">Jobs</a></li>
              <li><a href="/browse" className="hover:text-[#6A38C2] transition">Browse</a></li>
              <li><a href="/companies" className="hover:text-[#6A38C2] transition">Companies</a></li>
              <li><a href="/profile" className="hover:text-[#6A38C2] transition">Profile</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>FAQs</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-sm mb-3">Get the latest job updates delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#6A38C2]"
              />
              <button type="submit" className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white px-4 py-2 rounded-md text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 NEXT HIRE. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592..."/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835..."/></svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569..."/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
