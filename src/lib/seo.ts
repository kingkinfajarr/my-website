import type { Metadata } from 'next'

const config = {
  url: {
    website: process.env.NEXT_PUBLIC_SITE_URL || 'https://kingkinfajarr.dev',
  },
  author: {
    name: 'Kingkin Fajar',
    twitter: '@kingkinfajarr',
  },
}

type SeoProps = Metadata & {
  customOg?: {
    url: URL
    hideTitle?: boolean
    imagePath?: string
  }
}

const defaultContent = {
  title: config.author.name,
  description:
    'A software developer specialized in frontend development. I love to create simple and clean user interface design.',
  keywords: ['developer', 'typescript', 'react', 'next.js'],
  ogImageDimensions: {
    width: 1200,
    height: 630,
  },
}

const defaultMeta: Metadata = {
  metadataBase: new URL(config.url.website),
  title: {
    default: defaultContent.title,
    template: `%s | ${defaultContent.title}`,
  },
  description: defaultContent.description,
  keywords: defaultContent.keywords,
  authors: [{ name: config.author.name }],
  alternates: {
    canonical: config.url.website,
  },
  openGraph: {
    title: defaultContent.title,
    description: defaultContent.description,
    url: config.url.website,
    type: 'website',
    siteName: defaultContent.title,
    images: [
      {
        url: `/og/default`,
        width: defaultContent.ogImageDimensions.width,
        height: defaultContent.ogImageDimensions.height,
        alt: defaultContent.title,
      },
    ],
  },
  twitter: {
    creator: config.author.twitter,
    site: config.author.twitter,
    card: 'summary_large_image',
    images: [
      {
        url: `/og/default`,
        width: defaultContent.ogImageDimensions.width,
        height: defaultContent.ogImageDimensions.height,
        alt: defaultContent.title,
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
}

export const generateSeoMeta = (seo?: SeoProps): Metadata => {
  if (!seo) return defaultMeta

  if (seo.customOg) {
    const { url, hideTitle, imagePath } = seo.customOg
    // Ubah cara membuat imageUrl
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
    const imageUrl = new URL(
      imagePath
        ? `/og${imagePath}`
        : `/og/main?path=${url.pathname}${hideTitle ? '&hideTitle=true' : ''}`,
      baseUrl,
    ).toString()

    const imageMetadata = {
      url: imageUrl,
      width: defaultContent.ogImageDimensions.width,
      height: defaultContent.ogImageDimensions.height,
      alt: seo.title?.toString() || defaultContent.title,
    }

    const newOg: Metadata['openGraph'] = {
      ...defaultMeta.openGraph,
      url: url.toString(),
      images: [imageMetadata],
    }

    const newTwitter: Metadata['twitter'] = {
      ...defaultMeta.twitter,
      images: [imageMetadata],
    }

    return {
      ...defaultMeta,
      ...seo,
      openGraph: newOg,
      twitter: newTwitter,
    }
  }

  return { ...defaultMeta, ...seo }
}
