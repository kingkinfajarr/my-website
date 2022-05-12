import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="">
      <div className="text-center md:pb-10 md:pt-10 pb-14 font-semibold leading-relaxed">
        <p>
          Created By{' '}
          <Link href={''}>
            <a href="http://github.com/kingkinfajarr" target="_blank" rel="noopener noreferrer" className='underline'>Kingkin Fajar</a>
          </Link>{' '}
        </p>
        <p className='leadi'>
          with{' '}
          <Link href={''}>
            <a href="http://nextjs.org" target="_blank" rel="noopener noreferrer" className='underline'>Next JS,</a>
          </Link>{' '}
          <Link href={''}>
            <a href="http://contentful.com" target="_blank" rel="noopener noreferrer" className='underline'>Contentful</a>
          </Link>{' '}and&nbsp;
          <Link href={''}>
            <a href="http://tailwindcss.com" target="_blank" rel="noopener noreferrer" className='underline'>Tailwind CSS</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
