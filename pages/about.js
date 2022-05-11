import Head from 'next/head';
import Link from 'next/link';
import { 
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  
} from 'react-icons/fa';



const About = () => {
  return ( 
    <div className="flex min-h-screen flex-col items-center justify-center md:px-40 px-4">
      <Head>
        <title>Contact | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col '>
        <h1 className="text-2xl font-bold text-center md:mt-20">About Me</h1>
        <div className='mt-6'>
          <p className="mb-4 text-left leading-7">
            Hi, I&apos;m <span className='font-semibold'>Kingkin Fajar</span>, people who know me usually call me Kingkin (18), a Developer who also likes to make UI Design, passionate about programming after graduating from junior high school, and I continue to study at a vocational high school majoring in software engineering.
          </p>
          <p className="md:block text-left leading-7">
            I focus on front-end development, for now, I spend a lot of time exploring front-end development using React JS, Next JS and also exploring mobile development using Flutter
          </p>
        </div>
          <div className='md:p-5 p-2 bg-green-200/70 rounded-lg mt-10'>
            <h1 className='md:pb-5 md:mb-0 mb-5 md:mt-0 mt-2 md:text-2xl text-xl font-bold md:text-left text-center'>My Skills and Knowledges</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-3">
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/html.svg" alt="HTML Logo"  className='w-9 mr-2'/>
                <p className='font-semibold'>HTML</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/css.svg" alt="CSS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>CSS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/javascript.svg" alt="Javascript Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>JavaScript</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/php.svg" alt="PHP Logo"  className='w-10 mr-3'/>
                <p className='font-semibold'>PHP</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/dart.svg" alt="Dart Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Dart</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/tailwind.svg" alt="Tailwind Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>Tailwind CSS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/bootstrap.svg" alt="Bootstrap Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>Bootstrap</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/react.svg" alt="React JS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>React JS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/laravel.svg" alt="Laravel Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Laravel</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/nextjs.svg" alt="Next JS Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Next JS</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/flutter.svg" alt="Flutter Logo"  className='w-5 mr-3'/>
                <p className='font-semibold'>Flutter</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/skills/mysql.svg" alt="MySql Logo"  className='w-6 mr-3'/>
                <p className='font-semibold'>My SQL</p> 
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className='md:p-5 p-2 bg-green-200/70 rounded-lg mt-6 md:mb-0 mb-10'>
            <h1 className='pb-5 md:mt-0 mt-2 md:text-2xl text-xl font-bold md:text-left text-center'>Tools and Infrastructures</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-3">
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/git.svg" alt="GIT Logo"  className='w-8 mr-3'/>
                <p className='font-semibold'>GIT</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/figma.svg" alt="Figma Logo"  className='w-4 mr-3'/>
                <p className='font-semibold'>Figma</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/vscode.svg" alt="VS Code Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Visual Studio Code</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/postman.svg" alt="Postman Logo"  className='w-9 mr-3'/>
                <p className='font-semibold'>Postman</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/vercel.svg" alt="Vercel Logo"  className='w-16 mr-3'/>
                <p className='font-semibold'>Vercel</p> 
              </div>
            </div>
            <div className='bg-green-100 h-16 rounded-lg items-center flex hover:bg-green-200/70 transition-all duration-200 hover:translate-x-1'>
              <div className='flex items-center mx-auto'>
                <img src="./images/tools/bitbucket.svg" alt="Bitbucket Logo"  className='w-7 mr-3'/>
                <p className='font-semibold'>Bitbucket</p> 
              </div>
            </div>
          </div>
        </div>

        {/* <p className='my-8 text-left'>You can reach me via socials below :</p> */}
        {/* <a href="mailto:kingkinnfajar@gmail.com" target="_blank" rel="noopener noreferrer" className='w-full h-14 bg-red-600 rounded-lg mb-3 flex items-center hover:translate-x-1 transition-all duration-300'>
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
        </a> */}
      </main>
    </div>
  );
}
 
export default About;