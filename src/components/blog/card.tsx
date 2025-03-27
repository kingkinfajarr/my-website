import Image from 'next/image'
import React from 'react'
import { Heading } from '../ui/heading'

function CardBlog() {
  return (
    <div className="group relative mb-4 w-full overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative">
        <Image
          className="h-44 w-full object-cover object-center"
          src={
            'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          width={720}
          height={400}
          alt="blog"
        />
        <div className="absolute right-2 top-2 z-20 rounded bg-black px-2 py-1 text-xs text-white">
          19 May 2024
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-70">
          <span className="text-xs text-white opacity-0 transition duration-300 group-hover:opacity-100">
            Reading now
          </span>
        </div>
      </div>
      <div className="relative z-20 p-4">
        <Heading className="inline-block text-2xl font-semibold text-gray-800">
          Blog Post Title
        </Heading>
        <p className="mt-3 line-clamp-3 text-base text-gray-600 sm:max-w-[840px] sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci
          tempora aut inventore optio animi.,
        </p>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-30"></div>
    </div>
  )
}

export default CardBlog
