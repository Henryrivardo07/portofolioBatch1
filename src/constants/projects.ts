import project1 from '@/assets/project1.png';
import Project2 from '@/assets/project2.png';
import Project3 from '@/assets/project3.png';
import Project4 from '@/assets/project4.png';
import Project5 from '@/assets/project5.png';
import Project6 from '@/assets/project6.png';

type Project = {
  title: string;
  techStack: string[];
  description: string;
  buttonLink: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
    buttonLink: 'Visit',
    image: project1,
  },
  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'Private hospital in the city of Padang that provides special surgical services.',
    buttonLink: 'Visit',
    image: Project2,
  },
  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    buttonLink: 'Visit',
    image: Project3,
  },

  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)  of experience as an internet solution provider company',
    buttonLink: 'Visit',
    image: Project4,
  },
  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    buttonLink: 'Visit',
    image: Project5,
  },
  {
    title: 'Landing Page',
    techStack: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    buttonLink: 'Visit',
    image: Project6,
  },
];
