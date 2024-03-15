import { Button } from "@/components/ui/button"
import { motsClefs } from "@/lib/mots-clefs"
import Link from "next/link"

export type ActionButtonProps = {
  label: string
  href: string
}

export type FullWidthAreaProps = {
  imageUrlIndex: number
  title: string
  description?: string
  action?: ActionButtonProps
}

const imagesAccueilPossibles = ["/accueil1.jpg", "/accueil2.jpg"]

export const FullWidthArea = ({ imageUrlIndex, title, description, action }: FullWidthAreaProps) => {
  if (imageUrlIndex === 0) {
    return (
      <div className="bg-right bg-cover bg-[url('/accueil1.jpg')] h-[536px] w-screen">
        <div className=" bg-sky-900/30 gap-5 flex items-start flex-col justify-center w-full h-full">
          <div className="min-w-[250px] max-w-[720px] flex gap-5 flex-col px-10">
            <h2 className="text-slate-200 font-bold text-4xl">{title.toUpperCase()}</h2>
            {description && <p className="text-slate-200 font-semibold">{description}</p>}
            <p className="text-slate-200">{`Mots clefs : ${motsClefs.join(", ")}.`}</p>
            {action && (
              <Link href={action.href} className="flex items-center justify-center">
                <Button>{action.label}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (imageUrlIndex === 1) {
    return (
      <div className="bg-right bg-cover bg-[url('/accueil2.jpg')] h-[536px] w-screen">
        <div className=" bg-sky-900/30 gap-5 flex items-center flex-col justify-center w-full h-full">
          <div className="min-w-[250px] max-w-[720px] flex gap-5 flex-col px-10">
            <h2 className="text-slate-200 font-bold text-4xl text-center">{title.toUpperCase()}</h2>
            {description && <p className="text-slate-200 font-semibold">{description}</p>}
            {action && (
              <Link href={action.href} className="flex items-center justify-center">
                <Button>{action.label}</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
