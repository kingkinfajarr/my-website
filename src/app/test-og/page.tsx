// app/test-og/page.tsx
import { Metadata } from 'next'
import { generateSeoMeta } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = generateSeoMeta({
  title: 'Test OG Image',
  description: 'Testing OG image generation',
  customOg: {
    url: new URL('/test-og', baseUrl),
  },
})

export default function TestOGPage() {
  const ogImageUrl = `${baseUrl}/og/main?path=/test-og`

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Test OG Image Page</h1>
      <div className="space-y-4">
        <p>Current configuration:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Base URL: {baseUrl}</li>
          <li>OG Image URL: {ogImageUrl}</li>
        </ul>
        <div className="mt-4">
          <p>Test this page using:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(
                  `${baseUrl}/test-og`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Facebook Debugger
              </a>
            </li>
            <li>
              <a
                href={ogImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Direct OG Image
              </a>
            </li>
          </ul>
        </div>

        {/* Preview current OG Image */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold">Current OG Image Preview:</h2>
          <img
            src={ogImageUrl}
            alt="OG Image Preview"
            className="w-full max-w-2xl rounded-lg border border-gray-200 shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
