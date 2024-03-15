"use client"

import { NavBar } from "@/components/navbar"
import { NavBarMobile } from "@/components/navbarMobile"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isWidthGreaterThan1080, setIsWidthGreaterThan1080] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1081px)")
    const handleChange = (e: any) => setIsWidthGreaterThan1080(e.matches)
    handleChange(mediaQuery)
    mediaQuery.addListener(handleChange)

    return () => mediaQuery.removeListener(handleChange)
  }, [])

  return (
    <header className="flex justify-between mx-5">
      <Link href="/" aria-label="Retour accueil">
        <Image src="/logo.webp" alt="Ingeliance" width={200} height={200} />{" "}
      </Link>

      <div className="flex gap-5 items-center justify-center">
        {isWidthGreaterThan1080 ? <NavBar /> : <NavBarMobile />}
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.webp" alt="Français" width={18} height={18} />
        </div>
      </div>
    </header>
  )
}
