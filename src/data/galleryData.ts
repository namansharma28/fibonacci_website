export interface MediaItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'hackathon' | 'workshop' | 'competition' | 'talk' | 'showcase' | 'social' | 'fest' | 'promo' | 'testimonial';
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
  duration?: string; // For videos
  photographer?: string;
  eventId?: string; // Link to related event
  tags?: string[];
  featured?: boolean;
  likes?: number;
  views?: number;
}

export const galleryData: MediaItem[] = [
  // Photos
  {
    id: 'spring-hackathon-2024-team-work',
    title: 'Spring Hackathon 2024 - Team Collaboration',
    description: 'Teams collaborating during our 24-hour hackathon, showcasing innovative solutions',
    date: '2024-03-15',
    category: 'hackathon',
    type: 'photo',
    url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Emma Davis',
    eventId: 'spring-hackathon-2024',
    tags: ['teamwork', 'coding', 'innovation'],
    featured: true,
    likes: 45,
    views: 230
  },
  {
    id: 'ai-workshop-learning',
    title: 'AI Workshop Series - Hands-on Learning',
    description: 'Students learning machine learning algorithms in our comprehensive workshop series',
    date: '2024-02-20',
    category: 'workshop',
    type: 'photo',
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Kevin Lee',
    tags: ['AI', 'machine learning', 'education'],
    featured: true,
    likes: 32,
    views: 180
  },
  {
    id: 'industry-guest-speaker',
    title: 'Industry Guest Speaker Session',
    description: 'Tech industry leader sharing insights about emerging technologies and career paths',
    date: '2024-02-10',
    category: 'talk',
    type: 'photo',
    url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Sophia Brown',
    tags: ['industry', 'career', 'networking'],
    likes: 28,
    views: 150
  },
  {
    id: 'coding-competition-intensity',
    title: 'Competitive Programming Contest',
    description: 'Intense competitive programming session with students solving algorithmic challenges',
    date: '2024-01-25',
    category: 'competition',
    type: 'photo',
    url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Sam Wilson',
    tags: ['competition', 'algorithms', 'problem solving'],
    likes: 35,
    views: 200
  },
  {
    id: 'team-building-event',
    title: 'Club Team Building Event',
    description: 'Club members bonding and networking during our annual team building retreat',
    date: '2024-01-15',
    category: 'social',
    type: 'photo',
    url: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Alex Zhang',
    tags: ['team building', 'networking', 'community'],
    likes: 42,
    views: 190
  },
  {
    id: 'project-showcase-presentations',
    title: 'Annual Project Showcase',
    description: 'Students presenting their innovative projects to faculty and industry professionals',
    date: '2023-12-10',
    category: 'showcase',
    type: 'photo',
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Zoe Martinez',
    tags: ['projects', 'presentation', 'innovation'],
    featured: true,
    likes: 38,
    views: 220
  },
  {
    id: 'robotics-workshop-hands-on',
    title: 'Robotics Workshop - Hands-on Programming',
    description: 'Students programming robots and learning about autonomous systems',
    date: '2023-11-20',
    category: 'workshop',
    type: 'photo',
    url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Ryan Thompson',
    tags: ['robotics', 'programming', 'automation'],
    likes: 29,
    views: 165
  },
  {
    id: 'annual-tech-fest-celebration',
    title: 'Annual Tech Fest Celebration',
    description: 'Our biggest annual technology celebration with demos, competitions, and networking',
    date: '2023-10-15',
    category: 'fest',
    type: 'photo',
    url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    photographer: 'Priya Sharma',
    tags: ['tech fest', 'celebration', 'community'],
    featured: true,
    likes: 55,
    views: 300
  },

  // Videos
  {
    id: 'hackathon-highlights-2024',
    title: 'Hackathon Highlights 2024',
    description: '24-hour hackathon recap showcasing amazing projects and winner announcements',
    date: '2024-03-15',
    category: 'hackathon',
    type: 'video',
    url: '#', // Video URL would go here
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '5:32',
    eventId: 'spring-hackathon-2024',
    tags: ['hackathon', 'highlights', 'winners'],
    featured: true,
    likes: 67,
    views: 450
  },
  {
    id: 'club-introduction-video',
    title: 'Welcome to Fibonacci Club',
    description: 'Introduction to our club - what we do, why we do it, and how to get involved',
    date: '2024-01-01',
    category: 'promo',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '3:45',
    tags: ['introduction', 'welcome', 'club overview'],
    featured: true,
    likes: 89,
    views: 520
  },
  {
    id: 'alumni-success-stories',
    title: 'Alumni Success Stories',
    description: 'Former members share their journey from club participation to career success',
    date: '2023-12-15',
    category: 'testimonial',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '8:20',
    tags: ['alumni', 'success stories', 'testimonials'],
    likes: 43,
    views: 280
  },
  {
    id: 'workshop-series-overview',
    title: 'Workshop Series Overview',
    description: 'Compilation of our educational workshops covering AI, web development, and more',
    date: '2023-11-30',
    category: 'workshop',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '6:15',
    tags: ['workshops', 'education', 'learning'],
    likes: 34,
    views: 210
  }
];

// Helper functions for gallery management
export const getPhotosByCategory = (category: string): MediaItem[] => {
  if (category === 'all') return galleryData.filter(item => item.type === 'photo');
  return galleryData.filter(item => item.type === 'photo' && item.category === category);
};

export const getVideosByCategory = (category: string): MediaItem[] => {
  if (category === 'all') return galleryData.filter(item => item.type === 'video');
  return galleryData.filter(item => item.type === 'video' && item.category === category);
};

export const getMediaByCategory = (category: string): MediaItem[] => {
  if (category === 'all') return galleryData;
  return galleryData.filter(item => item.category === category);
};

export const getFeaturedMedia = (): MediaItem[] => {
  return galleryData.filter(item => item.featured === true);
};

export const getMediaById = (id: string): MediaItem | undefined => {
  return galleryData.find(item => item.id === id);
};

export const getMediaByEventId = (eventId: string): MediaItem[] => {
  return galleryData.filter(item => item.eventId === eventId);
};

export const addMediaItem = (item: Omit<MediaItem, 'id'>): MediaItem => {
  const newItem: MediaItem = {
    ...item,
    id: `${item.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
    likes: 0,
    views: 0
  };
  galleryData.push(newItem);
  return newItem;
};

export const updateMediaItem = (id: string, updates: Partial<MediaItem>): MediaItem | null => {
  const index = galleryData.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  galleryData[index] = { ...galleryData[index], ...updates };
  return galleryData[index];
};

export const deleteMediaItem = (id: string): boolean => {
  const index = galleryData.findIndex(item => item.id === id);
  if (index === -1) return false;
  
  galleryData.splice(index, 1);
  return true;
};

export const incrementViews = (id: string): void => {
  const item = galleryData.find(item => item.id === id);
  if (item) {
    item.views = (item.views || 0) + 1;
  }
};

export const toggleLike = (id: string): number => {
  const item = galleryData.find(item => item.id === id);
  if (item) {
    item.likes = (item.likes || 0) + 1;
    return item.likes;
  }
  return 0;
};