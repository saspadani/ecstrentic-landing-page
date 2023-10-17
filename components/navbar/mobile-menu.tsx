import { AlignJustify } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import Image from 'next/image';
import mintLogo from '@/public/mintinOn.svg';

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

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='lg:hidden text-white'>
        <AlignJustify />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='lg:hidden h-screen w-screen rounded-none bg-[#3C3C3B] border-none'>
        <DropdownMenuGroup className='flex flex-col gap-6 text-white text-base font-medium'>
          {menus.map((menu) => (
            <DropdownMenuItem key={menu.name}>
              <Link className='mx-auto' href={menu.href}>
                {menu.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuGroup className='mt-4'>
          <DropdownMenuItem className='focus:bg-[#3C3C3B]'>
            <Button size='lg' className='mx-auto w-[300px] rounded-3xl'>
              Mint Lucky Edition
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className='focus:bg-[#3C3C3B]'>
            <Button
              size='lg'
              variant='outline'
              className='mx-auto w-[300px] rounded-3xl'
            >
              Buy OG Edition
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className='focus:bg-[#3C3C3B]'>
            <Button
              size='lg'
              variant='outline'
              className='mx-auto w-[300px] rounded-3xl'
            >
              Buy Early Edition
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup className='flex flex-col gap-1 mt-8'>
          <DropdownMenuItem className='focus:bg-[#3C3C3B] mx-auto'>
            <p>We are exclusively minting on</p>
          </DropdownMenuItem>
          <DropdownMenuItem className='mx-auto'>
            <Image src={mintLogo} alt='mintinOn' width={152} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
