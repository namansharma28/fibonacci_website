import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Code, Trophy, ChevronDown, Award, Heart, Target } from 'lucide-react';

const Home = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [fibonacciNumbers, setFibonacciNumbers] = useState([1, 1]);

  const upcomingEvents = [
    'Hackathon 2024 - March 15-17',
    'AI Workshop Series - Starting April 5',
    'Coding Competition - April 20',
    'Guest Lecture: Industry Expert - May 3',
  ];

  // Generate Fibonacci sequence for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFibonacciNumbers(prev => {
        const newNum = prev[prev.length - 1] + prev[prev.length - 2];
        if (newNum > 1000) return [1, 1];
        return [...prev, newNum];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Cycle through events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: Code,
      title: 'Innovation',
      description: 'We believe in pushing boundaries and exploring new possibilities in technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Together we achieve more, sharing knowledge and supporting each other\'s growth.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for quality in everything we do, from code to community building.'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Everyone is welcome to learn, contribute, and grow regardless of their background.'
    },
  ];

  const milestones = [
    { year: '2019', event: 'Club Founded', description: 'Started with 8 passionate students' },
    { year: '2020', event: 'First Hackathon', description: 'Organized virtual coding competition' },
    { year: '2021', event: 'AI Workshop Series', description: 'Launched comprehensive AI curriculum' },
    { year: '2022', event: 'Industry Partnership', description: 'Collaborated with major tech companies' },
    { year: '2023', event: 'Open Source Initiative', description: 'Contributed to major open source projects' },
    { year: '2024', event: 'International Recognition', description: 'Won national coding championship' },
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Software Engineer at Google',
      year: '2021 Graduate',
      quote: 'Fibonacci Club shaped my understanding of algorithms and gave me the confidence to tackle complex problems. The community here is unmatched.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Johnson',
      role: 'ML Engineer at Meta',
      year: '2020 Graduate',
      quote: 'The club\'s focus on mathematical thinking through code prepared me perfectly for my career in machine learning.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Park',
      role: 'Startup Founder',
      year: '2022 Graduate',
      quote: 'The collaborative environment and innovative projects at Fibonacci Club inspired me to start my own tech company.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section fibonacci-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Animated Fibonacci Numbers */}
          <div className="flex justify-center items-center space-x-4 mb-8 overflow-hidden">
            {fibonacciNumbers.slice(-5).map((num, index) => (
              <div
                key={`${num}-${index}`}
                className="text-[#41B783] font-mono text-lg opacity-70 animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Club Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img 
                src="/fibologo.svg" 
                alt="Fibonacci Club Logo" 
                className="h-24 w-auto group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#41B783]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Fibonacci Club
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where Code Meets Creativity, and Innovation Follows the Golden Ratio
          </p>

          {/* Marquee for events */}
          <div className="relative overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-lg py-4 px-6 border border-gray-800">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5 text-[#41B783]" />
              <span className="text-sm text-gray-400">Upcoming:</span>
              <div className="text-white font-medium animate-pulse">
                {upcomingEvents[currentEvent]}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#41B783] text-black rounded-lg font-semibold hover:bg-[#359268] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#41B783]/25"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#41B783] text-[#41B783] rounded-lg font-semibold hover:bg-[#41B783] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#41B783]" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#41B783]">Purpose</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a community where logic, creativity, and technology converge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#41B783]/20 p-3 rounded-lg">
                  <Trophy className="h-8 w-8 text-[#41B783]" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To create a thriving ecosystem where students discover the beauty of mathematics through code, 
                fostering innovation that follows the natural patterns of growth and efficiency found in the Fibonacci sequence.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#41B783]/20 p-3 rounded-lg">
                  <Code className="h-8 w-8 text-[#41B783]" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering students with cutting-edge programming skills, mathematical thinking, and collaborative 
                problem-solving abilities to tackle real-world challenges and build the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We <span className="text-[#41B783]">Stand For</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our club focuses on the convergence of coding, robotics, artificial intelligence, and mathematical thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 group">
                <div className="bg-[#41B783]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#41B783]/30 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-[#41B783]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-[#41B783] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club History & Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#41B783]">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to national recognition, here's how we've grown
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#41B783]/30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#41B783] rounded-full border-4 border-black z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-[#41B783] mr-2" />
                        <span className="text-[#41B783] font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.event}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisor & Founding Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#41B783]">Leadership</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Faculty Advisor */}
            <div className="lg:col-span-1 bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#41B783]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-[#41B783]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-[#41B783] mb-4">Faculty Advisor</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Professor of Computer Science with expertise in algorithms and mathematical computing. 
                  Passionate about fostering innovation in students.
                </p>
              </div>
            </div>

            {/* Founding Members */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Founding Members</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: 'Michael Chen', role: 'Co-Founder', year: '2019' },
                  { name: 'Anna Thompson', role: 'Co-Founder', year: '2019' },
                  { name: 'James Wilson', role: 'Technical Lead', year: '2019' },
                  { name: 'Lisa Kumar', role: 'Community Manager', year: '2019' },
                ].map((member, index) => (
                  <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#41B783]/20 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-[#41B783]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{member.name}</h4>
                        <p className="text-[#41B783] text-sm">{member.role}</p>
                        <p className="text-gray-400 text-xs">Since {member.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alumni <span className="text-[#41B783]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who are now making waves in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#41B783]/50"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-[#41B783] text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.year}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="text-[#41B783]">Universe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Meet the Team',
                description: 'Get to know the brilliant minds driving our community forward',
                link: '/team',
                icon: Users,
              },
              {
                title: 'Latest Events',
                description: 'Discover workshops, hackathons, and learning opportunities',
                link: '/events',
                icon: Calendar,
              },
              {
                title: 'Our Gallery',
                description: 'Visual journey through our achievements and memorable moments',
                link: '/gallery',
                icon: Trophy,
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#41B783]/20 p-3 rounded-lg group-hover:bg-[#41B783]/30 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-[#41B783]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#41B783] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center mt-6 text-[#41B783] group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;