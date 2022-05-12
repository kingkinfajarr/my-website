import Image from 'next/image';
import Link from 'next/link';

const Card = ({ project }) => {
  const { title, thumbnail, desc, github, demo } = project.fields;
  return (
    <div className="h-auto bg-green-100 md:shadow-md rounded-lg hover:bg-green-200/50 transition-all duration-300">
      <div className="p-3 hover:p-4 transition-all duration-300">
        <div className="bg-slate-300 rounded-lg md:h-64 h-44 object-cover overflow-hidden">
          <Image src={'https:' + thumbnail.fields.file.url} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} />
        </div>
        <div className="text-center">
          <h1 className="font-bold md:text-2xl text-xl md:my-5 my-3">{ title }</h1>
          <p>
            { desc }
          </p>
          <div className={demo !== '-' ? "grid grid-cols-2 gap-2 justify-center mt-5" : "grid gap-2 justify-center mt-5 grid-cols-1"}>
              <a href={github} target="_blank" rel="noopener noreferrer" className="bg-green-400 hover:bg-green-400/70 py-2 rounded-lg font-semibold text-white transition-all duration-200">Github</a>
              {demo !== '-' && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="bg-green-400 hover:bg-green-400/70 py-2 rounded-lg font-semibold text-white transition-all duration-200">Demo</a>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Card;