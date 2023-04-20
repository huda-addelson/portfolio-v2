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
          {/* Coming Soon */}
          {/* <div className='space-y-4 mb-4 md:mb-0 md:col-span-2 md:mr-10 lg:mr-24'>
            <div className='space-y-1 '>
              <p className='font-bold text-3xl font-mono tracking-tight'>
                ./tfkhdyt
              </p>
              <p className='font-light text-sm text-slate-400'>
                Junior Full Stack TypeScript Developer
              </p>
            </div>
            <div className='w-full space-x-2 flex'>
              <Link href='https://saweria.co/tfkhdyt'      className='relative inline-block px-4 py-4 overflow-hidden border border-green-600 group focus:outline-none focus:ring ring-green-700 w-3/6 rounded-md'
                  target='_blank' >
              
                  <span className='absolute inset-y-0 -left-2 w-[2px] transition-all bg-green-600 group-hover:w-full group-active:bg-green-500 group-hover:left-0'></span>

                  <span className='relative text-sm font-bold text-green-600 transition-colors group-hover:text-white flex justify-center items-center space-x-2'>
                    <Money />
                    <p>Donate</p>
                  </span>

              </Link>
              <Link href='https://umami.tfkhdyt.my.id/share/lVnSHTAu/Portfolio%20Website' className='relative inline-block px-4 py-4 overflow-hidden border border-yellow-500 group focus:outline-none focus:ring ring-yellow-600 w-3/6 rounded-md'
                  target='_blank'>
            
                  <span className='absolute inset-y-0 -left-2 w-[2px] transition-all bg-yellow-500 group-hover:w-full group-active:bg-yellow-400 group-hover:left-0'></span>

                  <span className='relative text-sm font-bold text-yellow-500 transition-colors group-hover:text-white flex justify-center items-center space-x-2'>
                    <Chart />
                    <p>Analytics</p>
                  </span>
              </Link>
            </div>
          </div> */}
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
