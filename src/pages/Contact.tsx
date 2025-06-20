import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      interest: 'general'
    });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  ];

  const communityLinks = [
    {
      name: 'Discord Server',
      description: 'Join our active Discord community for real-time discussions, help, and announcements.',
      icon: MessageCircle,
      link: '#',
      members: '250+',
      color: 'bg-indigo-600'
    },
    {
      name: 'WhatsApp Group',
      description: 'Stay updated with quick announcements and casual conversations.',
      icon: MessageCircle,
      link: '#',
      members: '150+',
      color: 'bg-green-600'
    },
    {
      name: 'Telegram Channel',
      description: 'Get instant notifications about events, workshops, and opportunities.',
      icon: MessageCircle,
      link: '#',
      members: '300+',
      color: 'bg-blue-600'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'fibonacci.club@university.edu',
      description: 'Send us an email for general inquiries'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during office hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Engineering Building, Room 101',
      description: 'Computer Science Department'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Club Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/fibologo.svg" 
              alt="Fibonacci Club Logo" 
              className="h-16 w-auto opacity-80"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join our community? Have questions about our events? 
            Want to collaborate on a project? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let's <span className="text-[#41B783]">Connect</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you're a current student, prospective member, or industry professional, 
                  we're here to help you connect with our community.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#41B783]/20 p-3 rounded-lg">
                      <contact.icon className="h-6 w-6 text-[#41B783]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                      <p className="text-[#41B783] font-medium mb-1">{contact.details}</p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-900/50`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent transition-all duration-300"
                  >
                    <option value="general">General Information</option>
                    <option value="membership">Club Membership</option>
                    <option value="events">Upcoming Events</option>
                    <option value="collaboration">Partnership/Collaboration</option>
                    <option value="speaking">Speaking Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent transition-all duration-300"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#41B783] text-black rounded-lg font-semibold hover:bg-[#359268] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#41B783]/25"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-[#41B783]">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with fellow members, get real-time updates, and be part of our growing tech community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityLinks.map((community, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 group text-center">
                <div className={`${community.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <community.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#41B783] transition-colors duration-300">
                  {community.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {community.description}
                </p>
                <div className="text-[#41B783] font-medium mb-6">
                  {community.members} members
                </div>
                <a
                  href={community.link}
                  className="inline-block px-6 py-3 bg-transparent border-2 border-[#41B783] text-[#41B783] rounded-lg font-medium hover:bg-[#41B783] hover:text-black transition-all duration-300"
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Visit Us During <span className="text-[#41B783]">Office Hours</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Regular Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Thursday: 3:00 PM - 6:00 PM</p>
                  <p>Friday: 2:00 PM - 5:00 PM</p>
                  <p>Weekend: By appointment</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Engineering Building</p>
                  <p>Room 101, Computer Science Department</p>
                  <p>University Campus</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-400 text-sm">
                Drop by anytime during office hours or schedule a meeting for personalized assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;