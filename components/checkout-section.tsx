"use client"

import React from "react"

import type { View } from "@/app/page"
import { useState } from "react"
import { CreditCard, Lock, ArrowLeft, Check } from "lucide-react"

interface CheckoutSectionProps {
  setCurrentView: (view: View) => void
}

export function CheckoutSection({ setCurrentView }: CheckoutSectionProps) {
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Stripe integration placeholder - Payment would be processed here!")
  }

  return (
    <section className="flex h-full items-center justify-center px-6">
      <div className="w-full max-w-4xl">
        <button
          onClick={() => setCurrentView("product")}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Product
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Checkout</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Cardholder Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="card" className="mb-2 block text-sm font-medium text-foreground">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    id="card"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                  <CreditCard className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="mb-2 block text-sm font-medium text-foreground">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="mb-2 block text-sm font-medium text-foreground">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    placeholder="123"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Lock className="h-4 w-4" />
                Pay $299.00
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                Secured by Stripe (Placeholder)
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Order Summary</h3>

            <div className="mb-6 flex items-center gap-4 rounded-xl border border-border bg-secondary/50 p-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background">
                <span className="text-2xl font-bold text-foreground">W</span>
              </div>
              <div>
                <p className="font-medium text-foreground">WML OS</p>
                <p className="text-sm text-muted-foreground">Physical CD + Digital License</p>
              </div>
            </div>

            <div className="space-y-3 border-b border-border pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">WML OS License</span>
                <span className="text-foreground">$399.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Launch Discount</span>
                <span className="text-green-500">-$100.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">Free</span>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <span className="text-lg font-semibold text-foreground">Total</span>
              <span className="text-lg font-bold text-foreground">$299.00</span>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                Lifetime license included
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                Free updates for 2 years
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                30-day money back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
