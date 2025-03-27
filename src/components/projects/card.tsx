import { cn } from '@/lib'
import { Project } from 'contentlayer/generated'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardProjects({ project }: { project: Project }) {
  return (
    <div className="group relative flex min-h-[380px] w-full flex-col rounded-2xl shadow-md">
      <Link href={`projects/${project.slug}`} className="h-full w-full">
        <Image
          src={project.thumbnail}
          height={100}
          width={100}
          alt=""
          className="flex h-full w-full items-center rounded-2xl object-cover"
        />
        <div className="absolute bottom-3 left-3 right-3 items-center rounded-2xl bg-white/20 p-4 backdrop-blur-md transition-all duration-300 ease-in-out">
          <h1 className={cn('line-clamp-1 text-lg font-semibold', '')}>
            {project.title}
          </h1>
          {project.demo && (
            <Link href={`projects/${project.demo}`}>
              <span className="flex items-center text-sm text-light/70 transition-all duration-300 ease-in-out hover:text-white">
                <span>Preview</span>
                <ArrowRight className="ml-2" size={16} />
              </span>
            </Link>
          )}
        </div>
      </Link>
    </div>
  )
}

export default CardProjects
