import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Classic Footer
const ClassicFooter = () => {
  return (
    <footer className="bg-[#1b3a27] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo.png" alt="Jagatguru Rampal Ji" width={120} height={120} className="mb-4" />
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Satguru Rampal Ji Maharaj is the "Tatvadarshi Saint" or the "Baakhabar" about whom there is a mention in Holy Gita and Holy Quran respectively. He is the only One who provides true spiritual knowledge free of cost and guarantees salvation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-yellow-400">📞</span>
                <span>+(91) 8222 880 541</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-yellow-400">✉️</span>
                <span>jagatgururampalji@yahoo.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-yellow-400">✉️</span>
                <span>contact@jagatgururampalji.org</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-yellow-400">📍</span>
                <span>Satlok Ashram Dhanana Dham 4G65+9QX, Banwasa, Haryana 131304</span>
              </p>
            </div>
          </div>

          {/* Related Websites */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Related Websites</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#" className="text-gray-300 hover:text-yellow-400">SA NEWS</Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">SATLOK ASHRAM</Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">SA TRUE STORY</Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">FACTFUL DEBATES</Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">KABIR SAHIB</Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400">BHAGAVAD GITA</Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="px-4 py-2 rounded-l-lg w-full md:w-80 text-gray-900"
              />
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-r-lg font-medium hover:bg-yellow-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="#" className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900">
            <i className="fab fa-google-plus-g"></i>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2004 - 2025 Kabir Parmeshwar Bhakti Trust (Regd) - All Rights Reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="hover:text-yellow-400">Copyright Notice</Link>
            <Link href="#" className="hover:text-yellow-400">Terms & Conditions</Link>
            <Link href="#" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-400">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Modern Footer
const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1b3a27] to-[#0f2318] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Image src="/images/logo.png" alt="Jagatguru Rampal Ji" width={100} height={100} />
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-center md:text-left">Connect with us</h2>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">About Us</h3>
              <p className="text-gray-300 leading-relaxed">
                Satguru Rampal Ji Maharaj is the "Tatvadarshi Saint" or the "Baakhabar" about whom there is a mention in Holy Gita and Holy Quran respectively. He is the only One who provides true spiritual knowledge free of cost and guarantees salvation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Info</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center">📞</span>
                  <span>+(91) 8222 880 541</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center">✉️</span>
                  <span>jagatgururampalji@yahoo.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center">✉️</span>
                  <span>contact@jagatgururampalji.org</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center">📍</span>
                  <span>Satlok Ashram Dhanana Dham 4G65+9QX, Banwasa, Haryana 131304</span>
                </p>
              </div>
            </div>
          </div>

          {/* Related Websites */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Related Websites</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>SA NEWS</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>SATLOK ASHRAM</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>SA TRUE STORY</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>FACTFUL DEBATES</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>KABIR SAHIB</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>BHAGAVAD GITA</span>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Subscribe Newsletter</h3>
            <div className="bg-white/5 p-6 rounded-xl">
              <p className="text-gray-300 mb-4">Stay updated with our latest news and updates.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2004 - 2025 Kabir Parmeshwar Bhakti Trust (Regd) - All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-yellow-400">Copyright Notice</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">Terms & Conditions</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Minimal Footer
const MinimalFooter = () => {
  return (
    <footer className="bg-[#1b3a27] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Image src="/images/logo.png" alt="Jagatguru Rampal Ji" width={80} height={80} />
            <p className="text-sm text-gray-300 leading-relaxed">
              Satguru Rampal Ji Maharaj is the "Tatvadarshi Saint" or the "Baakhabar" about whom there is a mention in Holy Gita and Holy Quran respectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Related Websites</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-yellow-400">SA NEWS</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">SATLOK ASHRAM</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">SA TRUE STORY</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">FACTFUL DEBATES</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">KABIR SAHIB</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">BHAGAVAD GITA</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+(91) 8222 880 541</li>
              <li>jagatgururampalji@yahoo.com</li>
              <li>contact@jagatgururampalji.org</li>
              <li>Satlok Ashram Dhanana Dham 4G65+9QX, Banwasa, Haryana 131304</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Subscribe Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 bg-white/10 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-r text-sm font-medium hover:bg-yellow-500">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Social */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-yellow-400">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400">
              <i className="fab fa-google-plus-g"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2004 - 2025 Kabir Parmeshwar Bhakti Trust (Regd) - All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-yellow-400">Copyright Notice</Link>
              <Link href="#" className="hover:text-yellow-400">Terms & Conditions</Link>
              <Link href="#" className="hover:text-yellow-400">Privacy Policy</Link>
              <Link href="#" className="hover:text-yellow-400">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterVariations = {
  Classic: ClassicFooter,
  Modern: ModernFooter,
  Minimal: MinimalFooter,
};

export default FooterVariations;
