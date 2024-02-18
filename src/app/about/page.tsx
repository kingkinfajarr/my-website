import { PageContainer } from '@/components'
import { cn } from '@/shared'
import React from 'react'
import { allAbouts } from 'contentlayer/generated'
import parser from 'react-html-parser'
import { Card } from '@/components/about/card'
import { Heading } from '@/components/ui/heading'

export default function Page() {
  const { description, skills } = allAbouts[0]

  return (
    <PageContainer withFooter withNavbar>
      <section className="min-h-screen items-center">
        <div
          className={cn('grid grid-rows-1 gap-3', 'sm:grid-cols-2 sm:gap-6')}
        >
          <div className="text-3xl font-semibold sm:text-6xl">
            I love creating simple and clean user interface design
          </div>
          <div className="space-y-3 ">
            {description.map((desc, i) => (
              <p
                key={i}
                className="text-sm leading-6 tracking-wide  sm:text-base"
              >
                {parser(desc)}
              </p>
            ))}
          </div>
        </div>
        <hr className="my-10 border-color" />
        <div className={cn('grid grid-flow-col grid-cols-3 gap-4')}>
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className={cn(skill.name.toLowerCase() === 'frontend' ? '' : '')}
            >
              <Heading variant={'h5'}>{skill.name} Skills</Heading>
              <hr className="my-4" />
              {skill.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
