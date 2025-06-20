import React from 'react';
import { Github, LinkedinIcon, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/fibologo.svg" 
                alt="Fibonacci Club Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#41B783] to-white bg-clip-text text-transparent">
                Fibonacci Club
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering minds through code, mathematics, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-[#41B783] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Team', 'Events', 'Gallery'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm">
                  WhatsApp Group
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm">
                  Telegram Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>fibonacci.club@university.edu</p>
              <p>Building A, Room 101</p>
              <p>Computer Science Department</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fibonacci Club. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#41B783] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;