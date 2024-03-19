import { Button } from "@/components/ui/button"
import { motsClefs } from "@/lib/mots-clefs"
import Link from "next/link"

export type ActionButtonProps = {
  label: string
  href: string
  ariaLabel: string
}

export type FullWidthAreaProps = {
  imageUrlIndex: number
  title: string
  description?: string
  actions?: ActionButtonProps[]
  isMotclefs?: boolean
}

const imagesAccueilPossibles = ["/accueil1.webp", "/accueil2.webp"]

export const FullWidthArea = ({ imageUrlIndex, title, description, actions, isMotclefs }: FullWidthAreaProps) => {
  if (imageUrlIndex === 0) {
    return (
      <div className="bg-right bg-cover bg-[url('/accueil1.webp')] h-[480px] w-screen">
        <div className=" bg-sky-900/30 gap-5 flex items-start flex-col justify-center w-full h-full">
          <div className="min-w-[250px] max-w-[720px] flex gap-5 flex-col p-10 bg-slate-800/80">
            <h1 className="text-slate-100 font-bold text-4xl">{title.toUpperCase()}</h1>
            {description && <p className="text-slate-100 font-semibold">{description}</p>}
            {isMotclefs && (
              <p className="text-slate-100">
                <span className="font-semibold">{"Mots clefs : "}</span>
                {`${motsClefs.join(", ")}.`}
              </p>
            )}

            {actions && actions.length > 0 && (
              <>
                {actions.map((action) => {
                  return (
                    <Link
                      key={`fullArea${action.label}`}
                      href={action.href}
                      aria-label={action.ariaLabel}
                      className="flex items-center justify-center"
                    >
                      <Button>{action.label}</Button>
                    </Link>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (imageUrlIndex === 1) {
    return (
      <div className="bg-right bg-cover bg-[url('/accueil2.webp')] h-[400px] w-screen">
        <div className=" bg-sky-900/30 gap-5 flex items-center flex-col justify-center w-full h-full">
          <div className="min-w-[250px] max-w-[720px] flex gap-5 flex-col p-10 bg-slate-800/80">
            <h2 className="text-slate-100 font-bold text-4xl text-center">{title.toUpperCase()}</h2>
            {description && <p className="text-slate-100 font-semibold">{description}</p>}
            {actions && actions.length > 0 && (
              <>
                {actions.map((action) => {
                  return (
                    <Link
                      key={`fullArea${action.label}`}
                      href={action.href}
                      aria-label={action.ariaLabel}
                      className="flex items-center justify-center"
                    >
                      <Button>{action.label}</Button>
                    </Link>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
