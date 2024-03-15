"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { navItems, navItemsSolo } from "@/lib/navBarContent"
import { Menu } from "lucide-react"
import Link from "next/link"

export function NavBarMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-3 mx">
        <Accordion type="single" collapsible className="w-full">
          {Object.keys(navItems).map((groupItem) => {
            return (
              <AccordionItem key={`nav_mobile_${groupItem}`} value={groupItem}>
                <AccordionTrigger>{groupItem.toUpperCase()}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {navItems[groupItem].map((item) => {
                      return (
                        <li key={`nav_mobile_${item.title}`}>
                          <Link href={item.href} aria-label={item.ariaLabel}>
                            <h2>{item.title}</h2>
                            <h2 className="font-light">{item.description}</h2>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          })}
          {navItemsSolo.map((item) => {
            return (
              <AccordionItem key={`nav_mobile_${item.title}`} value={item.title}>
                <AccordionTrigger>{item.title.toUpperCase()}</AccordionTrigger>
                <AccordionContent>
                  <Link href={item.href} aria-label={item.ariaLabel}>
                    <h2>{item.title.toUpperCase()}</h2>
                    <h2 className="font-light">{item.description}</h2>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
