import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { variants } from '@/animations/variants';

import { about } from './data';
import GradientText from '../GradientText';

const About = () => {
  return (
    <div className='mt-2 w-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 200'
        className='fill-blue-500'
      >
        <path
          fillOpacity='1'
          d='M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,58.7C672,43,768,53,864,74.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      {/* content */}
      <div className=' scroll-mt-24 bg-blue-500 text-base-100' id='about'>
        <div className='container mx-auto space-y-10 px-6 md:px-6 lg:px-10'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='fromBottom'
            whileInView='toTop'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            About
          </motion.div>
          <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-5'>
            <div className='flex items-center justify-center lg:col-span-2'>
              <motion.div
                variants={variants}
                initial='fromBottom'
                whileInView='toTop'
                viewport={{ once: true }}
                className='avatar relative flex w-2/5 cursor-pointer items-center justify-center md:w-3/5'
              >
                <div className='group z-10 aspect-square h-fit w-full rounded-md border-2 border-blue-900 bg-white p-2 md:p-4'>
                  <Image
                    src='/profile-web.jpg'
                    width={500}
                    height={500}
                    className='object-top transition-all duration-500 ease-in-out  group-hover:translate-x-0.5 group-hover:scale-125 md:group-hover:translate-x-2 '
                    alt='about'
                  />
                </div>
                <div className='absolute -right-2 top-2 h-full w-full rounded-md bg-blue-900 md:-right-3 md:top-3 md:rounded-lg'></div>
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              initial='fromBottom'
              whileInView='toTop'
              viewport={{ once: true }}
              className='flex flex-col justify-start space-y-4 text-justify text-sm font-medium md:text-xl lg:col-span-3'
            >
              <h2 className='text-xl md:text-3xl'>
                Hello everyone <span className='wave'>👋🏼</span>
              </h2>
              <p>
                My name is{' '}
                <GradientText
                  from='bg-[#F45050]'
                  to='bg-[#F9D949]'
                  style='inline font-bold'
                >
                  Muhammad Khoirul Huda
                </GradientText>
                . I am a Front End Developer. Software Engineer Enthusiast. My
                passion in programming is very high, I like to learn about new
                technologies. I have 1+ years of experience in the field of
                front end developer . I have experience and familiarity with
                HTML, CSS, JavaScript and frameworks for building web
                applications such as React JS, Next JS, Express, Node JS. I
                honed my skills by working on projects and taking online
                courses. I am ready to accept job offers remotely or onsite.
              </p>
              {about.description.map((value, i) => (
                <span key={i}>
                  <p>{value}</p>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* ======== */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 300'
        className='fill-blue-500 [clipRule:evenodd] [fillRule:evenodd] [strokeLinejoin:round] [strokeMiterlimit:1.41421]'
      >
        <path d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
      </svg>
    </div>
  );
};

export default About;
