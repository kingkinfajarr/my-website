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
import { cn } from '@/shared'
import ToggleTheme from '@/components/theme/toggle'

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
        <div className="fixed bottom-0 right-0 z-20 m-2 inline-flex  shadow-sm sm:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem] scale-100" />
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

    {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-0 right-0 z-20 m-2 inline-flex shadow-sm sm:hidden"
        >
          <PanelTopOpen className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <ul className="space-y-4 py-4">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink
                href={href}
                currentPath={pathname}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{name}</span>
              </NavigationLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet> */}

    {/* <ThemeToggle isMobile /> */}
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
        className={cn('sticky top-0 mx-auto hidden items-center py-8 sm:flex')}
      >
        <div className="rounded-full bg-primary p-3 shadow-md">
          <ul className=" flex w-full items-center rounded-lg">
            {navigations.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink
                  href={href}
                  currentPath={pathname}
                  isCollapse={isCollapse}
                >
                  <span className={cn({ 'sr-only': isCollapse })}>{name}</span>
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>

        <ToggleTheme />
      </nav>

      <MobileNavigation
        pathname={pathname}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}
