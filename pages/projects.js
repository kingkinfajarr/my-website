import Head from "next/head";
import { createClient } from "contentful";
import Card from "../components/projects/Card";
import { NextSeo } from "next-seo";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "project" });

  return {
    props: { projects: res.items },
    revalidate: 1,
  };
}

const Projects = ({ projects }) => {
  return (
    <>
      <NextSeo
        title='Kingkin Fajar Anifianto'
        titleTemplate='Kingkin Fajar Anifianto'
        defaultTitle='Kingkin Fajar Anifianto'
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical='https://kingkinfajarr.space'
        openGraph={{
          type: "website",
          url: "https://kingkinfajarr.space",
          site_name: "Kingkin Fajar Anifianto",
          title: "Kingkin Fajar Anifianto",
          description:
            "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
        }}
        twitter={{
          handle: "@kingkinfajarr",
          site: "@kingkinfajarr",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "apple-mobile-web-app-title",
            content: "Kingkin Fajar Anifianto",
          },
          { name: "application-name", content: "Kingkin Fajar Anifianto" },
          {
            name: "google-site-verification",
            content: "bHVig-zFWgxVxw0D-0FhPsgs88E6RiUIThiL83Mn79M",
          },
          { name: "msapplication-TileColor", content: "#da532c" },
          {
            name: "msapplication-config",
            content: "/favicon/browserconfig.xml",
          },
          { name: "theme-color", content: "#4ADE80" },
        ]}
      />
      <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-4'>
        <Head>
          <title>Project | Kingkin Fajar</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex w-full flex-1 flex-col justify-center text-center'>
          <h1 className='md:text-lg text-base text-center md:mt-20 uppercase text-green-400'>
            Projects
          </h1>
          <div className='md:max-w-2xl mx-auto'>
            <h3 className='md:text-4xl text-2xl font-semibold tracking-wide mt-2 capitalize'>
              A Few Of My Favorite Works
            </h3>
          </div>
          <div className='grid md:gap-8 gap-4 md:grid-cols-2 auto-rows-auto md:mb-0 mb-16 md:mt-12 mt-8'>
            {projects.map((project) => {
              return <Card key={project.sys.id} project={project} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
