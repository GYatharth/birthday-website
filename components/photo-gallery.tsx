"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react"

interface Photo {
  id: number
  src: string
  caption: string
  story: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/romantic-couple-selfie.png",
    caption: "Our First Selfie Together",
    story: "The day we knew we were meant to be ❤️",
  },
  {
    id: 2,
    src: "/sunset-beach-couple.png",
    caption: "Sunset Beach Walk",
    story: "Walking hand in hand as the sun painted the sky pink",
  },
  {
    id: 3,
    src: "/couple-sharing-ice-cream.jpg",
    caption: "Ice Cream Date",
    story: "You stole my heart and my ice cream that day!",
  },
  {
    id: 4,
    src: "/couple-in-park-with-flowers.jpg",
    caption: "Flower Garden Adventure",
    story: "Among all the flowers, you were the most beautiful",
  },
  {
    id: 5,
    src: "/couple-cooking.png",
    caption: "Cooking Disaster",
    story: "We burned dinner but made perfect memories",
  },
  {
    id: 6,
    src: "/couple-watching-movie.png",
    caption: "Movie Night Cuddles",
    story: "I never watched the movie, I was too busy looking at you",
  },
  {
    id: 7,
    src: "/couple-dancing.png",
    caption: "Our First Dance",
    story: "Dancing like nobody was watching, loving like never before",
  },
  { id: 8, src: "/couple-with-pets.jpg", caption: "Family Photo", story: "Our little family of love and chaos" },
  {
    id: 9,
    src: "/couple-birthday-celebration.jpg",
    caption: "Last Birthday Together",
    story: "Making wishes that all came true because I have you",
  },
  {
    id: 10,
    src: "/couple-travel-adventure.jpg",
    caption: "Adventure Buddies",
    story: "Every journey is better with you by my side",
  },
  {
    id: 11,
    src: "/couple-laughing.png",
    caption: "Silly Moments",
    story: "Your laugh is my favorite sound in the world",
  },
  {
    id: 12,
    src: "/couple-stargazing.png",
    caption: "Under the Stars",
    story: "Making wishes on stars, but you were my wish come true",
  },
  {
    id: 13,
    src: "/placeholder-5b5oo.png",
    caption: "Morning Coffee Ritual",
    story: "Good morning kisses and coffee - perfect start to any day",
  },
  {
    id: 14,
    src: "/placeholder-o7mq4.png",
    caption: "Dancing in the Rain",
    story: "Getting soaked but feeling so alive with you",
  },
  {
    id: 15,
    src: "/placeholder-cujdg.png",
    caption: "Surprise!",
    story: "The look on your face when I surprised you - priceless",
  },
  {
    id: 16,
    src: "/placeholder-lgjgh.png",
    caption: "Cozy Winter Days",
    story: "Wrapped in blankets and wrapped in your love",
  },
  {
    id: 17,
    src: "/placeholder-qfxys.png",
    caption: "Spring Blossoms",
    story: "Like flowers blooming, our love keeps growing",
  },
  {
    id: 18,
    src: "/placeholder-pdkc1.png",
    caption: "Summer Adventures",
    story: "Hot days, cool nights, and warm hearts",
  },
  {
    id: 19,
    src: "/placeholder-a3i0x.png",
    caption: "Autumn Colors",
    story: "Falling leaves, falling deeper in love",
  },
  {
    id: 20,
    src: "/placeholder-w84vj.png",
    caption: "Dreaming Together",
    story: "Planning our forever, one dream at a time",
  },
]

export default function PhotoGallery({ onClose }: { onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const currentPhoto = photos[currentIndex]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 z-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-pink-600 font-[var(--font-dancing-script)]">
          Our Beautiful Memories 💕
        </h1>
        <Button onClick={onClose} variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
          <X size={24} />
        </Button>
      </div>

      {/* Main Gallery */}
      <div className="container mx-auto px-4 py-8">
        {/* Current Photo Display */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
            <div className="relative">
              <img
                src={currentPhoto.src || "/placeholder.svg"}
                alt={currentPhoto.caption}
                className="w-full h-96 object-cover rounded-2xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setShowFullscreen(true)}
              />

              {/* Navigation Arrows */}
              <Button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </Button>

              {/* Photo Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Photo Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-pink-700 mb-2 font-[var(--font-dancing-script)]">
                {currentPhoto.caption}
              </h3>
              <p className="text-gray-600 text-lg italic">{currentPhoto.story}</p>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-6 font-[var(--font-dancing-script)]">
            All Our Precious Moments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative cursor-pointer transition-all hover:scale-105 ${
                  index === currentIndex ? "ring-4 ring-pink-400" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-semibold truncate">{photo.caption}</p>
                </div>
                {index === currentIndex && (
                  <Heart className="absolute top-2 right-2 text-pink-400 animate-heartbeat" size={16} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={prevPhoto} className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full">
            Previous Memory
          </Button>
          <Button onClick={nextPhoto} className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-full">
            Next Memory
          </Button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={currentPhoto.src || "/placeholder.svg"}
              alt={currentPhoto.caption}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
            >
              <X size={20} />
            </Button>
          </div>
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
