import { ImageUrlProps } from "@/components/title-description-div"
import { Button } from "@/components/ui/button"
import { motsClefs } from "@/lib/mots-clefs"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"
import Link from "next/link"

export type ActionButtonProps = {
  label: string
  href: string
  ariaLabel: string
}

export type FullWidthAreaProps = {
  imageCover: ImageUrlProps
  title: string
  description?: string
  actions?: ActionButtonProps[]
  isMotclefs?: boolean
}

export const imagesAccueilPossibles: ImageUrlProps[] = [
  { url: "/accueil1.webp", alt: "image d'accueil avec des rouages" },
  { url: "/accueil2.webp", alt: "image d'accueil avec des gens qui travaillent" },
  { url: "/rseCover.webp", alt: "image d'accueil montrant une foret" },
]

const fullWidthAreaVariant = cva("bg-sky-900/30 gap-5 flex flex-col justify-center w-full h-full z-10 relative", {
  variants: {
    variant: {
      left: "items-start",
      center: "items-center",
      right: "items-end",
    },
  },
  defaultVariants: {
    variant: "center",
  },
})

export type FullWidthAreaVariantProps = FullWidthAreaProps & VariantProps<typeof fullWidthAreaVariant>

export const FullWidthArea = ({ imageCover, title, description, actions, isMotclefs, variant }: FullWidthAreaVariantProps) => {
  return (
    <div className="relative h-[550px] w-screen">
      <Image
        src={imageCover.url}
        alt={imageCover.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        quality={75}
        priority
        className="z-0"
      />
      <div className={cn(fullWidthAreaVariant({ variant }))}>
        <div className="min-w-[250px] max-w-[720px] max-h-[550px] flex gap-5 flex-col p-10 bg-slate-800/80 overflow-auto">
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
