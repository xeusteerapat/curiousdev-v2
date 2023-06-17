import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
  avatar: '/avatars.png',
  siteUrl: 'https://curiousdev.in.th',
  siteName: 'Teerapat Prommarak',
  siteDescription:
    'A software engineer who always curiosity and learn new things.',
  siteThumbnail: '/og-image.png',
  nav: [
    { label: 'Posts', href: '/posts' },
    { label: 'About', href: '/about' },
  ],
  social: {
    github: 'https://github.com/xeusteerapat',
    twitter: 'https://twitter.com/xeusteerapat',
    linkedin: 'https://www.linkedin.com/in/teerapat-prommarak',
    email: 'mailto:xeus085@gmail.com',
  },
};
export default siteConfig;
