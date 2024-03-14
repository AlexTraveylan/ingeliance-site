"use client"

import { NavBar } from "@/components/navbar"
import { NavBarMobile } from "@/components/navbarMobile"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isWidthGreaterThan1080, setIsWidthGreaterThan1080] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWidthGreaterThan1080(window.innerWidth > 1080);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <header className="flex justify-between mx-5">
      <Link href="/">
        <Image src="/logo.png" alt="Ingeliance" width={200} height={200} />{" "}
      </Link>

      <div className="flex gap-5 items-center justify-center">
        {isWidthGreaterThan1080 ? <NavBar /> : <NavBarMobile />}
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.png" alt="Français" width={18} height={18} />
        </div>
      </div>
    </header>
  )
}
