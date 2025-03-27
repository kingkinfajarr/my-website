import { cn } from '@/lib'
import React from 'react'

type AboutCardProps = {
  className?: string
  children: React.ReactNode
}

export const Card = ({ children, className }: AboutCardProps) => {
  return (
    <div className={cn('rounded-md border bg-transparent p-4', className)}>
      {children}
    </div>
  )
}
