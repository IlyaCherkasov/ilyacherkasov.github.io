import ContactSvg from 'assets/contact.svg?react';
import ExperienceSvg from 'assets/experience.svg?react';
import HomeSvg from 'assets/home.svg?react';
import PossibilitiesSvg from 'assets/possibilities.svg?react';
import ProfileSvg from 'assets/profile.svg?react';

const navigation = [
  {
    name: '',
    icon: <HomeSvg />,
    title: 'Home',
  },
  {
    name: 'about',
    icon: <ProfileSvg />,
    title: 'About',
  },
  {
    name: 'experience',
    icon: <ExperienceSvg />,
    title: 'Experience',
    additional: 'companies',
  },
  {
    name: 'possibilities',
    icon: <PossibilitiesSvg />,
    title: 'Possibilities',
    additional: 'portfolio',
  },
  {
    name: 'contact',
    icon: <ContactSvg />,
    title: 'Contact',
  },
];

export default navigation;
