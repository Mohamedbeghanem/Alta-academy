export interface LiveSurgerySession {
  id: string;
  title: string;
  description: string;
  surgeon: string;
  duration: string;
  imageUrl: string;
  price: string;
  date?: string;
  location?: string;
  category: string;
  procedureType?: string;
  maxAttendees?: number;
  ceCreditHours?: number;
  includedInPrice?: string[];
}

export const liveSurgerySessions: LiveSurgerySession[] = [
  {
    id: '1',
    title: 'Live Surgery Session 1',
    description: 'Live surgery session description goes here. This is placeholder text that you can replace with your actual session details.',
    surgeon: 'Dr Samir Hamimed,Dr Chaouki Selmania,Dr Samir Amarouche',
    duration: '2 Days', 
    imageUrl: '/livesurgery01.jpeg',
    price: '$0',
    date: '04-05/12/2025',
    location: 'Implantaly Dental Clinic by Hs',
    category: 'Implant Placement',
    procedureType: 'Full Arch Restoration',
    maxAttendees: 10,
    ceCreditHours: 16,
    includedInPrice: ['Observation Access', 'Course Materials', 'Certificate'],
  },
  {
    id: '2',
    title: 'Live Surgery Session 2',
    description: 'Live surgery session description goes here. This is placeholder text that you can replace with your actual session details.',
    surgeon: 'Surgeon Name',
    duration: '3 Hours',
    imageUrl: '/placeholder.png',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Bone Grafting',
    procedureType: 'Sinus Lift Procedure',
    maxAttendees: 12,
    ceCreditHours: 3,
    includedInPrice: ['Observation Access', 'Course Materials', 'Certificate'],
  },
  {
    id: '3',
    title: 'Live Surgery Session 3',
    description: 'Live surgery session description goes here. This is placeholder text that you can replace with your actual session details.',
    surgeon: 'Surgeon Name',
    duration: '2 Hours',
    imageUrl: '/placeholder.png',
    price: '$0',
    date: 'TBD',
    location: 'Location TBD',
    category: 'Soft Tissue Management',
    procedureType: 'Gingival Grafting',
    maxAttendees: 15,
    ceCreditHours: 2,
    includedInPrice: ['Observation Access', 'Course Materials', 'Certificate'],
  },
];