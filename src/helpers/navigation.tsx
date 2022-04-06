import { ReactComponent as HomeSvg } from 'assets/home.svg';
import { ReactComponent as ProfileSvg } from 'assets/profile.svg';
import { ReactComponent as ExperienceSvg } from 'assets/experience.svg';
import { ReactComponent as PossibilitiesSvg } from 'assets/possibilities.svg';
import { ReactComponent as ContactSvg } from 'assets/contact.svg';

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
