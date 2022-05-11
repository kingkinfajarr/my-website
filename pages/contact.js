import Head from 'next/head';
import Link from 'next/link';
import { 
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaEnvelope
  
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center md:px-40 px-4">
      <Head>
        <title>Contact | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col '>
        <h1 className="text-2xl font-bold text-center md:mt-20">My Contacts</h1>
        <p className='my-8 text-left'>You can reach me via socials below :</p>
        <a href="mailto:kingkinnfajar@gmail.com" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-red-600 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaEnvelope className='w-4 h-4 mr-2' />
              Email
            </p>
        </a>
        <a href="https://t.me/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-blue-500 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaTelegramPlane className='w-4 h-4 mr-2' />
              Telegram
            </p>
        </a>
        <a href="https://github.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-black rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaGithub className='w-4 h-4 mr-2' />
              Github
            </p>
        </a>
        <a href="https://www.linkedin.com/in/kingkinfajarr/" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-sky-500 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaLinkedin className='w-4 h-4 mr-2' />
              LinkedIn
            </p>
        </a>
        <a href="https://instagram.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-pink-600 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaInstagram className='w-4 h-4 mr-2' />
              Instagram
            </p>
        </a>
        <a href="https://twitter.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-sky-400 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaTwitter className='w-4 h-4 mr-2' />
              Twitter
            </p>
        </a>
      </main>
    </div>
  );
};

export default Contact;
