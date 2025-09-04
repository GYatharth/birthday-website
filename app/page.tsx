"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Music, MicOff as MusicOff, Gift, Cake, Gamepad2, Lock } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"
import MiniGames from "@/components/mini-games"
import LoveLetter from "@/components/love-letter"
import BirthdayCake from "@/components/birthday-cake"
import GiftUnlock from "@/components/gift-unlock"

export default function BirthdayPage() {
  const [showLoveQuestion, setShowLoveQuestion] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showMainContent, setShowMainContent] = useState(false)
  const [showPhotoGallery, setShowPhotoGallery] = useState(false)
  const [showMiniGames, setShowMiniGames] = useState(false)
  const [showLoveLetter, setShowLoveLetter] = useState(false)
  const [showBirthdayCake, setShowBirthdayCake] = useState(false)
  const [showGiftUnlock, setShowGiftUnlock] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Show love question after landing animation
    const timer = setTimeout(() => {
      setShowLoveQuestion(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleNoButtonHover = () => {
    const newX = Math.random() * (window.innerWidth - 100)
    const newY = Math.random() * (window.innerHeight - 50)
    setNoButtonPosition({ x: newX, y: newY })
  }

  const handleYesClick = () => {
    setShowLoveQuestion(false)
    setShowMainContent(true)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setMusicPlaying(!musicPlaying)
    }
  }

  const openPhotoGallery = () => {
    setShowPhotoGallery(true)
  }

  const closePhotoGallery = () => {
    setShowPhotoGallery(false)
  }

  const openMiniGames = () => {
    setShowMiniGames(true)
  }

  const closeMiniGames = () => {
    setShowMiniGames(false)
  }

  const openLoveLetter = () => {
    setShowLoveLetter(true)
  }

  const closeLoveLetter = () => {
    setShowLoveLetter(false)
  }

  const openBirthdayCake = () => {
    setShowBirthdayCake(true)
  }

  const closeBirthdayCake = () => {
    setShowBirthdayCake(false)
  }

  const openGiftUnlock = () => {
    setShowGiftUnlock(true)
  }

  const closeGiftUnlock = () => {
    setShowGiftUnlock(false)
  }

  if (showPhotoGallery) {
    return <PhotoGallery onClose={closePhotoGallery} />
  }

  if (showMiniGames) {
    return <MiniGames onClose={closeMiniGames} />
  }

  if (showLoveLetter) {
    return <LoveLetter onClose={closeLoveLetter} />
  }

  if (showBirthdayCake) {
    return <BirthdayCake onClose={closeBirthdayCake} />
  }

  if (showGiftUnlock) {
    return <GiftUnlock onClose={closeGiftUnlock} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 overflow-hidden relative">
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/perfect-ed-sheeran.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400 animate-fall opacity-70"
            size={Math.random() * 20 + 15}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-8 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-400"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Cartoon Mushrooms */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <div className="w-12 h-8 bg-red-400 rounded-t-full relative">
          <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-yellow-100 rounded-b-lg"></div>
        </div>
      </div>

      <div className="absolute bottom-16 right-20 animate-bounce" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-6 bg-purple-400 rounded-t-full relative">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-yellow-100 rounded-b-lg"></div>
        </div>
      </div>

      {/* Music Toggle */}
      <Button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-pink-400 hover:bg-pink-500 text-white rounded-full p-3"
      >
        {musicPlaying ? <Music size={20} /> : <MusicOff size={20} />}
      </Button>

      {/* Landing Page Content */}
      {!showLoveQuestion && !showMainContent && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Main Birthday Message */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-pink-500 animate-glow mb-4">Happy Birthday</h1>
            <div className="typewriter-container animate-typewriter text-4xl md:text-6xl font-bold text-purple-600 mx-auto">
              Dholi Ji ❤️
            </div>
          </div>

          {/* I Love You Animation */}
          <div className="animate-heartbeat">
            <p className="text-3xl md:text-5xl font-bold text-red-500 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              I LOVE YOU
            </p>
          </div>

          {/* Cute Message */}
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-md">
            Get ready for the most magical birthday surprise ever! ✨
          </p>
        </div>
      )}

      {/* Love Question Modal */}
      {showLoveQuestion && !showMainContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-8 max-w-md mx-4 text-center bg-white rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 animate-heartbeat">Do you love me? 💕</h2>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleYesClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                YES! 💖
              </Button>
              <Button
                onMouseEnter={handleNoButtonHover}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold animate-bounce-around"
                style={{
                  position: "absolute",
                  left: `${noButtonPosition.x}px`,
                  top: `${noButtonPosition.y}px`,
                  transition: "all 0.3s ease",
                }}
              >
                NO
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Success Message */}
      {showMainContent && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="animate-heartbeat mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">I LOVE YOU SBSE JYADAAAAAAA</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-purple-600">KUCHU-PUCHU JI 💕</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl">
            <Card
              className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 hover:scale-105 transition-transform cursor-pointer"
              onClick={openPhotoGallery}
            >
              <Gift className="mx-auto mb-4 text-pink-600" size={48} />
              <h3 className="text-xl font-semibold text-pink-800">Photo Gallery</h3>
              <p className="text-pink-600 mt-2">Our beautiful memories together</p>
            </Card>

            <Card
              className="p-6 bg-gradient-to-br from-green-100 to-green-200 hover:scale-105 transition-transform cursor-pointer"
              onClick={openMiniGames}
            >
              <Gamepad2 className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800">Fun Games</h3>
              <p className="text-green-600 mt-2">Play quiz and scratch cards</p>
            </Card>

            <Card
              className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 hover:scale-105 transition-transform cursor-pointer"
              onClick={openLoveLetter}
            >
              <Heart className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold text-purple-800">Love Letter</h3>
              <p className="text-purple-600 mt-2">My feelings for you</p>
            </Card>

            <Card
              className="p-6 bg-gradient-to-br from-red-100 to-red-200 hover:scale-105 transition-transform cursor-pointer"
              onClick={openBirthdayCake}
            >
              <Cake className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-semibold text-red-800">Birthday Cake</h3>
              <p className="text-red-600 mt-2">Make a wish!</p>
            </Card>
          </div>

          <Card
            className="mt-12 p-6 bg-gradient-to-br from-yellow-100 to-orange-200 hover:scale-105 transition-transform cursor-pointer shadow-xl rounded-3xl border-4 border-yellow-300 animate-pulse max-w-md"
            onClick={openGiftUnlock}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="text-orange-600 animate-bounce" size={32} />
              <Gift className="text-yellow-600 animate-heartbeat" size={40} />
              <Lock className="text-orange-600 animate-bounce" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-2 font-[var(--font-dancing-script)]">
              Special Gift Awaits!
            </h3>
            <p className="text-orange-700 text-lg">One final surprise is waiting for you... 🎁</p>
          </Card>
        </div>
      )}
    </div>
  )
}
