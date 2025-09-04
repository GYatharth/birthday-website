"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Heart, Mail } from "lucide-react"

export default function LoveLetter({ onClose }: { onClose: () => void }) {
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [showLetter, setShowLetter] = useState(false)

  const openLetter = () => {
    setShowEnvelope(false)
    setTimeout(() => {
      setShowLetter(true)
    }, 500)
  }

  const loveLetterText = `My Dearest Dholi Ji,

Happy Birthday to the most amazing person in my life! 🎉

As I sit here writing this letter, my heart is overflowing with so much love for you that I don't even know where to begin. You came into my life like a beautiful dream, and every day with you feels like a fairy tale.

Your smile lights up my entire world. When you laugh, it's like music to my ears - the most beautiful melody I've ever heard. Your eyes sparkle with such warmth and kindness that I get lost in them every single time I look at you.

Do you remember our first selfie together? I was so nervous, but you made everything feel so natural and perfect. That's just who you are - you make everything better just by being yourself, just like our fisrt kissiieee ji.

I love how we can be completely silly together, burning dishes and laughing about it until our stomachs hurt. I love our dates where I pretend to watch something else everytime...but I'm really just watching you, amazed by how lucky I am.

You call me your Genie, but honestly, you're MY EVERYTHING, my real "GENIE", the one who held me when I lost my all the trust and when I needed "LOVE" the most. You're my best friend, my partner in crime, my safe place, and my greatest adventure all rolled into one perfect girl.

I love you SBSE JYADAAAAAAA - more than all the stars in the sky, more than all the grains of sand on every beach, more than words could ever express.

On this special occasion, I want you to know that you deserve all the happiness in the world. You deserve to be celebrated not just today, but every single day. You are extraordinary, beautiful, kind, funny, and absolutely perfect just the way you are.

Thank you for being you. Thank you for loving me. Thank you for making every ordinary moment feel magical.

I can't wait to create a million more memories with you, to laugh until we cry, to dance in the rain, to grow old together while still acting like kids.

You are my forever and always, my today and all my tomorrows.

Happiest Birthday, my kuchu-puchu babieeee girl 🎂💕

All my love,
Yours Billu Ji❤️

P.S. - I hope this birthday is as special as you are, because you deserve nothing less than magic...and ofcourse me too ji ! ✨

Attachments - Lots of kisses and hugs and love...💕`

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 z-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-pink-600 font-[var(--font-dancing-script)]">
          A Letter From My Heart 💕
        </h1>
        <Button onClick={onClose} variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
          <X size={24} />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        {/* Envelope Animation */}
        {showEnvelope && (
          <div className="relative animate-float">
            <Card
              className="w-96 h-64 bg-gradient-to-br from-pink-200 to-red-200 shadow-2xl cursor-pointer hover:scale-105 transition-transform rounded-lg overflow-hidden"
              onClick={openLetter}
            >
              {/* Envelope Front */}
              <div className="relative w-full h-full">
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-red-300 to-pink-300 transform origin-top transition-transform duration-500 hover:rotate-12">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-48 border-r-48 border-t-32 border-l-transparent border-r-transparent border-t-red-400"></div>
                </div>

                {/* Envelope Body */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-200 to-red-200"></div>

                {/* Heart Seal */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full p-3 shadow-lg animate-heartbeat">
                  <Heart className="text-white" size={24} fill="currentColor" />
                </div>

                {/* Address */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p className="text-red-800 font-[var(--font-dancing-script)] text-lg font-semibold">
                    To: My Gorgeous + Cutest Dholi Ji ❤️
                  </p>
                  <p className="text-red-700 font-[var(--font-dancing-script)] text-sm mt-1">
                    From: Your Loving Billu Ji ❤️
                  </p>
                </div>

                {/* Click Instruction */}
                <div className="absolute top-4 right-4">
                  <Mail className="text-red-600 animate-bounce" size={20} />
                </div>
              </div>
            </Card>

            <p className="text-center mt-6 text-lg text-purple-600 font-[var(--font-dancing-script)] animate-pulse">
              Click the envelope to open your love letter! 💌
            </p>
          </div>
        )}

        {/* Love Letter */}
        {showLetter && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 to-pink-50 shadow-2xl rounded-3xl border-4 border-pink-200 relative overflow-hidden">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23000000 fillOpacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

              {/* Letter Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Heart className="text-pink-500 animate-heartbeat" size={32} fill="currentColor" />
                    <h2 className="text-4xl font-bold text-pink-600 font-[var(--font-dancing-script)]">
                      My Love Letter
                    </h2>
                    <Heart className="text-pink-500 animate-heartbeat" size={32} fill="currentColor" />
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-800 leading-relaxed font-[var(--font-dancing-script)] text-lg md:text-xl whitespace-pre-line">
                    {loveLetterText}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center mt-8 gap-4">
                  <Heart className="text-pink-400 animate-float" size={20} fill="currentColor" />
                  <Heart className="text-red-400 animate-heartbeat" size={24} fill="currentColor" />
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
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                Close Letter 💕
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
