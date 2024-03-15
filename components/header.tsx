"use client"

import { NavBar } from "@/components/navbar"
import { NavBarMobile } from "@/components/navbarMobile"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect, useState } from "react"

export const Header = () => {
  const [isWidthGreaterThan1080, setIsWidthGreaterThan1080] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsWidthGreaterThan1080(window.innerWidth > 1080)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="flex justify-between mx-5">
      <Link href="/" aria-label="Retour accueil">
        <Image src="/logo.webp" alt="Ingeliance" width={200} height={200} />{" "}
      </Link>

      <div className="flex gap-5 items-center justify-center">
        <Suspense fallback={<Skeleton className="h-10 w-40" />}>{isWidthGreaterThan1080 ? <NavBar /> : <NavBarMobile />}</Suspense>
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.webp" alt="Français" width={18} height={18} />
        </div>
      </div>
    </header>
  )
}
