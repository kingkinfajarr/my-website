import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return ( 
    <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-4'>
    <Head>
      <title>Not Found | Kingkin Fajar</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='flex w-full flex-1 flex-col justify-center text-center'>
    <div className="empty-4-6">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <img className="sm:w-2/6 w-5/6 sm:mb-1.5 mb-2 object-cover object-center" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState4/Empty-4-2.png" alt=""/>          
        <div className="text-center w-full">
          <h1 className="title-text text-3xl mb-5 font-semibold">
            Opss! You&apos;re Lost
          </h1>
          <div className="flex justify-center">
            <Link href={'/'}>
              <button className="btn-back inline-flex font-semibold text-white text-lg leading-7 py-4 px-6 rounded-xl focus:outline-none hover:shadow-lg">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </main>
  </div>
  );
  
}
 
export default NotFoundPage;