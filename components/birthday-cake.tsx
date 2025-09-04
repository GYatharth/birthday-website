"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Heart, Sparkles, Star } from "lucide-react"

interface Candle {
  id: number
  isLit: boolean
  x: number
  y: number
}

export default function BirthdayCake({ onClose }: { onClose: () => void }) {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, isLit: true, x: 30, y: 20 },
    { id: 2, isLit: true, x: 50, y: 15 },
    { id: 3, isLit: true, x: 70, y: 20 },
    { id: 4, isLit: true, x: 40, y: 25 },
    { id: 5, isLit: true, x: 60, y: 25 },
  ])

  const [allCandlesBlown, setAllCandlesBlown] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [showSurpriseMessage, setShowSurpriseMessage] = useState(false)

  const blowOutCandle = (candleId: number) => {
    console.log("[v0] Blowing out candle:", candleId) // Added debug logging
    setCandles((prev) => prev.map((candle) => (candle.id === candleId ? { ...candle, isLit: false } : candle)))
  }

  useEffect(() => {
    const allBlown = candles.every((candle) => !candle.isLit)
    if (allBlown && !allCandlesBlown) {
      setAllCandlesBlown(true)
      setShowFireworks(true)
      setTimeout(() => {
        setShowSurpriseMessage(true)
      }, 2000)
    }
  }, [candles, allCandlesBlown])

  const resetCake = () => {
    setCandles((prev) => prev.map((candle) => ({ ...candle, isLit: true })))
    setAllCandlesBlown(false)
    setShowFireworks(false)
    setShowSurpriseMessage(false)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 z-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-pink-600 font-[var(--font-dancing-script)]">Make a Birthday Wish! 🎂</h1>
        <Button onClick={onClose} variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
          <X size={24} />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          {!showSurpriseMessage ? (
            <>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-purple-600 mb-4 font-[var(--font-dancing-script)]">
                  Blow Out the Candles!
                </h2>
                <p className="text-lg text-gray-600">
                  Click on each candle to blow it out and make your wish come true! 🕯️
                </p>
              </div>

              {/* Birthday Cake */}
              <Card className="relative p-8 bg-gradient-to-br from-yellow-100 to-orange-100 shadow-2xl rounded-3xl mx-auto max-w-lg overflow-hidden">
                {/* Cake SVG */}
                <div className="relative">
                  <svg viewBox="0 0 300 200" className="w-full h-64">
                    {/* Cake Base */}
                    <ellipse cx="150" cy="180" rx="120" ry="15" fill="#8B4513" />

                    {/* Cake Layer 1 */}
                    <rect x="50" y="120" width="200" height="60" rx="10" fill="#FFB6C1" />
                    <ellipse cx="150" cy="120" rx="100" ry="15" fill="#FF69B4" />

                    {/* Cake Layer 2 */}
                    <rect x="70" y="80" width="160" height="50" rx="8" fill="#DDA0DD" />
                    <ellipse cx="150" cy="80" rx="80" ry="12" fill="#DA70D6" />

                    {/* Cake Layer 3 */}
                    <rect x="90" y="50" width="120" height="40" rx="6" fill="#F0E68C" />
                    <ellipse cx="150" cy="50" rx="60" ry="10" fill="#FFD700" />

                    {/* Decorative Elements */}
                    <circle cx="100" cy="150" r="3" fill="#FF1493" />
                    <circle cx="200" cy="140" r="3" fill="#FF1493" />
                    <circle cx="120" cy="100" r="2" fill="#FF69B4" />
                    <circle cx="180" cy="95" r="2" fill="#FF69B4" />
                    <circle cx="130" cy="70" r="2" fill="#FFB6C1" />
                    <circle cx="170" cy="65" r="2" fill="#FFB6C1" />

                    {/* Candles */}
                    {candles.map((candle) => (
                      <g key={candle.id}>
                        <g
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => blowOutCandle(candle.id)}
                        >
                          {/* Invisible larger click area */}
                          <rect
                            x={candle.x * 3 - 8}
                            y={candle.y - 15}
                            width="16"
                            height="40"
                            fill="transparent"
                            className="hover:fill-pink-100 hover:fill-opacity-20"
                          />

                          {/* Candle Stick */}
                          <rect x={candle.x * 3 - 2} y={candle.y} width="4" height="25" fill="#FFFACD" />

                          {/* Flame */}
                          {candle.isLit && (
                            <g className="animate-bounce">
                              <ellipse cx={candle.x * 3} cy={candle.y - 3} rx="4" ry="10" fill="url(#flameGradient)" />
                              <ellipse
                                cx={candle.x * 3}
                                cy={candle.y - 3}
                                rx="6"
                                ry="12"
                                fill="url(#flameGradient)"
                                opacity="0.3"
                              />
                            </g>
                          )}
                        </g>

                        {/* Smoke when blown out */}
                        {!candle.isLit && (
                          <g className="animate-float">
                            <circle cx={candle.x * 3} cy={candle.y - 5} r="1" fill="#D3D3D3" opacity="0.6" />
                            <circle cx={candle.x * 3 + 1} cy={candle.y - 8} r="1.5" fill="#D3D3D3" opacity="0.4" />
                            <circle cx={candle.x * 3 - 1} cy={candle.y - 12} r="1" fill="#D3D3D3" opacity="0.2" />
                          </g>
                        )}
                      </g>
                    ))}

                    {/* Gradient Definitions */}
                    <defs>
                      <radialGradient id="flameGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FF6347" />
                        <stop offset="100%" stopColor="#FF4500" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">
                    Candles remaining: {candles.filter((c) => c.isLit).length}
                  </p>
                  <div className="w-full bg-pink-200 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((5 - candles.filter((c) => c.isLit).length) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Card>

              {allCandlesBlown && (
                <div className="mt-6">
                  <Button
                    onClick={resetCake}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full"
                  >
                    Light Candles Again
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* Surprise Message */
            <Card className="p-8 bg-gradient-to-br from-yellow-100 to-pink-100 shadow-2xl rounded-3xl animate-heartbeat">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-6">
                  <Sparkles className="text-yellow-500 animate-bounce" size={32} />
                  <h2 className="text-4xl font-bold text-pink-600 font-[var(--font-dancing-script)]">
                    Your Wish Came True!
                  </h2>
                  <Sparkles className="text-yellow-500 animate-bounce" size={32} />
                </div>

                <div className="mb-6">
                  <p className="text-2xl text-purple-600 font-semibold mb-4 font-[var(--font-dancing-script)]">
                    🎉 Happiest Birthday, Beautiful! 🎉
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    May all your dreams come true this year! You deserve all the happiness, love, and magical moments
                    life has to offer. Here's to another year of adventures, laughter, and making beautiful memories
                    together!
                  </p>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  <Heart className="text-red-500 animate-heartbeat" size={24} fill="currentColor" />
                  <Star className="text-yellow-500 animate-bounce" size={24} fill="currentColor" />
                  <Heart className="text-pink-500 animate-heartbeat" size={24} fill="currentColor" />
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={resetCake}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
                  >
                    Make Another Wish
                  </Button>
                  <Button
                    onClick={onClose}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
                  >
                    Continue Celebration babes..
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <Sparkles className="text-yellow-400" size={Math.random() * 20 + 15} />
            </div>
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <Star className="text-pink-400" size={Math.random() * 15 + 10} fill="currentColor" />
            </div>
          ))}
        </div>
      )}

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float opacity-30"
            size={Math.random() * 15 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
