"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { InventorSection } from "@/components/inventor-section"
import { CheckoutSection } from "@/components/checkout-section"
import { Navigation } from "@/components/navigation"

export type View = "home" | "product" | "inventor" | "checkout"

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("home")

  return (
    <main className="min-h-screen w-full bg-background overflow-y-auto">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="w-full">
        {currentView === "home" && <HeroSection setCurrentView={setCurrentView} />}
        {currentView === "product" && <ProductSection setCurrentView={setCurrentView} />}
        {currentView === "inventor" && <InventorSection setCurrentView={setCurrentView} />}
        {currentView === "checkout" && <CheckoutSection setCurrentView={setCurrentView} />}
      </div>
    </main>
  )
}
