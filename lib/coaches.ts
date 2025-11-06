export interface Coach {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  location?: string;
  experience?: string;
  credentials?: string[];
  languages?: string[];
  socialLinks?: { 
    platform: 'linkedin' | 'twitter' | 'instagram' | 'website'; 
    url: string 
  }[];
  availability?: 'Available' | 'Limited' | 'Booked';
  rating?: number;
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Coach Name 1',
    title: 'Senior Dental Coach',
    specialty: 'Implantology & Prosthodontics',
    bio: 'Coach biography goes here. This is placeholder text that you can replace with actual coach details and their professional background.',
    imageUrl: '/placeholder.png',
    location: 'Location TBD',
    experience: '15+ Years',
    credentials: ['DDS', 'Board Certified', 'Fellowship in Implantology'],
    languages: ['English', 'French', 'Arabic'],
    socialLinks: [
      { platform: 'linkedin', url: '#' },
      { platform: 'website', url: '#' },
    ],
    availability: 'Available',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Coach Name 2',
    title: 'Clinical Coach',
    specialty: 'Endodontics & Restorative Dentistry',
    bio: 'Coach biography goes here. This is placeholder text that you can replace with actual coach details and their professional background.',
    imageUrl: '/placeholder.png',
    location: 'Location TBD',
    experience: '10+ Years',
    credentials: ['DDS', 'Endodontic Specialist', 'Clinical Instructor'],
    languages: ['English', 'Spanish'],
    socialLinks: [
      { platform: 'linkedin', url: '#' },
      { platform: 'instagram', url: '#' },
    ],
    availability: 'Limited',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Coach Name 3',
    title: 'Practice Management Coach',
    specialty: 'Business Development & Team Training',
    bio: 'Coach biography goes here. This is placeholder text that you can replace with actual coach details and their professional background.',
    imageUrl: '/placeholder.png',
    location: 'Location TBD',
    experience: '20+ Years',
    credentials: ['MBA', 'Dental Practice Consultant', 'Leadership Coach'],
    languages: ['English', 'German'],
    socialLinks: [
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'website', url: '#' },
    ],
    availability: 'Available',
    rating: 5.0,
  },
];