import Head from 'next/head';
import { createClient } from "contentful";
import Card from '../components/projects/Card';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "project" })

  return {
    props: { projects: res.items }
  }
}

const Projects = ({ projects }) => {
  console.log(projects);
  return ( 
    <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-4'>
      <Head>
        <title>Project | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col justify-center text-center'>
        <h1 className="md:text-lg text-base text-center md:mt-20 uppercase text-green-400">Projects</h1>
        <div className="md:max-w-2xl mx-auto">
          <h3 className='md:text-4xl text-2xl font-semibold tracking-wide mt-2 capitalize'>A Few Of My Favorite Works</h3>
        </div>
        <div className="grid md:gap-8 gap-4 md:grid-cols-2 auto-rows-auto md:mb-0 mb-16 md:mt-12 mt-8">
          {projects.map(project => {
            return (
              <Card key={project.sys.id} project={project} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
 
export default Projects;