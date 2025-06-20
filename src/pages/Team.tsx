import React, { useState, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Search, Filter, Award, MapPin, Calendar } from 'lucide-react';
import { teamData, getCoreTeam, getVolunteers, getAlumni, getAdvisors, TeamMember } from '../data/teamData';

const Team = () => {
  const [activeTab, setActiveTab] = useState('core');
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  const coreTeam = getCoreTeam();
  const volunteers = getVolunteers();
  const alumni = getAlumni();
  const advisors = getAdvisors();

  const tabs = [
    { id: 'core', label: 'Core Team', count: coreTeam.length, data: coreTeam },
    { id: 'volunteers', label: 'Volunteers', count: volunteers.length, data: volunteers },
    { id: 'alumni', label: 'Alumni', count: alumni.length, data: alumni },
    { id: 'advisors', label: 'Advisors', count: advisors.length, data: advisors }
  ];

  const currentTabData = tabs.find(tab => tab.id === activeTab)?.data || [];

  // Get all unique skills for filter
  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    teamData.forEach(member => {
      member.skills?.forEach(skill => skills.add(skill));
    });
    return Array.from(skills).sort();
  }, []);

  const filteredMembers = useMemo(() => {
    let members = currentTabData;
    
    // Filter by search term
    if (searchTerm) {
      members = members.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.bio?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by skill
    if (skillFilter) {
      members = members.filter(member => 
        member.skills?.includes(skillFilter)
      );
    }
    
    return members;
  }, [currentTabData, searchTerm, skillFilter]);

  const renderMemberCard = (member: TeamMember, index: number) => {
    const isCore = member.type === 'core';
    const isAlumni = member.type === 'alumni';
    const isAdvisor = member.type === 'advisor';

    return (
      <div key={member.id} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 group">
        <div className="text-center">
          <div className="relative mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#41B783]/50 group-hover:border-[#41B783] transition-all duration-300"
            />
            {member.featured && (
              <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-1">
                <Award className="h-4 w-4 text-black" />
              </div>
            )}
            <div className="absolute inset-0 rounded-full bg-[#41B783]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#41B783] transition-colors duration-300">
            {member.name}
          </h3>
          
          <p className="text-[#41B783] font-medium mb-2">{member.role}</p>
          
          {isAlumni && member.currentRole && (
            <p className="text-gray-300 text-sm mb-2">
              {member.currentRole} {member.company && `at ${member.company}`}
            </p>
          )}
          
          {member.year && member.department && (
            <p className="text-gray-400 text-sm mb-4">
              {member.year} • {member.department}
            </p>
          )}
          
          {isAlumni && member.graduationYear && (
            <p className="text-gray-400 text-sm mb-4">
              Class of {member.graduationYear}
            </p>
          )}

          {member.bio && (
            <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
              {member.bio}
            </p>
          )}

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 justify-center">
                {member.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded">
                    {skill}
                  </span>
                ))}
                {member.skills.length > 4 && (
                  <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded">
                    +{member.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Achievements */}
          {member.achievements && member.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white font-medium text-sm mb-2">Achievements</h4>
              <div className="space-y-1">
                {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                  <p key={achIndex} className="text-gray-300 text-xs">
                    • {achievement}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Join Date */}
          {member.joinDate && (
            <div className="flex items-center justify-center text-gray-400 text-xs mb-4">
              <Calendar className="h-3 w-3 mr-1" />
              Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          )}
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {member.github && (
              <a
                href={member.github}
                className="text-gray-400 hover:text-[#41B783] transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="text-gray-400 hover:text-[#41B783] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-gray-400 hover:text-[#41B783] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
            {member.portfolio && (
              <a
                href={member.portfolio}
                className="text-gray-400 hover:text-[#41B783] transition-colors duration-300"
                aria-label="Portfolio"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind Fibonacci Club - passionate students, dedicated mentors, 
            and inspiring alumni who make our community thrive.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/30 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent"
              />
            </div>

            {/* Skill Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-[#41B783]" />
              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="bg-gray-900/30 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#41B783]"
              >
                <option value="">All Skills</option>
                {allSkills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-800">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#41B783] text-black'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {tab.label}
                    <span className="ml-2 text-sm opacity-75">({tab.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing {filteredMembers.length} of {currentTabData.length} members
              {searchTerm && ` matching "${searchTerm}"`}
              {skillFilter && ` with skill "${skillFilter}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No members found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              activeTab === 'core' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : activeTab === 'advisors'
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'md:grid-cols-2 lg:grid-cols-4'
            }`}>
              {filteredMembers.map((member, index) => renderMemberCard(member, index))}
            </div>
          )}
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-[#41B783]">Community</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{coreTeam.length}</div>
              <div className="text-gray-300">Core Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{volunteers.length}</div>
              <div className="text-gray-300">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{alumni.length}</div>
              <div className="text-gray-300">Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{advisors.length}</div>
              <div className="text-gray-300">Advisors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-[#41B783]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Are you passionate about technology, mathematics, and building community? 
            We're always looking for dedicated individuals to join our mission.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#41B783] text-black rounded-lg font-semibold hover:bg-[#359268] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#41B783]/25"
            >
              Apply Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/events"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#41B783] text-[#41B783] rounded-lg font-semibold hover:bg-[#41B783] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Attend Our Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;