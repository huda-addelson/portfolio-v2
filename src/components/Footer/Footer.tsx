import Link from 'next/link';

import { handleDrawer } from '@/lib/scroll-to-section/scroll-to-section';

import { menu } from '../Layout/data';
import socialMedia from '../SocialMediaIcons/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-screen bg-slate-800'>
      <div className='container mx-auto px-6 md:px-12 lg:px-56'>
        <div className='grid grid-cols-1 gap-6 pb-3 pt-12 text-slate-200 md:grid-cols-4'>
          <div className='space-y-1'>
            <p className='text-lg font-bold underline decoration-wavy decoration-1 underline-offset-2'>
              Quick links
            </p>
            {menu.map((value) => {
              return (
                <p
                  className='w-fit cursor-pointer text-slate-400'
                  key={value.title}
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </p>
              );
            })}
          </div>
          <div className='space-y-1'>
            <p className='text-lg font-bold underline decoration-wavy decoration-1 underline-offset-2'>
              Reach me out on
            </p>
            {socialMedia.map((value) => {
              return (
                <Link
                  href={value.link}
                  key={value.title}
                  className='block w-fit text-slate-400'
                  target='_blank'
                >
                  {value.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='divider before:bg-slate-300/10 after:bg-slate-300/10'></div>
        <div className='mb-6 mt-2 flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0'>
          <p className='text-xs font-semibold text-slate-400'>
            © {currentYear} M Khoirul Huda • All Rights Reserved
          </p>
          {/* Coming Soon */}
          {/* <Visitors /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
