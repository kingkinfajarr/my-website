import { cn } from '@/lib'
import { Project } from 'contentlayer/generated'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardBlogVertical({ project }: { project: Project }) {
  return (
    <div className="group relative flex min-h-[380px] w-full flex-col rounded-2xl shadow-md">
      <Image
        src={
          'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        height={100}
        width={100}
        alt="gambar"
        className="flex h-full w-full items-center rounded-2xl object-cover"
      />
      <Link href={`projects/${project.slug}`}>
        <div className="absolute bottom-0 left-0 flex w-[80%] items-center justify-between rounded-bl-2xl rounded-tr-2xl bg-white/20 p-4 backdrop-blur-md transition-all duration-300 ease-in-out group-hover:w-full group-hover:rounded-br-2xl group-hover:rounded-tr-none">
          <h1
            className={cn('line-clamp-3 text-xl font-semibold', 'sm:text-lg')}
          >
            {project.title}
          </h1>
          <div className="hidden items-center group-hover:flex">
            <ArrowRight size={24} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardBlogVertical
