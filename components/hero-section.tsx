"use client"

import type { View } from "@/app/page"
import { ArrowRight, Shield, Sparkles, Monitor } from "lucide-react"

interface HeroSectionProps {
  setCurrentView: (view: View) => void
}

export function HeroSection({ setCurrentView }: HeroSectionProps) {
  const features = [
    {
      icon: Monitor,
      title: "Windows Accessibility",
      description: "Familiar, intuitive interface",
    },
    {
      icon: Sparkles,
      title: "Mac Luxury",
      description: "Premium design experience",
    },
    {
      icon: Shield,
      title: "Linux Security",
      description: "Enterprise-grade protection",
    },
  ]

  return (
    <section className="flex h-full flex-col items-center justify-center px-6">
      <div className="flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Now Available
        </div>

        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          The future of
          <br />
          <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            operating systems
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Experience the perfect blend of accessibility, luxury, and security.
          WML OS redefines what an operating system can be.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => setCurrentView("product")}
            className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            Explore Product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => setCurrentView("inventor")}
            className="rounded-full border border-border bg-transparent px-8 py-3 font-medium text-foreground transition-all hover:bg-secondary"
          >
            Meet the Inventor
          </button>
        </div>
      </div>

      <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-muted-foreground/50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <feature.icon className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
