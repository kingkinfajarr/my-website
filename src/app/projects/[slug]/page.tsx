import { allProjects } from 'contentlayer/generated'
import React from 'react'
import Image from 'next/image'
import { PageContainer } from '@/components'
import { ArrowRight } from 'react-feather'
import CardProjects from '@/components/projects/card'
import { Heading, MDXContent } from '@/components/ui'
import NotFoundPage from '@/app/not-found'

const getProject = (slug: string) =>
  allProjects.find((project) => project.slug === slug)

const getProjects = () => allProjects

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const projects = getProjects()
  if (!project) return NotFoundPage

  return (
    <PageContainer withNavbar withFooter>
      <main className="flex min-h-screen flex-col">
        <section className="flex min-h-screen flex-col">
          <div className="flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-xl">
            <Image
              src={
                'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={project.title || ''}
              width={200}
              height={500}
              layout="responsive"
              className="bg-cover"
            />
          </div>
          <Heading variant={'h2'} className='mt-10'>{project.title}</Heading>
          <p>{project.description}</p>
          <MDXContent code={project.body.code} />
        </section>

        <section className="my-6">
          <Heading variant={'h4'} className="mb-4">
            Other Projects
          </Heading>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
            {projects &&
              projects.map((project) => (
                <CardProjects key={project._id} project={project} />
              ))}
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
