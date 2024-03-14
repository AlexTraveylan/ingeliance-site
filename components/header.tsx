import { NavigationMenuDemo } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex justify-between mx-5">
      <Link href="/">
        <Image src="/logo.png" alt="Ingeliance" width={200} height={200} />{" "}
      </Link>

      <div className="flex gap-5">
        <NavigationMenuDemo />
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.png" alt="Français" width={18} height={18} />
        </div>
      </div>
    </header>
  )
}
