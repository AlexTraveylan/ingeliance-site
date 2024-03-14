import { Copyright, Facebook, Linkedin } from "lucide-react"

const socialEternLink = {
  facebook: "https://fr-fr.facebook.com/ingeliance/",
  linkedin: "https://fr.linkedin.com/company/ingeliance",
}

export const SocialBar = () => {
  const actualYear = new Date().getFullYear()
  return (
    <div className="bg-slate-950 flex py-5 justify-evenly">
      <div className="flex gap-1">
        <Copyright className="text-slate-500" />
        <p className="text-slate-500">
          {"ingeliance".toLocaleUpperCase()} {actualYear}
        </p>
      </div>
      <div className="flex gap-3">
        <a href={socialEternLink.facebook} target="_blank">
          <Facebook className="text-slate-500" />
        </a>
        <a href={socialEternLink.linkedin} target="_blank">
          <Linkedin className="text-slate-500" />
        </a>
      </div>
    </div>
  )
}
