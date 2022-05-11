import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="">
      <div className="text-center md:pb-10 md:pt-10 pb-14 font-semibold text-heading">
        <p>
          Created By{' '}
          <Link href={''}>
            <span className="underline">Kingkin Fajar</span>
          </Link>{' '}
        </p>
        <p>
          with{' '}
          <Link href={''}>
            <span className="underline">Next JS,</span>
          </Link>{' '}
          <Link href={''}>
            <span className="underline">Contentful,</span>
          </Link>{' '}
          <Link href={''}>
            <span className="underline">Tailwind CSS</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
