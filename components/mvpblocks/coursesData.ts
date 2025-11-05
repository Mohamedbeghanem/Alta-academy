export interface DentalCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  price: string;
  date?: string;
  location?: string;
  category: string;
  features?: string[];
}

export const dentalCourses: DentalCourse[] = [
  {
    id: '1',
    title: 'Endodontic Microsurgery',
    description: 'Learn advanced root canal treatment techniques using surgical microscopes...',
    instructor: 'Dr. Sarah Williams',
    duration: '1 Day',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$1,800',
    date: 'Jan 10, 2026',
    location: 'Los Angeles, CA',
    category: 'Endodontics',
  },
  {
    id: '2',
    title: 'Aesthetic Crown Preparation',
    description: 'Perfect your crown preparation skills with live demonstrations on anterior and...',
    instructor: 'Dr. James Rodriguez',
    duration: '3 Days',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,200',
    date: 'Feb 5-7, 2026',
    location: 'Miami, FL',
    category: 'Prosthodontics',
  },
  {
    id: '3',
    title: 'Surgical Periodontics',
    description: 'Advanced periodontal surgery techniques including soft tissue grafting and pocket...',
    instructor: 'Dr. Emily Thompson',
    duration: '2 Days',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,100',
    date: 'Mar 12-13, 2026',
    location: 'Chicago, IL',
    category: 'Periodontics',
  },
  {
    id: '4',
    title: 'Wisdom Teeth Extraction',
    description: 'Comprehensive training on surgical techniques for wisdom teeth extraction.',
    instructor: 'Dr. Robert',
    duration: '1 Day',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=300&auto=format&fit=crop',
    price: '$2,500',
    date: 'Apr 8, 2026',
    location: 'Houston, TX',
    category: 'Oral Surgery',
  },
];
