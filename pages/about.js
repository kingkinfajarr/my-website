import Head from 'next/head';
import { 
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import getAge from '../utils/getAge';
import {NextSeo} from 'next-seo';

const About = () => {
  return (
    <>
    <NextSeo
      title='Kingkin Fajar'
      titleTemplate="Kingkin Fajar"
        defaultTitle="Kingkin Fajar"
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical="https://kingkinfajarr.my.id"
      openGraph={{
        type: "website",
        url: "https://kingkinfajarr.my.id",
        title: "Kingkin Fajar",
        description: "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
      }}
      twitter={{
        handle: "@kingkinfajarr",
        site: "@kingkinfajarr",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'Kingkin Fajar' },
        { name: 'application-name', content: 'Kingkin Fajar' },
        {
          name: 'google-site-verification',
          content: 'w0K-2LpCNTZjm0SAM9nJJ9S-tS4BZW8oB8-UwkMsrQ4',
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#4ADE80' },
      ]}
    /> 
    <div className="flex min-h-screen flex-col items-center justify-center md:px-40 px-4">
      <Head>
        <title>About | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col'>
        <h1 className="md:text-lg text-base text-center md:mt-20 uppercase text-green-400">About Me</h1>
        <div className="md:max-w-2xl mx-auto">
          <h3 className='md:text-4xl text-2xl font-semibold tracking-wide mt-2 capitalize'>A Small Part Of My Story</h3>
        </div>
        <div className='mt-10'>
          <p className="mb-4 text-left leading-7">
            Hi, I&apos;m <span className='font-semibold'>Kingkin Fajar Anifianto</span>, people who know me usually call me <span className='font-semibold'>Kingkin</span> ({getAge()}), Developer who also likes to make UI Design, passionate about programming after graduating from junior high school, I continue to study at a vocational high school majoring in software engineering.
          </p>
          <p className="md:block text-left leading-7">
            I focus on front-end development, for now, I spend a lot of time to explore about front-end development using React JS, Next JS and also explore about mobile development using Flutter.
          </p>
        </div>
          <div className='md:p-5 p-2 bg-green-200/70 rounded-lg mt-10'>
            <h1 className='md:pb-5 md:mb-0 mb-5 md:mt-0 mt-2 md:text-2xl text-xl font-semibold md:text-left text-center'>My Skills and Knowledges</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-3">
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/html.svg" alt="HTML Logo"  className='w-9 mr-2'/>
                <p className='font-semibold'>HTML</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/css.svg" alt="CSS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>CSS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/javascript.svg" alt="Javascript Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>JavaScript</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/php.svg" alt="PHP Logo"  className='w-10 mr-3'/>
                <p className='font-semibold'>PHP</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/dart.svg" alt="Dart Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Dart</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/tailwind.svg" alt="Tailwind Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>Tailwind CSS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/bootstrap.svg" alt="Bootstrap Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>Bootstrap</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/react.svg" alt="React JS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>React JS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/laravel.svg" alt="Laravel Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Laravel</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/nextjs.svg" alt="Next JS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Next JS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/flutter.svg" alt="Flutter Logo"  className='w-5 mr-3'/>
                <p className='font-semibold'>Flutter</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/mysql.svg" alt="MySql Logo"  className='w-6 mr-3'/>
                <p className='font-semibold'>My SQL</p> 
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className='md:p-5 p-2 bg-green-200/70 rounded-lg mt-6 md:mb-0 mb-10'>
            <h1 className='pb-5 md:mt-0 mt-2 md:text-2xl text-xl font-semibold md:text-left text-center'>Tools and Infrastructures</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-3">
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/git.svg" alt="GIT Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>GIT</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/figma.svg" alt="Figma Logo"  className='w-4 mr-3'/>
                <p className='font-semibold'>Figma</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/vscode.svg" alt="VS Code Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Visual Studio Code</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/postman.svg" alt="Postman Logo"  className='w-9 mr-3'/>
                <p className='font-semibold'>Postman</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/vercel.svg" alt="Vercel Logo"  className='w-16 mr-3'/>
                <p className='font-semibold'>Vercel</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-transparent transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/bitbucket.svg" alt="Bitbucket Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Bitbucket</p> 
              </div>
            </div>
          </div>
        </div>

        <p className='md:mt-8 mb-3 md:text-2xl text-xl font-semibold md:text-left text-center'>You can reach me here</p>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-3'>

        <a href="mailto:kingkinnfajar@gmail.com" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-red-600 rounded-lg flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaEnvelope className='w-4 h-4 mr-2' />
              Email
            </p>
        </a>
        <a href="https://t.me/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-blue-500 rounded-lg flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaTelegramPlane className='w-4 h-4 mr-2' />
              Telegram
            </p>
        </a>
        <a href="https://github.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-black rounded-lg flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaGithub className='w-4 h-4 mr-2' />
              Github
            </p>
        </a>
        <a href="https://www.linkedin.com/in/kingkinfajarr/" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-sky-500 rounded-lg flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaLinkedin className='w-4 h-4 mr-2' />
              LinkedIn
            </p>
        </a>
        <a href="https://instagram.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-pink-600 rounded-lg flex items-center hover:translate-x-1 transition-all duration-300'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaInstagram className='w-4 h-4 mr-2' />
              Instagram
            </p>
        </a>
        <a href="https://twitter.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-sky-400 rounded-lg flex items-center hover:translate-x-1 transition-all duration-300 md:mb-0 mb-14'>
            <p className='flex items-center text-white mx-auto font-semibold'>
              <FaTwitter className='w-4 h-4 mr-2' />
              Twitter
            </p>
        </a>
        </div>
      </main>
    </div>
    </>
  );
}
 
export default About;