import { Button } from "@/components/ui/button"

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

const imagesAccueilPossibles = ["/accueil1.jpg"]

export const FullWidthArea = ({ imageUrlIndex, title, description, action }: FullWidthAreaProps) => {
  if (imageUrlIndex === 0) {
    return (
      <div className="bg-right bg-cover bg-[url('/accueil1.jpg')] h-[536px] w-screen">
        <div className=" bg-sky-900/30 gap-5 flex items-start flex-col justify-center w-full h-full">
          <div className="min-w-[250px] max-w-[720px] flex gap-5 flex-col px-10">
            <h2 className="text-slate-200 font-bold text-4xl">{title.toUpperCase()}</h2>
            {description && <p className="text-slate-200 font-semibold">{description}</p>}
            {action && <Button>{action.label}</Button>}
          </div>
        </div>
      </div>
    )
  }
}
