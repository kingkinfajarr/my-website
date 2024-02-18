import { PageContainer } from '@/components'

export default function Home() {
  return (
    <PageContainer withFooter withNavbar>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-8xl font-bold leading-tight tracking-tight text-red-600">
          Kingkin Fajar, Frontend Web & Mobile Developer
        </h1>
      </main>
    </PageContainer>
  )
}
