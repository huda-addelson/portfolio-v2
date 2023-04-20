import axios from 'axios';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { variants } from '@/animations/variants';
import { trackEvent } from '@/lib/analytics/trackEvent';

import { errorHandling } from './errorHandling';
import InputForm from './InputForm';
import TextArea from './TextArea';
import emailjs from '@emailjs/browser';

const Form = () => {
  // const [name, setName] = useState<string>();
  // const [email, setEmail] = useState<string>();
  // const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef<any>();

  // Send using API
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const result = await axios
  //     .post(process.env.NEXT_PUBLIC_MESSAGE_FORM_API + '/message', {
  //       name,
  //       email,
  //       message,
  //     })
  //     .catch((err) => errorHandling(err));
  //   setIsLoading(false);
  //   if (!result) return;

  //   toast.success('Message has been sent, thank you for reaching me out');
  //   trackEvent('send-message', 'form');
  //   form.current!.reset();
  // };

  // Send using react email JS

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nu3pyic',
        'template_fu1l0na',
        form.current,
        'o6uad8JIRLp21SZNI'
      )
      .then(
        (result) => {
          toast.success('Message has been sent, thank you for reaching me out');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      variants={variants}
      initial='fromBottom'
      whileInView='toTop'
      viewport={{ once: true }}
      className='w-full'
    >
      <form
        className='flex w-full flex-col space-y-4'
        onSubmit={(e) => sendEmail(e)}
        ref={form}
      >
        <div className='flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <div className='w-full md:w-3/6'>
            <InputForm
              label='Name'
              name='name'
              placeholder='Your name'
              onChange={() => ''}
            />
          </div>
          <div className='w-full md:w-3/6'>
            <InputForm
              label='Email'
              name='email'
              type='email'
              placeholder='Your email'
              onChange={() => ''}
            />
          </div>
        </div>
        <div className='w-full'>
          <TextArea
            label='Message'
            name='message'
            placeholder="Assalamu'alaikum..."
            onChange={() => ''}
          />
        </div>
        <div className='w-full'>
          <button
            type='submit'
            className={`btn w-full md:w-fit ${
              isLoading && 'loading pointer-events-none opacity-50'
            } no-animation transition-all duration-500`}
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
