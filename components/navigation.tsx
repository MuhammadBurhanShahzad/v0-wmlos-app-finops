"use client"

import type { View } from "@/app/page"
import { cn } from "@/lib/utils"

interface NavigationProps {
  currentView: View
  setCurrentView: (view: View) => void
}

export function Navigation({ currentView, setCurrentView }: NavigationProps) {
  const navItems: { label: string; view: View }[] = [
    { label: "Home", view: "home" },
    { label: "Product", view: "product" },
    { label: "Inventor", view: "inventor" },
  ]

  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6 md:px-12">
        <button
          onClick={() => setCurrentView("home")}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">W</span>
          </div>
          WML OS
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={cn(
                "text-sm font-medium transition-colors",
                currentView === item.view
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setCurrentView("checkout")}
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
        >
          Buy Now
        </button>
      </div>
    </header>
  )
}
