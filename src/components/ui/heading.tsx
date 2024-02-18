import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared'

interface HeadingProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const headingVariants = cva('font-semibold', {
  variants: {
    variant: {
      h1: 'text-6xl',
      h2: 'text-5xl',
      h3: 'text-4xl',
      h4: 'text-3xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export const Heading = ({
  children,
  className,
  variant,
  ...props
}: HeadingProps) => {
  return React.createElement(
    variant ?? 'h1',
    { className: cn(headingVariants({ variant, className })), ...props },
    children,
  )
}
