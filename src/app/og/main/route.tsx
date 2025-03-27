/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { env } from '@/lib'

export const runtime = 'edge'

// const groteskRegular = fetch(
//   new URL('../../../public/fonts/SpaceGrotesk-Regular.ttf', import.meta.url),
// ).then((res) => res.arrayBuffer())

// const groteskBold = fetch(
//   new URL('../../../public/fonts/SpaceGrotesk-Bold.ttf', import.meta.url),
// ).then((res) => res.arrayBuffer())

export async function GET(request: NextRequest) {
  try {
    const siteUrl = env.url.website
    const logoUrl = `${siteUrl}/assets/main/logo-rounded.png`
    const { searchParams } = request.nextUrl
    const title = searchParams.get('title') || 'Software Developer'

    // Load font data
    // const [groteskRegularData, groteskBoldData] = await Promise.all([
    //   groteskRegular,
    //   groteskBold,
    // ])

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'radial-gradient(circle at center, #333 2px, transparent 0)',
              backgroundSize: '30px 30px',
              opacity: 0.2,
            }}
          />

          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Logo */}
            <img
              src={logoUrl}
              alt="Logo"
              width="120"
              height="120"
              style={{
                marginBottom: '20px',
                borderRadius: '60px',
              }}
            />

            {/* Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '60px',
                  fontFamily: 'Space Grotesk Bold',
                  color: '#fff',
                  margin: '0 0 20px 0',
                  lineHeight: 1.2,
                  maxWidth: '800px',
                }}
              >
                {title}
              </h1>
            </div>

            {/* Website URL */}
            <p
              style={{
                fontSize: '28px',
                fontFamily: 'Space Grotesk Regular',
                color: '#888',
                margin: 0,
              }}
            >
              kingkinfajarr.dev
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          // {
          //   name: 'Space Grotesk Regular',
          //   data: groteskRegularData,
          //   style: 'normal',
          // },
          // {
          //   name: 'Space Grotesk Bold',
          //   data: groteskBoldData,
          //   style: 'normal',
          // },
        ],
      },
    )
  } catch (error) {
    console.error(error)
    return new Response(`Failed to generate image: ${error}`, {
      status: 500,
    })
  }
}
