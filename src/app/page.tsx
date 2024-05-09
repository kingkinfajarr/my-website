'use client'

import { PageContainer } from '@/components'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownCircle } from 'react-feather'

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="relative my-28 ">
          <div
            className={cn(
              'absolute left-0 -z-50 mt-6 h-3 w-60 rotate-0  bg-gradient-to-r from-orange-500 px-11',
              'sm:mx-11 sm:mt-[60px] sm:h-3 sm:w-[520px]',
            )}
          ></div>
          <Heading
            className={cn(
              'text z-10 text-3xl font-semibold tracking-tight',
              'sm:px-12 sm:text-[80px] sm:leading-[81px]',
            )}
            variant={'h1'}
          >
            Kingkin Fajar,
            <br /> Software Developer Specialized in Frontend Development
          </Heading>
          <button
            className="mx-auto mt-10 flex animate-bounce items-center justify-center"
            onClick={scrollToProjects}
          >
            <ArrowDownCircle size={36} />
          </button>
        </section>

        <section className="mt-20 grid w-full grid-cols-3 gap-4" id="projects">
          <div className="col-span-2 bg-slate-50">
            <Image
              src={'https://picsum.photos/200/150'}
              alt="blablab"
              width={0}
              height={120}
              className="flex w-full items-center object-cover"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <div className="bg-slate-200">
              <Image
                src={'https://picsum.photos/200/150'}
                alt="blablab"
                width={0}
                height={120}
                className="flex w-full items-center object-cover"
              />
            </div>
            <div className="bg-slate-500">
              <Image
                src={'https://picsum.photos/200/150'}
                alt="blablab"
                width={0}
                height={120}
                className="flex w-full items-center object-cover"
              />
            </div>
          </div>
        </section>
        <Link href={'/projects'} className="my-2 text-center underline">
          view all projects
        </Link>

        <section className="my-20 grid grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex flex-col text-left">
              <Heading variant={'h3'}>sometimes also write what I love</Heading>
              <Link href={'/blog'} className=" my-2 text-sm underline">
                view all blog{' '}
              </Link>
            </div>
          </div>
          <div className="">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="h-full w-full"
            >
              <CarouselContent className="-mt-1 h-[200px]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-full">
                    <div className="h-full p-1">
                      <Card className="h-full rounded-lg">
                        <CardContent className="flex h-full items-center justify-center p-0">
                          <Image
                            src={'https://picsum.photos/200/150'}
                            alt="blablab"
                            width={0}
                            height={120}
                            className="flex w-full "
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
