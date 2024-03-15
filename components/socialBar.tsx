import { Copyright, Linkedin, Twitter } from "lucide-react"

const socialEternLink = {
  twitter: "https://twitter.com/ingeliance/",
  linkedin: "https://fr.linkedin.com/company/ingeliance",
}

export const SocialBar = () => {
  const actualYear = new Date().getFullYear()
  return (
    <div className="bg-slate-950 flex py-5 justify-evenly">
      <div className="flex gap-1">
        <Copyright className="text-slate-300" />
        <p className="text-slate-300">
          {"ingeliance".toLocaleUpperCase()} {actualYear}
        </p>
      </div>
      <div className="flex gap-3">
        <a href={socialEternLink.twitter} target="_blank" aria-label="Lien vers le twitter d'ingeliance">
          <Twitter className="text-slate-300" />
        </a>
        <a href={socialEternLink.linkedin} target="_blank" aria-label="Lien vers le linkedin d'ingeliance">
          <Linkedin className="text-slate-300" />
        </a>
      </div>
    </div>
  )
}
