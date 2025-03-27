import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  const getYearsNow = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className="flex items-center justify-between border-t py-4 sm:py-8">
      <span className="text-sm ">&copy; {getYearsNow()}</span>
      <Link
        href={'https://instagram.com/kingkinfajarr'}
        target="_blank"
        className="text-sm "
      >
        <span className="underline">@kingkinfajarr</span>{' '}
      </Link>
    </footer>
  )
}
