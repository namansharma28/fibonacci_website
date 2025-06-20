export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  portfolio?: string;
  year?: string;
  department?: string;
  skills?: string[];
  achievements?: string[];
  currentRole?: string; // For alumni
  company?: string; // For alumni
  graduationYear?: string; // For alumni
  type: 'core' | 'volunteer' | 'alumni' | 'advisor';
  active: boolean;
  joinDate?: string;
  featured?: boolean;
}

export const teamData: TeamMember[] = [
  // Core Team
  {
    id: 'arjun-patel',
    name: 'Arjun Patel',
    role: 'President',
    bio: 'CS Senior specializing in AI/ML. Led 15+ successful projects and organized national hackathons. Passionate about building inclusive tech communities.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'arjun@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Senior',
    department: 'Computer Science',
    skills: ['Python', 'Machine Learning', 'Leadership', 'Event Management'],
    achievements: ['National Hackathon Winner 2023', 'Google Summer of Code 2023'],
    type: 'core',
    active: true,
    joinDate: '2022-09-01',
    featured: true
  },
  {
    id: 'maya-singh',
    name: 'Maya Singh',
    role: 'Vice President',
    bio: 'Data Science enthusiast with expertise in machine learning and statistical analysis. Leads our AI workshop series.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'maya@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Junior',
    department: 'Data Science',
    skills: ['R', 'Python', 'Statistics', 'Data Visualization'],
    achievements: ['Best Data Science Project 2023', 'Kaggle Competition Winner'],
    type: 'core',
    active: true,
    joinDate: '2022-09-01',
    featured: true
  },
  {
    id: 'ryan-thompson',
    name: 'Ryan Thompson',
    role: 'Technical Lead',
    bio: 'Full-stack developer passionate about web technologies and open-source contributions. Maintains our club\'s technical infrastructure.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'ryan@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Senior',
    department: 'Computer Science',
    skills: ['React', 'Node.js', 'DevOps', 'Open Source'],
    achievements: ['Major Open Source Contributor', 'Internship at Meta'],
    type: 'core',
    active: true,
    joinDate: '2021-09-01',
    featured: true
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Events Coordinator',
    bio: 'Event management expert who has organized 20+ workshops and tech talks. Connects students with industry professionals.',
    image: 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'priya@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Junior',
    department: 'Computer Science',
    skills: ['Event Management', 'Public Speaking', 'Networking', 'Marketing'],
    achievements: ['Organized 20+ Events', 'Industry Partnership Lead'],
    type: 'core',
    active: true,
    joinDate: '2022-01-15'
  },
  {
    id: 'alex-zhang',
    name: 'Alex Zhang',
    role: 'Community Manager',
    bio: 'Building bridges between students and industry professionals through networking and mentorship programs.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'alex@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Sophomore',
    department: 'Information Systems',
    skills: ['Community Building', 'Social Media', 'Content Creation', 'Mentorship'],
    achievements: ['Grew Discord Community to 250+ members', 'Mentorship Program Lead'],
    type: 'core',
    active: true,
    joinDate: '2023-09-01'
  },
  {
    id: 'zoe-martinez',
    name: 'Zoe Martinez',
    role: 'Design Lead',
    bio: 'UI/UX designer creating beautiful and functional digital experiences. Leads our design workshops and visual identity.',
    image: 'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'zoe@fibonacci.club',
    github: '#',
    linkedin: '#',
    year: 'Junior',
    department: 'Design',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
    achievements: ['Club Website Redesign', 'Design Workshop Series'],
    type: 'core',
    active: true,
    joinDate: '2022-02-01'
  },

  // Volunteers
  {
    id: 'sam-wilson',
    name: 'Sam Wilson',
    role: 'Workshop Assistant',
    image: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 'Junior',
    department: 'Computer Science',
    skills: ['Python', 'Teaching', 'Technical Support'],
    type: 'volunteer',
    active: true,
    joinDate: '2023-09-01'
  },
  {
    id: 'emma-davis',
    name: 'Emma Davis',
    role: 'Social Media Manager',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 'Sophomore',
    department: 'Marketing',
    skills: ['Social Media', 'Content Creation', 'Photography'],
    type: 'volunteer',
    active: true,
    joinDate: '2023-09-01'
  },
  {
    id: 'kevin-lee',
    name: 'Kevin Lee',
    role: 'Tech Support',
    image: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 'Junior',
    department: 'Information Technology',
    skills: ['System Administration', 'Networking', 'Troubleshooting'],
    type: 'volunteer',
    active: true,
    joinDate: '2023-02-01'
  },
  {
    id: 'sophia-brown',
    name: 'Sophia Brown',
    role: 'Content Creator',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: 'Sophomore',
    department: 'Communications',
    skills: ['Writing', 'Video Editing', 'Storytelling'],
    type: 'volunteer',
    active: true,
    joinDate: '2023-09-01'
  },

  // Alumni
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Former President',
    currentRole: 'Software Engineer',
    company: 'Google',
    graduationYear: '2023',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
    skills: ['Software Engineering', 'Leadership', 'System Design'],
    achievements: ['Led club to national recognition', 'Google Software Engineer'],
    type: 'alumni',
    active: false,
    joinDate: '2019-09-01',
    featured: true
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Former Technical Lead',
    currentRole: 'ML Engineer',
    company: 'Meta',
    graduationYear: '2022',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
    skills: ['Machine Learning', 'Python', 'Deep Learning'],
    achievements: ['Published ML research', 'Meta ML Engineer'],
    type: 'alumni',
    active: false,
    joinDate: '2018-09-01',
    featured: true
  },
  {
    id: 'michael-park',
    name: 'Michael Park',
    role: 'Former VP',
    currentRole: 'Startup Founder',
    company: 'TechStart Inc.',
    graduationYear: '2023',
    image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
    skills: ['Entrepreneurship', 'Product Management', 'Leadership'],
    achievements: ['Founded successful startup', 'Raised $2M in funding'],
    type: 'alumni',
    active: false,
    joinDate: '2019-09-01'
  },
  {
    id: 'lisa-wang',
    name: 'Lisa Wang',
    role: 'Former Events Coordinator',
    currentRole: 'Product Manager',
    company: 'Microsoft',
    graduationYear: '2022',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
    skills: ['Product Management', 'Event Planning', 'Strategy'],
    achievements: ['Microsoft Product Manager', 'Event Excellence Award'],
    type: 'alumni',
    active: false,
    joinDate: '2018-09-01'
  },

  // Faculty Advisor
  {
    id: 'emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    role: 'Faculty Advisor',
    bio: 'Professor of Computer Science with expertise in algorithms and mathematical computing. Passionate about fostering innovation in students.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'emily.rodriguez@university.edu',
    department: 'Computer Science',
    skills: ['Algorithms', 'Mathematical Computing', 'Research', 'Mentorship'],
    achievements: ['Published 50+ research papers', 'NSF Grant Recipient'],
    type: 'advisor',
    active: true,
    joinDate: '2019-01-01',
    featured: true
  }
];

// Helper functions for team management
export const getCoreTeam = (): TeamMember[] => {
  return teamData.filter(member => member.type === 'core' && member.active);
};

export const getVolunteers = (): TeamMember[] => {
  return teamData.filter(member => member.type === 'volunteer' && member.active);
};

export const getAlumni = (): TeamMember[] => {
  return teamData.filter(member => member.type === 'alumni');
};

export const getAdvisors = (): TeamMember[] => {
  return teamData.filter(member => member.type === 'advisor' && member.active);
};

export const getFeaturedMembers = (): TeamMember[] => {
  return teamData.filter(member => member.featured === true);
};

export const getMemberById = (id: string): TeamMember | undefined => {
  return teamData.find(member => member.id === id);
};

export const getMembersByType = (type: TeamMember['type']): TeamMember[] => {
  return teamData.filter(member => member.type === type);
};

export const addTeamMember = (member: Omit<TeamMember, 'id'>): TeamMember => {
  const newMember: TeamMember = {
    ...member,
    id: `${member.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
  };
  teamData.push(newMember);
  return newMember;
};

export const updateTeamMember = (id: string, updates: Partial<TeamMember>): TeamMember | null => {
  const index = teamData.findIndex(member => member.id === id);
  if (index === -1) return null;
  
  teamData[index] = { ...teamData[index], ...updates };
  return teamData[index];
};

export const deleteTeamMember = (id: string): boolean => {
  const index = teamData.findIndex(member => member.id === id);
  if (index === -1) return false;
  
  teamData.splice(index, 1);
  return true;
};