import { PageContainer } from '@/components'
import { cn } from '@/lib'
import React from 'react'
import { allAbouts, allSkills } from 'contentlayer/generated'
import parser from 'react-html-parser'
import { Card } from '@/components/about/card'
import { Heading } from '@/components/ui/heading'
import Link from 'next/link'
import Image from 'next/image'
import { Divider } from '@/components/ui/divider'

export default function Page() {
  const { description, socials } = allAbouts[0]
  const skills = allSkills[0].skills

  return (
    <PageContainer withFooter withNavbar>
      <section title="About Me" className="mt-20">
        <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
          <span>👨🏼‍💻️&nbsp;</span>
          <span>About</span>
        </Heading>
        <p
          className={cn(
            'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
            'sm:mt-4 sm:text-lg',
          )}
        >
          Small story about me.
        </p>
        <div className="overflow-hidden">
          <div className="float-right mb-6 ml-6 h-[130px] w-[130px] rounded-full">
            <Image
              src="profile.jpeg"
              alt="avatar"
              width={130}
              height={130}
              className="h-full w-full rounded-full object-cover grayscale"
            />
          </div>
          <div className="mt-8 space-y-5 sm:mt-0">
            {description.map((desc, i) => (
              <p
                key={i}
                className="leading-relaxed tracking-wide opacity-80 sm:text-lg"
              >
                {parser(desc)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Divider variant={'right'} />

      <section title="Skills">
        <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
          <span>🛠️&nbsp;</span>
          <span>Technologies</span>
        </Heading>
        <p
          className={cn(
            'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
            'sm:mt-4 sm:text-lg',
          )}
        >
          Here are some of the technologies that I have worked with.
        </p>
        <div
          className={cn(
            'rounded-xl bg-zinc-300 bg-opacity-5 p-3 backdrop-blur-sm',
            'sm:p-6',
          )}
        >
          <div
            className={cn('grid grid-cols-1 gap-3', 'sm:grid-cols-4 sm:gap-12')}
          >
            {skills.map((skill: any, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-md bg-zinc-700/40 p-5 grayscale-[70%] transition-all duration-300 hover:grayscale-0"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className={cn('mb-2')}
                />
                <p className="opacity-80">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider variant={'left'} />

      <section className="mb-10 sm:mb-16" title="Lets Get in Touch">
        <div>
          <Heading className={cn('flex text-xl', ' sm:text-2xl')}>
            <span>☕️&nbsp;</span>
            <span>Get in touch</span>
          </Heading>
          <p
            className={cn(
              'mb-6 mt-4 max-w-[600px] leading-snug opacity-80',
              'sm:mt-4 sm:text-lg',
            )}
          >
            Here are some of the technologies that I have worked with.
          </p>

          <ul>
            {socials.map((social: any) => (
              <li key={social.name}>
                <p
                  className={cn(
                    'mb-1 items-center text-base opacity-80',
                    'sm:text-lg',
                  )}
                >
                  {social.name} - {''}
                  <a
                    href={social.link}
                    target="_blank"
                    className="underline underline-offset-2"
                    rel="noopener noreferrer"
                  >
                    {social.link}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageContainer>
  )
}
