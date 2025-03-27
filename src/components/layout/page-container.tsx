import React from 'react'
import { Footer, Navbar } from '@/components'
import { cn } from '@/lib'

type PageContainerProps = {
  children?: React.ReactNode
  withNavbar?: boolean
  withFooter?: boolean
  className?: string
}

export const PageContainer = ({
  children,
  withNavbar,
  withFooter,
  className,
}: PageContainerProps) => (
  <section className={cn('flex min-h-screen w-full flex-col', className)}>
    {withNavbar && <Navbar />}
    {children}
    {withFooter && <Footer />}
  </section>
)
