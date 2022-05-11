import Link from 'next/link';
import { useRouter } from 'next/router';

const NavMobile = () => {
  const router = useRouter();
  return (
    <nav className="px-4 md:mt-0 mt-24 mb-8">
      <div className="rounded-lg bg-green-100 h-14 block md:hidden">
        <div className="grid grid-cols-3 h-14 justify-between">
          <div className={router.pathname == '/projects' ? 'bg-green-50 rounded-lg mx-1 mt-1 mb-1 flex items-stretch' : ' rounded-lg mr-1 mt-1 mb-1 flex items-stretch'}>
            <Link href="/projects">
              <p className=" mx-auto self-center">Project</p>
            </Link>
          </div>
          <div className={router.pathname == '/blog' ? 'bg-green-50 rounded-lg mr-1 mt-1 mb-1 flex items-stretch' : ' rounded-lg mr-1 mt-1 mb-1 flex items-stretch'}>
            <Link href="/blog">
              <p className=" mx-auto self-center">Blog</p>
            </Link>
          </div>
          <div className={router.pathname == '/about' ? 'bg-green-50 rounded-lg mr-1 mt-1 mb-1 flex items-stretch' : ' rounded-lg mr-1 mt-1 mb-1 flex items-stretch'}>
            <Link href="/about">
              <p className=" mx-auto self-center">About</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
