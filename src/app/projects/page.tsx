import { PageContainer } from '@/components'
import CardProjects from '@/components/projects/card'
import { Heading } from '@/components/ui/heading'
import { cn, env } from '@/lib'
import React from 'react'
import { allProjects } from 'contentlayer/generated'
import CardHorizontal from '@/components/projects/card-horizontal'
import { generateSeoMeta } from '@/lib/seo'

const url = new URL(env.url.website + '/projects')

export const metadata = generateSeoMeta({
  title: 'Projects',
  description:
    'Here are some highlights from my portfolio that demonstrate my growth as a developer and my passion for creating impactful solutions.',
  customOg: {
    url: url,
  },
})

export default function Page() {
  const projects = allProjects.sort((a, b) => b.position - a.position)

  return (
    <PageContainer withFooter withNavbar>
      <main className="my-10 flex min-h-screen flex-col">
        <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
          <span>🚀&nbsp;</span>
          <span>My Projects</span>
        </Heading>
        <p
          className={cn(
            'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
            'sm:mt-4 sm:text-lg',
          )}
        >
          Here are some highlights from my portfolio that demonstrate my growth
          as a developer and my passion for creating impactful solutions.
        </p>
        <div className={cn('grid grid-cols-1 gap-3', '')}>
          {projects &&
            projects.map((project) => (
              <CardHorizontal key={project._id} project={project} />
            ))}
          {/* <CardProjects  />
          <CardProjects />
          <CardProjects /> */}
        </div>
      </main>
    </PageContainer>
  )
}
