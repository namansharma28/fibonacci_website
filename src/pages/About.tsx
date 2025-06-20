import React from 'react';
import { Calendar, Award, Users, Code, Target, Heart } from 'lucide-react';

const About = () => {
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
              className="h-20 w-auto opacity-80"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            About Fibonacci Club
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from the intersection of mathematics and computer science, we are a community of innovators, 
            thinkers, and builders who believe that the most elegant solutions follow nature's own patterns.
          </p>
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
    </div>
  );
};

export default About;