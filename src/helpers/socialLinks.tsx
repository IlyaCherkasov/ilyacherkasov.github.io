import { ReactComponent as GithubSvg } from 'assets/github.svg';
import { ReactComponent as LinkedinSvg } from 'assets/linkedin.svg';
import { ReactComponent as TelegramSvg } from 'assets/telegram.svg';

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
