import { useSelector } from 'react-redux';

import useScroll from '@/hooks/useScroll';
import { handleDrawer } from '@/lib/scroll-to-section/scroll-to-section';
import { RootState } from '@/redux/store';

import { Rocket } from './Rocket';

export function BackToTop() {
  const scrollY = useScroll();
  const isMenuOpened = useSelector(
    (state: RootState) => state.menu.isMenuOpened
  );

  return (
    <div className='fixed bottom-8 right-8 lg:right-12'>
      <button
        className={`inline-block rounded-full border border-blue-500 bg-base-100 p-3 text-blue-500 transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:bg-blue-400 
        ${
          scrollY >= 100 && !isMenuOpened
            ? 'opacity-1'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => handleDrawer('#hero')}
      >
        <span className='sr-only'> Back to top </span>
        <Rocket />
      </button>
    </div>
  );
}
