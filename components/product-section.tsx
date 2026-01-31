"use client"

import type { View } from "@/app/page"
import Image from "next/image"
import { Check, Disc } from "lucide-react"

interface ProductSectionProps {
  setCurrentView: (view: View) => void
}

export function ProductSection({ setCurrentView }: ProductSectionProps) {
  const features = [
    "Seamless hardware compatibility",
    "Built-in privacy protection",
    "Lightning-fast performance",
    "Regular security updates",
    "24/7 customer support",
    "Cross-platform sync",
  ]

  return (
    <section className="flex h-full items-center justify-center px-6">
      <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
              <Image
                src="/wml-os-box.jpg"
                alt="WML OS CD Box Package"
                width={400}
                height={400}
                className="rounded-lg object-contain"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-background/90 px-4 py-3 backdrop-blur-sm">
                <Disc className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Physical CD Included</p>
                  <p className="text-xs text-muted-foreground">Premium packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
            NEW RELEASE
          </div>

          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            WML OS
          </h2>

          <p className="mb-2 text-lg text-muted-foreground">
            Created by <span className="font-semibold text-foreground">Muhammad Burhan Shahzad</span>
          </p>

          <p className="mb-6 text-muted-foreground">
            The revolutionary operating system that combines the best of all worlds.
            Experience unparalleled accessibility, stunning visuals, and rock-solid security.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-3 w-3 text-green-500" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="text-3xl font-bold text-foreground">$299</span>
              <span className="ml-2 text-sm text-muted-foreground line-through">$399</span>
            </div>
            <button
              onClick={() => setCurrentView("checkout")}
              className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
