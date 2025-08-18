import GithubSvg from 'assets/github.svg?react';
import LinkedinSvg from 'assets/linkedin.svg?react';
import TelegramSvg from 'assets/telegram.svg?react';

const socialLinks = [
  {
    label: 'telegram',
    url: 'https://t.me/cherkasik',
    icon: <TelegramSvg />,
  },
  {
    label: 'linkedin',
    url: 'https://linkedin.com/in/cherkasik',
    icon: <LinkedinSvg />,
  },
  {
    label: 'github',
    url: 'https://github.com/IlyaCherkasov',
    icon: <GithubSvg />,
  },
];

export default socialLinks;
