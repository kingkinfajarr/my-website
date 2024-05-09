import { cn } from '@/lib'
import React from 'react'

type WorkCardProps = {
  className?: string
  children: React.ReactNode
}

export const CardWork = ({ children, className }: WorkCardProps) => {
  return (
    <div
      className={cn(
        'mb-4 w-full rounded-3xl bg-gradient-to-b from-green-900 to-green-500 p-8 backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}
