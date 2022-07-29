import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import ReactMarkdown from 'react-markdown';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'blog' });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  return { props: { blog: items[0] } };
};

 const BlogDetail = ({ blog }) => {
  const { title, thumbnail, content, tag } = blog.fields;
   return (
      <div className="flex md:min-h-screen flex-col items-center justify-center md:px-40 px-4">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
          <div className="w-full md:h-96 h-64 bg-slate-300 rounded-lg object-cover overflow-hidden md:mt-20">
            <Image src={'https:' + thumbnail.fields.file.url} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} />
          </div>
          <h1 className="md:text-4xl text-3xl font-bold md:my-7 my-4">{title}</h1>
          <ReactMarkdown components={{ 
            h1: (props) => <h1 className="text-left text-4xl font-bold">{props.children}</h1>,
            h2: (props) => <h2 className="text-left text-3xl font-bold">{props.children}</h2>,
            h3: (props) => <h3 className="text-left text-2xl mb-1 font-bold">{props.children}</h3>,
            hr: (props) => <hr className="mt-3 border-0" {...props.children}/>,
            p: (props) => <p className="text-left text-md leading-relaxed">{props.children}</p>,
            blockquote: (props) => <div className="text-left p-2 border-l-4 border-green-200 my-3">
              {props.children}
            </div>
           }} className="text-left">{content}</ReactMarkdown>
           <div className="flex md:mt-5 mt-4 md:mb-0 mb-14">
            <div className='mr-2 bg-green-200 rounded px-2 py-1 font-medium'>{tag}</div>
          </div>
        </main>
      </div>
    );
 }
  
 export default BlogDetail;