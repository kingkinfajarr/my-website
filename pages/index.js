import Head from 'next/head';
import Image from 'next/image';
import profile from '../public/profile-image.jpg';
import { NextSeo } from 'next-seo';

export default function Index() {
  return (
    <>
    <NextSeo
      title='Kingkin Fajar Anifianto'
      titleTemplate="Kingkin Fajar Anifianto"
      defaultTitle="Kingkin Fajar Anifianto"
      description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
      canonical="https://kingkinfajarr.my.id"
      openGraph={{
        type: "website",
        url: "https://kingkinfajarr.my.id",
        site_name: "Kingkin Fajar Anifianto",
        title: "Kingkin Fajar Anifianto",
        description: "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
      }}
      twitter={{
        handle: "@kingkinfajarr",
        site: "@kingkinfajarr",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'Kingkin Fajar Anifianto' },
        { name: 'application-name', content: 'Kingkin Fajar Anifianto' },
        {
          name: 'google-site-verification',
          content: 'St3mL9W0jVuct39rx9f1NgYC6YTvTasfkjoE_l9T47k',
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#4ADE80' },
      ]}
    />
    <div className='flex md:min-h-screen min-h-full flex-col items-center justify-center md:px-40 px-4'>
      <Head>
        <title>Home | Kingkin Fajar</title>
      </Head>
      <main className='flex w-full flex-1 flex-col justify-center text-center'>

      <div className="grid md:grid-cols-3 items-center justify-center md:mb-0 md:mt-0 mt-8 mb-20">
        <div className='md:col-span-2 md:order-1 order-2 md:mt-0 mt-5 md:text-5xl text-4xl'>
          <h1 className='font-bold md:text-left text-center leading-tight'>Hi, I&apos;m <span className='text-green-400'>Kingkin Fajar</span> Developer and UI Design Enthusiast</h1>
        </div>
        <div className='md:w-72 md:h-72 w-48 h-w-48 rounded-full md:ml-auto mx-auto md:order-2 order-1'>
          <Image
            src={profile}
            width={600}
            height={600}
            className='object-cover h-full w-full rounded-full overflow-hidden'
          />
        </div>
      </div>
      </main>
    </div>
    </>
  );
}
