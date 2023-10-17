import Image from 'next/image';
import logo from '@/public/logo.svg';
import { Button } from '../ui/button';
import MobileMenu from './mobile-menu';
import Link from 'next/link';

const menus = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Traits',
    href: '#',
  },
  {
    name: 'Roadmap',
    href: '#',
  },
  {
    name: 'Utility',
    href: '#',
  },
  {
    name: 'Team',
    href: '#',
  },
  {
    name: 'FAQ',
    href: '#',
  },
  {
    name: 'W3',
    href: '#',
  },
];

const Navbar = () => {
  return (
    <nav className='relative h-[72px] p-[27px] md:h-[100px] bg-[#3C3C3B] px-[27px] md:px-[130px]'>
      <Image
        src={logo}
        alt='logo'
        className='w-[84px] h-[84px] lg:w-[127px] lg:h-[127px] object-contain absolute top-6'
      />
      <div className='flex items-center justify-end md:gap-[41px]'>
        <ul className='hidden lg:flex text-sm font-medium gap-6 text-white'>
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <Button size='lg' className='hidden lg:block rounded-[42px]'>
          Mind Your Socket
        </Button>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
