"use client"

import React, { useState } from "react"
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
          <button
            onClick={() => { setCurrentView("home"); setMenuOpen(false); }}
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

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentView("checkout")}
              className="hidden md:inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Buy Now
            </button>

            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden border-b border-border bg-background/95">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => { setCurrentView(item.view); setMenuOpen(false); }}
                className={cn(
                  "w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  currentView === item.view ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setCurrentView("checkout"); setMenuOpen(false); }}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </>
  )
}
