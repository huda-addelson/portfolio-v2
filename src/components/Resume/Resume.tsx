import { List, Text, Timeline } from '@mantine/core';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { motion } from 'framer-motion';

import { variants } from '@/animations/variants';

import { education, workExperience } from './workExperience';

ChartJS.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
ChartJS.defaults.color = '#708090';

const Resume = () => {
  return (
    <div className='w-screen'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path d='M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,165.3C672,171,768,149,864,122.7C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
      {/* content */}
      <div
        className='-my-px scroll-mt-24 bg-blue-500 text-base-100'
        id='resume'
      >
        <div className='container mx-auto space-y-8 px-2 md:px-12 lg:px-56'>
          {/* title */}
          <motion.div
            variants={variants}
            initial='fromBottom'
            whileInView='toTop'
            viewport={{ once: true }}
            className='flex w-full justify-center text-3xl font-black'
          >
            Resume
          </motion.div>
          <div className='grid grid-cols-1 gap-8'>
            <motion.div
              variants={variants}
              initial='fromBottom'
              whileInView='toTop'
              viewport={{ once: true }}
            >
              <h1 className='mb-4 text-2xl font-bold text-base-100'>
                Work Experience
              </h1>
              <Timeline mt='sm' className='card bg-white p-5 md:p-10'>
                {workExperience.map((each) => (
                  <Timeline.Item
                    title={
                      <Text
                        weight='bold'
                        className='-ml-2 text-base md:ml-0 md:text-xl'
                      >
                        {each.type}
                      </Text>
                    }
                    key={each.type}
                  >
                    <Text className='-ml-2 text-base md:ml-0 md:text-lg'>
                      {each.name}
                    </Text>
                    <List mt={4} className='-ml-2 text-sm md:ml-0 md:text-base'>
                      {each.tasks.map((task, idx) => (
                        <List.Item key={idx}>{task}</List.Item>
                      ))}
                    </List>
                    <Text mt={10}>
                      <div className='-ml-2 mt-10 inline rounded-sm bg-blue-500 p-2 text-xs text-white md:ml-0 md:text-base'>
                        {each.timePeriod}
                      </div>
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </motion.div>
            <motion.div
              variants={variants}
              initial='fromBottom'
              whileInView='toTop'
              viewport={{ once: true }}
            >
              <h1 className='mb-4 text-2xl font-bold text-base-100'>
                Education
              </h1>

              <Timeline mt='sm' className='card bg-white p-5 md:p-10'>
                {education.map((each) => (
                  <Timeline.Item
                    title={
                      <Text
                        weight='bold'
                        className='-ml-2 text-base md:ml-0 md:text-xl'
                      >
                        {each.univ}
                      </Text>
                    }
                    key={each.univ}
                  >
                    <Text className='-ml-2 text-base md:ml-0 md:text-lg'>
                      {each.type}
                    </Text>
                    <Text mt={10}>
                      <div className='-ml-2 mt-10 inline rounded-sm bg-blue-500 p-2 text-xs text-white md:ml-0 md:text-sm'>
                        {each.timePeriod}
                      </div>
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
              {/* Coming Soon */}
              {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <Card
                  title='Vocational High School'
                  location='SMKN 7 Baleendah'
                  jurusan='Software Engineering'
                  time='2017 - 2020'
                >
                  <div className='min-h-[200px] text-base-content'>
                    <Chart
                      type='line'
                      ref={chartSMKref}
                      data={{
                        labels: ['1', '2', '3', '4', '5', '6'],
                        datasets: [
                          {
                            ...SMKDataSets,
                            label: 'Grade Point',
                            data: nilaiSemester,
                            pointHitRadius: 10,
                          },
                        ],
                      }}
                      options={chartSMKOptions}
                    />
                  </div>
                </Card>
                <Card
                  title='University'
                  location='Universitas Bale Bandung'
                  jurusan='Computer Science'
                  time='2020 - Now'
                >
                  <div className='min-h-[200px] text-base-content'>
                    <Chart
                      type='line'
                      ref={chartKuliahref}
                      data={{
                        labels: createSemesterArray(ips.length),
                        datasets: [
                          {
                            ...kuliahDataSets,
                            label: 'Grade Point',
                            data: ips,
                            pointHitRadius: 10,
                          },
                        ],
                      }}
                      options={chartKuliahOptions}
                    />
                  </div>
                </Card>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
      {/* ======== */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='fill-blue-500'
      >
        <path d='M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
      </svg>
    </div>
  );
};

export default Resume;
