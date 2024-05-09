import { allWorks } from 'contentlayer/generated'
import { PageContainer } from '@/components'
import React from 'react'
import { CardWork } from '@/components/work-experinces/card'
import { cn } from '@/lib'
import { Heading } from '@/components/ui/heading'
import parser from 'react-html-parser'
import Image from 'next/image'

export default function Page() {
  const works = allWorks[0].works

  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center ">
        <Heading variant={'h1'} className="my-2 font-bold">
          Work Experiences
        </Heading>
        {works.map((work: any) => (
          <CardWork key={work.company}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={work.image}
                  width={120}
                  height={120}
                  alt="Logo Company"
                  className="mr-5 flex items-center rounded-md object-cover"
                />
                <div>
                  <Heading variant={'h2'}>{work.company}</Heading>
                  <p className="mt-3 text-base opacity-60">
                    {work.start_date} - {work.end_date}
                  </p>
                </div>
              </div>
              <p>{work.role}</p>
            </div>
            <hr className="my-4" />
            {work.description.map((desc: any) => (
              <p
                key={desc}
                className="text-sm leading-6 tracking-wide  sm:text-base"
              >
                {parser(desc)}
              </p>
            ))}
          </CardWork>
        ))}
      </main>
    </PageContainer>
  )
}
