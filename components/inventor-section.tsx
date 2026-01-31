"use client"

import type { View } from "@/app/page"
import Image from "next/image"
import { Monitor, Sparkles, Shield, ArrowRight } from "lucide-react"

interface InventorSectionProps {
  setCurrentView: (view: View) => void
}

export function InventorSection({ setCurrentView }: InventorSectionProps) {
  const agenda = [
    {
      icon: Monitor,
      title: "Accessibility like Windows",
      description: "Intuitive interface that everyone can use, regardless of technical expertise",
    },
    {
      icon: Sparkles,
      title: "Luxury like Mac",
      description: "Premium design aesthetics and seamless user experience",
    },
    {
      icon: Shield,
      title: "Security like Linux",
      description: "Enterprise-grade protection keeping your data safe",
    },
  ]

  return (
    <section className="flex h-full items-center justify-center px-6">
      <div className="grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
            THE VISIONARY
          </div>

          <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Muhammad Burhan Shahzad
          </h2>

          <p className="mb-2 text-lg text-accent">Inventor & Creator of WML OS</p>

          <p className="mb-8 text-muted-foreground">
            With a vision to revolutionize the computing experience, Muhammad Burhan Shahzad
            set out to create an operating system that would bridge the gap between accessibility,
            aesthetics, and security. The result is WML OS.
          </p>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">The Agenda</h3>
            <div className="space-y-4">
              {agenda.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-muted-foreground/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentView("product")}
            className="group flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
          >
            View the Product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/inventor.jpeg"
                alt="Muhammad Burhan Shahzad - Inventor of WML OS"
                width={450}
                height={550}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                <p className="text-lg font-semibold text-foreground">Muhammad Burhan Shahzad</p>
                <p className="text-sm text-muted-foreground">Founder & Inventor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
