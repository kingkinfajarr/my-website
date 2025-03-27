import { PageContainer } from '@/components'
import { Heading } from '@/components/ui'
import React from 'react'

export default function Page() {
  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center ">
        <Heading variant={'h2'} className="flex h-full items-center">
          Coming soon...
        </Heading>
      </main>
    </PageContainer>
  )
}
