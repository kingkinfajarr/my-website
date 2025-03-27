'use client'
import { PageContainer } from '@/components'
import { Heading } from '@/components/ui/heading'
import { useIsLargeScreen } from '@/hooks'
import { cn } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import CardHorizontal from '@/components/projects/card-horizontal'
import { allProjects } from 'contentlayer/generated'
import CardProjects from '@/components/projects/card'
import React from 'react'
import CardBlogVertical from '@/components/blog/card-vertical'
import { generateSeoMeta } from '@/lib/seo'

export default function Home() {
  const { isLargeScreen } = useIsLargeScreen()
  const projects = allProjects.filter((project) => project.isSelected)

  const metadata = generateSeoMeta({
    title: 'Home',
    description: '',
  })

  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col">
        <section className={cn('mt-20', 'sm:mt-20')}>
          <Heading>
            <span
              className={cn(
                'mb-1 block text-[32px] font-bold text-gt400',
                'sm:text-3xl',
              )}
            >
              Kingkin Fajar.
            </span>
          </Heading>
          <span className="text-md">Software Developer</span>
          <p
            className={cn(
              'mx-0 mt-4 max-w-[680px] opacity-70',
              'sm:mt-4 sm:text-lg',
            )}
          >
            I am a software developer specialized in frontend development. I
            love to create simple and clean user interface design.
          </p>
        </section>

        <div className="my-20 h-[1px] bg-gradient-to-r from-zinc-200 from-10% via-zinc-300 to-dark  to-90%"></div>

        <section>
          <div className="flex items-end justify-between">
            <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
              <span>🚀&nbsp;</span>
              <span>My Projects</span>
            </Heading>
            <Link
              href={'/'}
              className="opacity-60 transition-all duration-300 hover:underline"
            >
              view more
            </Link>
          </div>
          <p
            className={cn(
              'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
              'sm:mt-4 sm:text-lg',
            )}
          >
            Here are some highlights from my portfolio that demonstrate my
            growth as a developer and my passion for creating impactful
            solutions.
          </p>
          <div className={cn('gap-3', '')}>
            {projects &&
              projects.map((project) => (
                <CardHorizontal key={project._id} project={project} />
              ))}
          </div>
        </section>

        <div className="my-20 h-[1px] bg-gradient-to-l from-zinc-200 from-10% via-zinc-300 to-dark  to-90%"></div>

        <section className={cn('', 'sm: mb-20')}>
          <div className="flex items-end justify-between">
            <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
              <span>🎒&nbsp;</span>
              <span>Latest Blog</span>
            </Heading>
            <Link
              href={'/blog'}
              className="opacity-60 transition-all duration-300 hover:underline"
            >
              view more
            </Link>
          </div>
          <p
            className={cn(
              'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
              'sm:mt-4 sm:text-lg',
            )}
          >
            Journey through personal stories that bridge code and life lessons.
          </p>

          <div
            className={cn('grid grid-cols-1 gap-3', 'sm:grid-cols-3 sm:gap-5')}
          >
            Coming soon..
          </div>

          {/* <div
            className={cn('grid grid-cols-1 gap-3', 'sm:grid-cols-3 sm:gap-5')}
          >
            {projects &&
              projects.map((project) => (
                <CardBlogVertical key={project._id} project={project} />
              ))}
          </div> */}
        </section>
      </main>
    </PageContainer>
  )
}
