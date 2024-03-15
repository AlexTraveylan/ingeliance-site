"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { navItems } from "@/lib/navBarContent"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function SecteurActivite() {
  return (
    <div className="flex justify-center w-full py-5 bg-slate-200">
      <Carousel
        className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl"
        opts={{
          dragFree: true,
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <h1 className=" font-bold text-4xl text-center py-5">{"Secteurs d'activité".toUpperCase()}</h1>
        <CarouselContent className="-ml-2 md:-ml-4">
          {navItems["secteur"].map((secteurItem, index) => (
            <CarouselItem key={`carousel_secteur_${index}`} className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3">
              <div className="p-1">
                <Card className="aspect-square items-center justify-center flex flex-col">
                  <CardContent className="flex items-center justify-center mt-2">
                    {secteurItem?.img_url && <Image src={secteurItem.img_url} alt={secteurItem.title} width={500} height={330} />}
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <h2>{secteurItem.title}</h2>
                    <Link href={secteurItem.href} aria-label={secteurItem.ariaLabel}>
                      <Button>En savoir +</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
