import Link from 'next/link';
import Image from 'next/image';

const Card = ({ blog }) => {
  const { title, slug, thumbnail, headline, content, created, tag } = blog.fields;
  return ( 
    <>
    <Link href={'/blog/' + slug}>
      <div className="grid md:grid-cols-3 grid-cols-2 items-center mb-10 hover:bg-green-100/70 hover:p-3 hover:rounded-lg transition-all duration-300">
        <div className='object-cover h-52 bg-slate-300 w-full md:rounded-lg rounded-md overflow-hidden'>
          <Image src={'https:' + thumbnail.fields.file.url} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} />
        </div>
        <div className='text-left md:ml-7 ml-4 md:col-span-2'>
          <h3 className="text-xl font-bold text-green-300">{created}</h3>
          <Link href={'/blog/' + slug}>
            <h2 className="md:text-3xl text-lg font-bold hover:underline transition-all duration-200 cursor-pointer my-2">{title}</h2>
          </Link>
          <p className="md:block truncate md:break-normal hover:break-all mb-2">{headline}</p>
          <p>{tag}</p>
        </div>
      </div>
    </Link>
    </>
  );
}
 
export default Card;