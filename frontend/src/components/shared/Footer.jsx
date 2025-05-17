import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

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
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#6A38C2]"
              />
              <button
                type="submit"
                className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white px-4 py-2 rounded-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 NEXT HIRE. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.408c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.919.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.408 24 24 23.408 24 22.676V1.325C24 .593 23.408 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.918 4.918 0 0 0-8.379 4.482A13.955 13.955 0 0 1 1.671 3.149a4.902 4.902 0 0 0 1.523 6.548 4.903 4.903 0 0 1-2.228-.616v.06a4.922 4.922 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 21.543a13.944 13.944 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.635A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#6A38C2]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.854 0-2.138 1.45-2.138 2.948v5.658H9.348V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127zM3.654 20.452h3.367V9H3.654v11.452z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
