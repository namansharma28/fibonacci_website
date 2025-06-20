import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, Download, ExternalLink, Filter, Search, Star } from 'lucide-react';
import { eventsData, getUpcomingEvents, getPastEvents, getEventsByCategory, Event } from '../data/eventsData';

const Events = () => {
  const [activeView, setActiveView] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const categories = [
    { id: 'all', label: 'All Events', color: 'bg-gray-600' },
    { id: 'hackathon', label: 'Hackathons', color: 'bg-purple-600' },
    { id: 'workshop', label: 'Workshops', color: 'bg-blue-600' },
    { id: 'talk', label: 'Talks', color: 'bg-green-600' },
    { id: 'competition', label: 'Competitions', color: 'bg-red-600' },
    { id: 'showcase', label: 'Showcases', color: 'bg-yellow-600' },
    { id: 'social', label: 'Social', color: 'bg-pink-600' },
    { id: 'fest', label: 'Tech Fests', color: 'bg-indigo-600' }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-600';
  };

  const filteredEvents = useMemo(() => {
    let events = activeView === 'upcoming' ? upcomingEvents : pastEvents;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      events = events.filter(event => event.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      events = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Sort events
    events.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'attendees':
          return (b.attendees || 0) - (a.attendees || 0);
        default:
          return 0;
      }
    });
    
    return events;
  }, [activeView, selectedCategory, searchTerm, sortBy, upcomingEvents, pastEvents]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleRegister = (event: Event) => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    } else {
      alert(`Registration for ${event.title} will open soon!`);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Events & Workshops
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us for hackathons, workshops, tech talks, and competitions. 
            Learn, build, and connect with fellow innovators.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/30 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent"
              />
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-800">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveView('upcoming')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeView === 'upcoming'
                      ? 'bg-[#41B783] text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  Upcoming Events ({upcomingEvents.length})
                </button>
                <button
                  onClick={() => setActiveView('past')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeView === 'past'
                      ? 'bg-[#41B783] text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  Past Events ({pastEvents.length})
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter and Sort */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 mb-8">
            {/* Category Filter */}
            <div className="flex items-center space-x-4 flex-wrap gap-2">
              <Filter className="h-5 w-5 text-[#41B783]" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#41B783] text-black'
                      : 'bg-gray-900/30 text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900/30 border border-gray-800 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#41B783]"
              >
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="attendees">Attendees</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing {filteredEvents.length} {activeView} events
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`px-3 py-1 ${getCategoryColor(event.category)} text-white text-xs font-medium rounded-full`}>
                        {event.category}
                      </span>
                      {event.featured && (
                        <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-medium rounded-full flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    {event.status === 'upcoming' && event.registrationOpen && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                          Registration Open
                        </span>
                      </div>
                    )}
                    {event.status === 'completed' && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gray-600 text-white text-xs font-medium rounded-full">
                          Completed
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#41B783] transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="h-4 w-4 text-[#41B783] mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="h-4 w-4 text-[#41B783] mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 text-[#41B783] mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Users className="h-4 w-4 text-[#41B783] mr-2" />
                        {event.status === 'upcoming' 
                          ? `${event.attendees}/${event.maxAttendees} registered`
                          : `${event.attendees} attended`
                        }
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    {/* Tags */}
                    {event.tags && event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {event.status === 'upcoming' ? (
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => handleRegister(event)}
                          className="flex-1 bg-[#41B783] text-black py-2 px-4 rounded-lg font-medium hover:bg-[#359268] transition-colors duration-300"
                        >
                          {event.registrationOpen ? 'Register Now' : 'Coming Soon'}
                        </button>
                        <button className="p-2 border border-[#41B783] text-[#41B783] rounded-lg hover:bg-[#41B783] hover:text-black transition-all duration-300">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">Resources:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.resources && Object.entries(event.resources).map(([type, link]) => (
                            <a
                              key={type}
                              href={link as string}
                              className="inline-flex items-center px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-lg hover:bg-[#41B783] hover:text-black transition-all duration-300"
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss an <span className="text-[#41B783]">Event</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Stay updated with our latest events, workshops, and opportunities. 
            Join our community to get notified about new events.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#41B783] text-black rounded-lg font-semibold hover:bg-[#359268] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#41B783]/25"
            >
              Join Our Community
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#41B783] text-[#41B783] rounded-lg font-semibold hover:bg-[#41B783] hover:text-black transition-all duration-300 transform hover:scale-105">
              <Calendar className="mr-2 h-5 w-5" />
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;