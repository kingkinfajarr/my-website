import { PageContainer } from '@/components'
import React from 'react'
// import { allProjects } from 'contentlayer/generated'

export default function Page() {
  // const projects = allProjects.sort((a, b) => b.position - a.position)
  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <p className="text-red-600">Projects Page</p>
      </main>
    </PageContainer>
  )
}
