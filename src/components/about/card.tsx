import { cn } from '@/shared'
import React from 'react'

type AboutCardProps = {
  className?: string
  children: React.ReactNode
}

export const Card = ({ children, className }: AboutCardProps) => {
  return (
    <div className={cn('rounded-md bg-secondary p-4', className)}>
      {children}
    </div>
  )
}
