import { createClient } from "contentful";
import Head from "next/head";
import Card from "../../components/blog/Card";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "blog" })

  return {
    props: { blogs: res.items }
  }
}

const Blog = ({ blogs }) => {
  return ( 
    <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-6'>
      <Head>
        <title>Blog | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col md:items-center md:justify-center text-center'> 
      <h1 className="text-3xl font-bold md:mt-20 md:mb-14 mb-10">Blog</h1>
      <p></p>
        {blogs.map(blog => {
          return (
            <Card key={blog.sys.id} blog={blog} />
          );
        })}
      </main>
    </div>
   );
}
 
export default Blog;