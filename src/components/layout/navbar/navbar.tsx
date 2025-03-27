'use client'

import React from 'react'
import { navigationItems as navigations } from './items'
import { NavigationLink } from './link'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from 'react-feather'
import { useNavigationState } from '@/hooks/use-nav-state'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'

const MobileNavigation = ({
  pathname,
  isOpen,
  setIsOpen,
}: {
  pathname: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) => (
  <>
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div className="fixed right-0 top-0 z-20 mr-5 mt-5 block shadow-sm sm:hidden">
          <div className="rounded-md bg-g300 p-2">
            <Menu className=" h-[1.2rem] w-[1.2rem] scale-100" />
          </div>
          <span className="sr-only">Open menu</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-primary">
        <ul className=" flex w-full flex-col items-center rounded-lg p-2">
          {navigations.map(({ name, href }) => (
            <li key={name} className="mx-auto w-full px-2">
              <NavigationLink href={href} currentPath={pathname}>
                <span className="mx-auto">{name}</span>
              </NavigationLink>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  </>
)

type NavbarProps = {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { isCollapse, isOpen, setIsCollapse, setIsOpen } = useNavigationState()
  const pathname = usePathname()

  return (
    <>
      <nav
        className={cn(
          'hidden items-center justify-between border-b border-zinc-300 border-opacity-80 py-4 sm:flex',
        )}
      >
        {/* <div className="w-10 h-10 rounded-full bg-amber-100">
        </div> */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={55} height={55} />
        </Link>
        <div className="p-2 text-light">
          <ul className="flex w-full items-center">
            {navigations.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink
                  href={href}
                  currentPath={pathname}
                  isCollapse={isCollapse}
                >
                  <span className={cn('text-sm', { 'sr-only': isCollapse })}>
                    {name}
                  </span>
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <MobileNavigation
        pathname={pathname}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}
