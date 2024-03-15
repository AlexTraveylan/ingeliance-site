import { navItems, navItemsSolo } from "@/lib/navBarContent"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-slate-800 flex justify-evenly items-center py-10 flex-wrap gap-5 px-5">
      <div className="flex items-center justify-center">
        <Image src="/footerLogo.webp" alt="Ingeliance" width={200} height={200} />
      </div>
      <div className="flex flex-col justify-center items-center text-slate-50">
        <ul>
          <li>
            <Link href="/" aria-label="retour accueil">
              {"Accueil".toUpperCase()}
            </Link>
          </li>
          {Object.keys(navItems).map((groupItem) => {
            return (
              <li key={`footer_${groupItem}`}>
                <Link href={navItems[groupItem][0].href} aria-label={navItems[groupItem][0].ariaLabel}>
                  {groupItem.toUpperCase()}
                </Link>
              </li>
            )
          })}
          {navItemsSolo.map((item) => {
            return (
              <li key={`footer_${item.title}`}>
                <Link href={item.href} aria-label={item.ariaLabel}>
                  {item.title.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center text-slate-50">
        <Link href="/mentions-legales" aria-label="Lire les mentions légales">
          Mentions légales
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center">
          <Image src="/drapeauFr.webp" alt="Français" width={18} height={18} />
        </div>
        <h2 className="text-slate-50">{"Français".toUpperCase()}</h2>
      </div>
    </footer>
  )
}
