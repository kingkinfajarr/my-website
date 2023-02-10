import Head from "next/head";
import { createClient } from "contentful";
import Card from "../../components/blog/Card";
import { NextSeo } from "next-seo";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: { blogs: res.items },
    revalidate: 1,
  };
}

const Blog = ({ blogs }) => {
  return (
    <>
      <NextSeo
        title='Kingkin Fajar Anifianto'
        titleTemplate='Kingkin Fajar Anifianto'
        defaultTitle='Kingkin Fajar Anifianto'
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical='https://kingkinfajarr.my.id'
        openGraph={{
          type: "website",
          url: "https://kingkinfajarr.my.id",
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
            content: "St3mL9W0jVuct39rx9f1NgYC6YTvTasfkjoE_l9T47k",
          },
          { name: "msapplication-TileColor", content: "#da532c" },
          {
            name: "msapplication-config",
            content: "/favicon/browserconfig.xml",
          },
          { name: "theme-color", content: "#4ADE80" },
        ]}
      />
      <div className='flex min-h-screen flex-col items-center justify-center md:px-40 px-6'>
        <Head>
          <title>Blog | Kingkin Fajar</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex w-full flex-1 flex-col md:items-center md:justify-center text-center'>
          <h1 className='md:text-lg text-base text-center md:mt-20 uppercase text-green-400'>
            My Blog
          </h1>
          <div className='md:max-w-2xl'>
            <h3 className='text-center md:text-4xl text-2xl font-semibold tracking-wide mt-2 md:mb-12 mb-8 capitalize'>
              Kinds of content that may be useful for you
            </h3>
          </div>
          {blogs.map((blog) => {
            return <Card key={blog.sys.id} blog={blog} />;
          })}
        </main>
      </div>
    </>
  );
};

export default Blog;
