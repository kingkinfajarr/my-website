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
import { useIsLargeScreen } from '@/hooks'
import { cn } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { isLargeScreen } = useIsLargeScreen()

  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className={cn('mt-20', 'sm:mb-28 sm:mt-32')}>
          <Heading className="mx-0 sm:mx-12">
            <span
              className={cn(
                'mb-3 block text-[32px] font-semibold lowercase tracking-tighter text-gt400',
                'sm:text-[64px] ',
              )}
            >
              Kingkin Fajar.
            </span>
            <span
              className={cn(
                'block text-5xl font-bold leading-[49px] tracking-[-1.8px]',
                'sm:text-[88px] sm:leading-[88px] sm:tracking-tight',
              )}
            >
              Software Developer Specialized in Frontend Development.
            </span>
          </Heading>
          <p
            className={cn(
              'mx-0 mb-10 mt-4 max-w-[680px] text-xl leading-snug opacity-70 sm:mx-12',
              'sm:mt-9 sm:text-2xl sm:tracking-wide',
            )}
          >
            I am a software developer specialized in frontend development. I
            love to create simple and clean user interface design.
          </p>
        </section>

        <section className="mt-24">
          <Heading className={cn('flex text-4xl', ' sm:text-6xl')}>
            <span>🚀&nbsp;</span>
            <span>My Projects</span>
          </Heading>
          <p
            className={cn(
              'mb-10 mt-4 max-w-[680px] text-xl leading-snug opacity-70',
              'sm:mt-9 sm:text-2xl',
            )}
          >
            Some of the projects that I have worked on, from personal projects
            to working projects.
          </p>
          <div className={cn('grid w-full gap-3', 'sm:grid-cols-3')}>
            <div className="group relative transition-all duration-300 sm:col-span-2">
              <Image
                src={'https://picsum.photos/200/150'}
                alt="blablab"
                width={0}
                height={120}
                className="flex h-full w-full items-center rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="link-ke-detail-project"
                  className="text-center text-sm font-semibold lowercase underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-y-3 sm:col-span-1">
              <Image
                src={'https://picsum.photos/200/150'}
                alt="blablab"
                width={0}
                height={120}
                className="flex h-full w-full items-center rounded-lg object-cover"
              />
              <Image
                src={'https://picsum.photos/200/150'}
                alt="blablab"
                width={0}
                height={120}
                className="flex h-full w-full items-center rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <Link
          href={'/projects'}
          className="mt-4 rounded-lg bg-g400 px-4 py-2 text-center"
        >
          View all projects
        </Link>

        <section
          className={cn('my-20 grid grid-cols-1 gap-4', 'sm:grid-cols-2')}
        >
          <div className="col-span-1 flex items-start">
            <div className="flex flex-col text-left">
              <Heading variant={'h2'}>sometimes also write what I love</Heading>
              <Link href={'/blog'} className="my-2 text-sm underline">
                view all blog{' '}
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation={isLargeScreen ? 'vertical' : 'horizontal'}
              className="max-h-32 sm:max-h-full"
            >
              <CarouselContent className="-mt-1 h-36">
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-full">
                    <div className="max-h-32 sm:max-h-full">
                      <Card className="max-h-32 rounded-lg sm:max-h-full">
                        <CardContent className="flex h-32 items-center justify-center p-0 sm:max-h-full">
                          <Image
                            src={'https://picsum.photos/200/150'}
                            alt="blablab"
                            width={0}
                            height={128}
                            className="flex h-full w-full rounded-lg object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={isLargeScreen ? 'flex' : 'hidden'} />
              <CarouselNext className={isLargeScreen ? 'flex' : 'hidden'} />
            </Carousel>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
