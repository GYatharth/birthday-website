"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Heart, Gift, Lock, Unlock, Sparkles, Star } from "lucide-react"

export default function GiftUnlock({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showError, setShowError] = useState(false)
  const [attempts, setAttempts] = useState(0)

  const correctPassword = "07022025"

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsUnlocked(true)
      setShowError(false)
    } else {
      setShowError(true)
      setAttempts(attempts + 1)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit()
    }
  }

  const getHint = () => {
    if (attempts >= 2) {
      return "Hint: Think about a special date... 💕"
    }
    return ""
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 z-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-pink-600 font-[var(--font-dancing-script)]">
          {isUnlocked ? "Your Special Gift! 🎁" : "Unlock Your Gift 🔐"}
        </h1>
        <Button onClick={onClose} variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
          <X size={24} />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        {!isUnlocked ? (
          /* Password Entry */
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl rounded-3xl">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Gift className="text-pink-600 animate-bounce" size={64} />
                    <Lock className="absolute -top-2 -right-2 text-red-500" size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-purple-600 mb-4 font-[var(--font-dancing-script)]">
                  Almost There!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Enter the special password to unlock your final surprise! 💝
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-center text-lg py-3 border-2 border-pink-300 focus:border-pink-500 rounded-xl"
                  />
                </div>

                {showError && (
                  <div className="text-red-500 text-sm animate-bounce">Oops! That's not right. Try again! 💕</div>
                )}

                {getHint() && <div className="text-purple-600 text-sm italic animate-pulse">{getHint()}</div>}

                <Button
                  onClick={handlePasswordSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-xl text-lg font-semibold"
                >
                  Unlock Gift 🔓
                </Button>
              </div>

              <div className="mt-6 text-xs text-gray-500">💡 Think about something special between us...</div>
            </Card>
          </div>
        ) : (
          /* Unlocked Gift Content */
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Sparkles className="text-yellow-500 animate-bounce" size={40} />
                <Unlock className="text-green-500 animate-heartbeat" size={48} />
                <Sparkles className="text-yellow-500 animate-bounce" size={40} />
              </div>
              <h2 className="text-5xl font-bold text-pink-600 mb-4 font-[var(--font-dancing-script)] animate-glow">
                Congratulations bachchaaa! 🎉
              </h2>
              <p className="text-xl text-purple-600 font-semibold">You've unlocked the most precious gift of all...</p>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 to-pink-50 shadow-2xl rounded-3xl border-4 border-pink-200 relative overflow-hidden animate-heartbeat">
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <Heart className="mx-auto mb-4 text-red-500 animate-heartbeat" size={48} fill="currentColor" />
                  <h3 className="text-4xl font-bold text-pink-600 mb-6 font-[var(--font-dancing-script)]">
                    This is your Gift: Me and my Promises to You...
                  </h3>
                </div>

                <div className="prose prose-lg max-w-none text-center">
                  <div className="text-gray-800 leading-relaxed font-[var(--font-dancing-script)] text-xl md:text-2xl space-y-6">
                    <p className="text-2xl md:text-3xl text-pink-600 font-bold">
                      "I promise to love you more each day than I did the day before."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <Card className="p-6 bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl">
                        <Heart className="mx-auto mb-3 text-red-500" size={32} fill="currentColor" />
                        <h4 className="text-lg font-bold text-red-700 mb-2">Forever & Always</h4>
                        <p className="text-red-600">
                          Through every season, every challenge, every joy - I'll be right here beside you.
                        </p>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                        <Star className="mx-auto mb-3 text-purple-500" size={32} fill="currentColor" />
                        <h4 className="text-lg font-bold text-purple-700 mb-2">Adventure Awaits</h4>
                        <p className="text-purple-600">
                          Let's explore the world together, create new memories, and chase our dreams as one.
                        </p>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl">
                        <Sparkles className="mx-auto mb-3 text-yellow-500" size={32} />
                        <h4 className="text-lg font-bold text-yellow-700 mb-2">Endless Laughter</h4>
                        <p className="text-yellow-600">
                          I promise to make you smile every day and laugh until your cheeks and stomach hurt.
                        </p>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl">
                        <Gift className="mx-auto mb-3 text-green-500" size={32} />
                        <h4 className="text-lg font-bold text-green-700 mb-2">Surprise & Delight</h4>
                        <p className="text-green-600">
                          Every day with you is a gift, and I'll keep surprising you with my love every second.
                        </p>
                      </Card>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl">
                      <p className="text-xl md:text-2xl text-purple-800 font-bold">
                        Happy Birthday, my beautiful umpkiee-pumpkiee cutiepie Dholi Ji! 🎂
                      </p>
                      <p className="text-lg text-purple-700 mt-2">
                        You are my greatest gift, my sweetest dream come true, and my forever love.. Wait for more gifts till tomorrow..
                      </p>
                      <p className="text-2xl mt-4 font-bold text-pink-600">I LOVE YOU SBSE SBSE JYADAAAAAAAA! 💕</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center mt-8 gap-4">
                  <Heart className="text-pink-400 animate-float" size={20} fill="currentColor" />
                  <Star className="text-yellow-400 animate-bounce" size={24} fill="currentColor" />
                  <Heart className="text-red-400 animate-heartbeat" size={24} fill="currentColor" />
                  <Star className="text-purple-400 animate-pulse" size={20} fill="currentColor" />
                  <Heart
                    className="text-pink-400 animate-float"
                    size={20}
                    fill="currentColor"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Keep This Memory Forever with you ji...💖
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Celebration Animation when unlocked */}
      {isUnlocked && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="text-pink-400" size={Math.random() * 15 + 10} fill="currentColor" />
              ) : i % 3 === 1 ? (
                <Star className="text-yellow-400" size={Math.random() * 15 + 10} fill="currentColor" />
              ) : (
                <Sparkles className="text-purple-400" size={Math.random() * 15 + 10} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Regular Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={`regular-${i}`}
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
