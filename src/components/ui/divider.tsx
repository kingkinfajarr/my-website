import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib'

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

const dividerVariants = cva('my-20 h-px ', {
  variants: {
    variant: {
      solid: 'bg-zinc-300 bg-opacity-30',
      left: 'bg-gradient-to-l from-zinc-200 via-zinc-300 to-zinc-900',
      right: 'bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-900',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export const Divider = ({ className, variant, ...props }: DividerProps) => {
  return (
    <div className={cn(dividerVariants({ variant, className }))} {...props} />
  )
}
