export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'hackathon' | 'workshop' | 'competition' | 'talk' | 'showcase' | 'social' | 'fest';
  status: 'upcoming' | 'ongoing' | 'completed';
  attendees?: number;
  maxAttendees?: number;
  poster: string;
  registrationOpen?: boolean;
  registrationLink?: string;
  resources?: {
    slides?: string;
    code?: string;
    recording?: string;
    videos?: string;
    photos?: string;
    guide?: string;
  };
  tags?: string[];
  organizer?: string;
  featured?: boolean;
}

export const eventsData: Event[] = [
  {
    id: 'spring-hackathon-2024',
    title: 'Spring Hackathon 2024',
    date: '2024-03-15',
    time: '9:00 AM - 11:59 PM',
    location: 'Engineering Building, Hall A',
    description: 'Join us for our biggest hackathon of the year! Build innovative solutions in 24 hours with themes focusing on AI, sustainability, and social impact.',
    category: 'hackathon',
    status: 'upcoming',
    attendees: 120,
    maxAttendees: 150,
    poster: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationOpen: true,
    registrationLink: '#',
    tags: ['AI', 'Sustainability', 'Innovation'],
    organizer: 'Fibonacci Club',
    featured: true
  },
  {
    id: 'ai-ml-workshop-series-1',
    title: 'AI/ML Workshop Series - Part 1',
    date: '2024-04-05',
    time: '2:00 PM - 5:00 PM',
    location: 'CS Lab 201',
    description: 'Introduction to Machine Learning algorithms and practical implementation using Python and scikit-learn.',
    category: 'workshop',
    status: 'upcoming',
    attendees: 45,
    maxAttendees: 50,
    poster: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationOpen: true,
    registrationLink: '#',
    tags: ['Machine Learning', 'Python', 'Beginner'],
    organizer: 'Maya Singh'
  },
  {
    id: 'industry-talk-future-tech',
    title: 'Industry Talk: Future of Technology',
    date: '2024-04-18',
    time: '6:00 PM - 8:00 PM',
    location: 'Main Auditorium',
    description: 'Guest speaker from Google discussing emerging technologies, career opportunities, and the future of software development.',
    category: 'talk',
    status: 'upcoming',
    attendees: 200,
    maxAttendees: 300,
    poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationOpen: true,
    registrationLink: '#',
    tags: ['Career', 'Industry', 'Technology Trends'],
    organizer: 'Priya Sharma',
    featured: true
  },
  {
    id: 'competitive-programming-contest',
    title: 'Competitive Programming Contest',
    date: '2024-04-25',
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Center',
    description: 'Test your algorithmic skills in our monthly programming competition with prizes for top performers.',
    category: 'competition',
    status: 'upcoming',
    attendees: 75,
    maxAttendees: 100,
    poster: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationOpen: true,
    registrationLink: '#',
    tags: ['Algorithms', 'Competition', 'Problem Solving'],
    organizer: 'Ryan Thompson'
  },
  {
    id: 'winter-code-camp-2024',
    title: 'Winter Code Camp 2024',
    date: '2024-02-10',
    time: '9:00 AM - 6:00 PM',
    location: 'Engineering Building',
    description: 'Intensive coding bootcamp covering full-stack development with React, Node.js, and MongoDB.',
    category: 'workshop',
    status: 'completed',
    attendees: 80,
    maxAttendees: 80,
    poster: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    resources: {
      slides: '#',
      code: '#',
      recording: '#'
    },
    tags: ['Full Stack', 'React', 'Node.js'],
    organizer: 'Alex Zhang'
  },
  {
    id: 'robotics-demo-day',
    title: 'Robotics Demo Day',
    date: '2024-01-20',
    time: '1:00 PM - 5:00 PM',
    location: 'Robotics Lab',
    description: 'Showcase of student robotics projects and live demonstrations of autonomous systems.',
    category: 'showcase',
    status: 'completed',
    attendees: 150,
    maxAttendees: 150,
    poster: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    resources: {
      slides: '#',
      videos: '#',
      photos: '#'
    },
    tags: ['Robotics', 'Automation', 'Demo'],
    organizer: 'Zoe Martinez'
  },
  {
    id: 'open-source-contribution-workshop',
    title: 'Open Source Contribution Workshop',
    date: '2024-01-15',
    time: '3:00 PM - 6:00 PM',
    location: 'CS Lab 105',
    description: 'Learn how to contribute to open source projects, understand Git workflows, and build your developer portfolio.',
    category: 'workshop',
    status: 'completed',
    attendees: 35,
    maxAttendees: 40,
    poster: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    resources: {
      slides: '#',
      code: '#',
      guide: '#'
    },
    tags: ['Open Source', 'Git', 'Portfolio'],
    organizer: 'Ryan Thompson'
  }
];

// Helper functions for event management
export const getUpcomingEvents = (): Event[] => {
  return eventsData.filter(event => event.status === 'upcoming');
};

export const getPastEvents = (): Event[] => {
  return eventsData.filter(event => event.status === 'completed');
};

export const getFeaturedEvents = (): Event[] => {
  return eventsData.filter(event => event.featured === true);
};

export const getEventsByCategory = (category: string): Event[] => {
  if (category === 'all') return eventsData;
  return eventsData.filter(event => event.category === category);
};

export const getEventById = (id: string): Event | undefined => {
  return eventsData.find(event => event.id === id);
};

export const addEvent = (event: Omit<Event, 'id'>): Event => {
  const newEvent: Event = {
    ...event,
    id: `${event.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
  };
  eventsData.push(newEvent);
  return newEvent;
};

export const updateEvent = (id: string, updates: Partial<Event>): Event | null => {
  const index = eventsData.findIndex(event => event.id === id);
  if (index === -1) return null;
  
  eventsData[index] = { ...eventsData[index], ...updates };
  return eventsData[index];
};

export const deleteEvent = (id: string): boolean => {
  const index = eventsData.findIndex(event => event.id === id);
  if (index === -1) return false;
  
  eventsData.splice(index, 1);
  return true;
};