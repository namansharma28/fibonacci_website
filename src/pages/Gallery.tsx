import React, { useState, useMemo } from 'react';
import { Play, X, ExternalLink, Calendar, Users, Search, Filter, Heart, Eye, Star } from 'lucide-react';
import { galleryData, getMediaByCategory, getFeaturedMedia, MediaItem, incrementViews, toggleLike } from '../data/galleryData';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [mediaType, setMediaType] = useState('all'); // 'all', 'photo', 'video'
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'competition', label: 'Competitions' },
    { id: 'talk', label: 'Tech Talks' },
    { id: 'showcase', label: 'Showcases' },
    { id: 'social', label: 'Social Events' },
    { id: 'fest', label: 'Tech Fests' },
    { id: 'promo', label: 'Promotional' },
    { id: 'testimonial', label: 'Testimonials' }
  ];

  const filteredMedia = useMemo(() => {
    let media = getMediaByCategory(activeCategory);
    
    // Filter by media type
    if (mediaType !== 'all') {
      media = media.filter(item => item.type === mediaType);
    }
    
    // Filter by search term
    if (searchTerm) {
      media = media.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Sort media
    media.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'likes':
          return (b.likes || 0) - (a.likes || 0);
        case 'views':
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });
    
    return media;
  }, [activeCategory, mediaType, searchTerm, sortBy]);

  const featuredMedia = getFeaturedMedia();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    incrementViews(media.id);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const handleLike = (mediaId: string) => {
    const newLikes = toggleLike(mediaId);
    if (selectedMedia && selectedMedia.id === mediaId) {
      setSelectedMedia({ ...selectedMedia, likes: newLikes });
    }
  };

  const getMediaStats = () => {
    const photos = galleryData.filter(item => item.type === 'photo').length;
    const videos = galleryData.filter(item => item.type === 'video').length;
    const totalViews = galleryData.reduce((sum, item) => sum + (item.views || 0), 0);
    const totalLikes = galleryData.reduce((sum, item) => sum + (item.likes || 0), 0);
    
    return { photos, videos, totalViews, totalLikes };
  };

  const stats = getMediaStats();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our journey through photos and videos. Witness the innovation, 
            collaboration, and memorable moments that define the Fibonacci Club experience.
          </p>
        </div>
      </section>

      {/* Featured Media Section */}
      {featuredMedia.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-[#41B783]">Featured</span> Highlights
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMedia.slice(0, 6).map((media) => (
                <div
                  key={media.id}
                  className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(media)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={media.thumbnail || media.url}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 rounded-full p-4 group-hover:bg-[#41B783]/80 transition-all duration-300">
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Video Duration */}
                    {media.duration && (
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {media.duration}
                        </span>
                      </div>
                    )}

                    {/* Stats Overlay */}
                    <div className="absolute bottom-2 left-2 flex space-x-2">
                      <span className="bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {media.views || 0}
                      </span>
                      <span className="bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {media.likes || 0}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/30 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#41B783] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 mb-8">
            {/* Media Type Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-[#41B783]" />
              <div className="flex space-x-2">
                {['all', 'photo', 'video'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setMediaType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      mediaType === type
                        ? 'bg-[#41B783] text-black'
                        : 'bg-gray-900/30 text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                    }`}
                  >
                    {type === 'all' ? 'All Media' : `${type.charAt(0).toUpperCase() + type.slice(1)}s`}
                  </button>
                ))}
              </div>
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
                <option value="likes">Likes</option>
                <option value="views">Views</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#41B783] text-black'
                    : 'bg-gray-900/30 text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing {filteredMedia.length} items
              {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
              {mediaType !== 'all' && ` (${mediaType}s only)`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No media found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((media) => (
                <div
                  key={media.id}
                  className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#41B783]/50 transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(media)}
                >
                  <div className="relative aspect-square">
                    <img
                      src={media.thumbnail || media.url}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Video Play Button */}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 rounded-full p-4 group-hover:bg-[#41B783]/80 transition-all duration-300">
                          <Play className="h-8 w-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Video Duration */}
                    {media.duration && (
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {media.duration}
                        </span>
                      </div>
                    )}

                    {/* Featured Badge */}
                    {media.featured && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                        </span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-sm mb-1 truncate">
                          {media.title}
                        </h3>
                        <div className="flex items-center justify-between text-gray-300 text-xs">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(media.date)}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {media.views || 0}
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {media.likes || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#41B783] transition-colors duration-300"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
              {/* Media */}
              <div className="aspect-video">
                {selectedMedia.type === 'video' ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-[#41B783] mx-auto mb-4" />
                      <p className="text-white">Video Player</p>
                      <p className="text-gray-400 text-sm">Duration: {selectedMedia.duration}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedMedia.title}
                    </h2>
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(selectedMedia.date)}
                      {selectedMedia.photographer && (
                        <>
                          <span className="mx-2">•</span>
                          <span>Photo by {selectedMedia.photographer}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-[#41B783]/20 text-[#41B783] text-sm font-medium rounded-full">
                      {selectedMedia.category}
                    </span>
                    {selectedMedia.featured && (
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm font-medium rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedMedia.description}
                </p>

                {/* Tags */}
                {selectedMedia.tags && selectedMedia.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMedia.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-sm rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedMedia.views || 0} views
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {selectedMedia.likes || 0} likes
                    </span>
                    <span>Fibonacci Club Event</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleLike(selectedMedia.id)}
                      className="inline-flex items-center px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-[#41B783] hover:text-black transition-all duration-300"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Like
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-[#41B783] text-black rounded-lg font-medium hover:bg-[#359268] transition-colors duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-[#41B783]">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{stats.photos}</div>
              <div className="text-gray-300">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{stats.videos}</div>
              <div className="text-gray-300">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{stats.totalViews}</div>
              <div className="text-gray-300">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#41B783] mb-2">{stats.totalLikes}</div>
              <div className="text-gray-300">Total Likes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;