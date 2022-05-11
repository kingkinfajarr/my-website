import { createClient } from "contentful";
import Head from 'next/head';
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
        <h1 className="text-3xl font-bold md:mt-20 md:mb-14 mb-10">Project</h1>
        <div className="grid md:gap-8 gap-4 md:grid-cols-2 auto-rows-auto md:mb-0 mb-16">
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