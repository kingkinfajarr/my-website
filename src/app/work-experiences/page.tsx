import { PageContainer } from '@/components'
import React from 'react'

export default function Page() {
  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <p className="text-red-600">Work Page</p>
      </main>
    </PageContainer>
  )
}
