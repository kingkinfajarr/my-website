import React from 'react'
import Link, { type LinkProps } from 'next/link'

import { cn } from '@/shared/utils'

export const NavigationLink = ({
  href,
  currentPath,
  isCollapse,
  children,
  ...rest
}: {
  href: string
  currentPath: string
  isCollapse?: boolean
  children: React.ReactNode
} & LinkProps) => {
  const regEx = new RegExp(`^${href}`)
  const isActive = href === '/' ? currentPath === href : regEx.test(currentPath)

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-2 rounded-full px-5 py-2 font-medium tracking-wide transition-colors ',
        'text-white dark:text-black',
        {
          'bg-secondary': isActive,
        },
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
