import { navItems, navItemsSolo } from "@/lib/navBarContent"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-slate-800 flex justify-evenly items-center py-10 flex-wrap gap-5 px-5">
      <div className="flex items-center justify-center">
        <Image src="/footerLogo.png" alt="Ingeliance" width={200} height={200} />
      </div>
      <div className="flex flex-col justify-center items-center text-slate-100">
        <ul>
          {Object.keys(navItems).map((groupItem) => {
            return (
              <li key={`footer_${groupItem}`}>
                <Link href={navItems[groupItem][0].href}>{groupItem.toUpperCase()}</Link>
              </li>
            )
          })}
          {navItemsSolo.map((item) => {
            return (
              <li key={`footer_${item.title}`}>
                <Link href={item.href}>{item.title.toUpperCase()}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center text-slate-100">
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.png" alt="Français" width={18} height={18} />
        </div>
        <h2 className="text-slate-100">{"Français".toUpperCase()}</h2>
      </div>
    </footer>
  )
}
