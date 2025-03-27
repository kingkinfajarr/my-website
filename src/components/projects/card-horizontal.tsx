import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Project } from 'contentlayer/generated'
import { Divider } from '@/components/ui/divider'

function CardHorizontal({ project }: { project: Project }) {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className=" mb-5 grid max-h-[220px] w-full grid-cols-1 gap-2 rounded-2xl bg-zinc-300 bg-opacity-5 p-4 shadow-md backdrop-blur-sm sm:grid-cols-2">
        <div className="relative h-[180px] w-full">
          <Image
            src={project.thumbnail}
            alt="gambar"
            fill={true}
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="ml-2 flex flex-col">
          <div className="flex items-center justify-between">
            <h1
              className={cn(
                'line-clamp-1 text-lg font-bold sm:text-xl md:text-2xl',
              )}
            >
              {project.title}
            </h1>
            {project.demo != '-' ? (
              <Link href={`projects/${project.demo}`}>
                <span className="flex items-center text-sm text-light/70 transition-all duration-300 ease-in-out hover:text-white">
                  <span>preview</span>
                  <ArrowRight className="ml-1" size={16} />
                </span>
              </Link>
            ) : null}
          </div>
          <Divider variant={'right'} className="my-4" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-zinc-700 px-2 py-1 text-xs text-zinc-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <Divider variant={'left'} className="my-4" />
          <p className="line-clamp-3">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardHorizontal
