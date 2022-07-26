import Head from "next/head";
import { createClient } from "contentful";
import Card from "../../components/blog/Card";
import { NextSeo } from 'next-seo';

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
    <>
    <NextSeo
      title='Kingkin Fajar'
      titleTemplate="Kingkin Fajar"
        defaultTitle="Kingkin Fajar"
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical="https://kingkinfajarr.my.id"
      openGraph={{
        type: "website",
        url: "https://kingkinfajarr.my.id",
        title: "Kingkin Fajar",
        description: "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
      }}
      twitter={{
        handle: "@kingkinfajarr",
        site: "@kingkinfajarr",
        cardType: "summary_large_image",
      }}
    />
    <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-6'>
      <Head>
        <title>Blog | Kingkin Fajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full flex-1 flex-col md:items-center md:justify-center text-center'> 
      <h1 className="md:text-lg text-base text-center md:mt-20 uppercase text-green-400">My Blog</h1>
      <div className="md:max-w-2xl">
        <h3 className='text-center md:text-4xl text-2xl font-semibold tracking-wide mt-2 md:mb-12 mb-8 capitalize'>Kinds of content that may be useful for you</h3>
      </div>
        {blogs.map(blog => {
          return (
            <Card key={blog.sys.id} blog={blog} />
          );
        })}
      </main>
    </div>
    </>
   );
}
 
export default Blog;