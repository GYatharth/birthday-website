"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Heart, Star, Gift, Sparkles } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  funnyResponse: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your laugh", "Your cooking", "Everything!"],
    correctAnswer: 3,
    funnyResponse: "Obviously everything! How could I choose just one thing? 💕",
  },
  {
    id: 2,
    question: "What do I call you when you're being extra cute?",
    options: ["Cutie pie", "Kuchu-puchu", "Angel", "Sweetheart"],
    correctAnswer: 1,
    funnyResponse: "Kuchu-puchu! The cutest nickname for the cutest person! 🥰",
  },
  {
    id: 3,
    question: "What's our favorite activity together?",
    options: ["Watching movies/reels", "long Kissingggg", "Taking selfies and laughing..", "hugging a lot.."],
    correctAnswer: 2,
    funnyResponse: "I love doing everything together! Even burning food is fun with you! 😂",
  },
  {
    id: 4,
    question: "How much do I love you?",
    options: ["A lot", "So much", "To the moon and back", "SBSE JYADAAAAAAA!"],
    correctAnswer: 3,
    funnyResponse: "SBSE JYADAAAAAAA! More than words can express! ❤️",
  },
  {
    id: 5,
    question: "What makes you special?",
    options: ["Your kindness", "Your beauty", "Your heart", "You're perfect as you are"],
    correctAnswer: 2,
    funnyResponse: "Your beautiful heart makes everything about you perfect! 💖",
  },
]

const scratchMessages = [
  "You are my loveliee sunshine! ☀️",
  "I love your cutiieee smileeeeeeeee! 😄",
  "You make me complete! 💕",
  "Forever and alwaysss..! 💍",
  "Rotiiiii khaya kriye and juice piya kriye!!!👫",
  "My heart belongs only to you! ❤️",
  "Kisssiiiii chahiyeee....hugs bhi...💕",
  "I love you my kuchu-puchu ji❤️",
  "Parisssss....kisssiiiii😄"
]

export default function MiniGames({ onClose }: { onClose: () => void }) {
  const [currentGame, setCurrentGame] = useState<"menu" | "quiz" | "scratch">("menu")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFunnyResponse, setShowFunnyResponse] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Scratch card state
  const [scratchedAreas, setScratchedAreas] = useState<boolean[]>(new Array(6).fill(false))
  const [isScratching, setIsScratching] = useState(false)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }
    setShowFunnyResponse(true)

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowFunnyResponse(false)
      } else {
        setQuizCompleted(true)
        setShowResult(true)
      }
    }, 2500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFunnyResponse(false)
    setShowResult(false)
    setQuizCompleted(false)
  }

  const initScratchCard = (canvas: HTMLCanvasElement, index: number) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 100

    // Create scratch surface
    ctx.fillStyle = "#ff69b4"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add "Scratch me!" text
    ctx.fillStyle = "white"
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Scratch me!", canvas.width / 2, canvas.height / 2)

    ctx.globalCompositeOperation = "destination-out"
  }

  const scratch = (canvas: HTMLCanvasElement, x: number, y: number, index: number) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    ctx.beginPath()
    ctx.arc((x - rect.left) * scaleX, (y - rect.top) * scaleY, 20, 0, 2 * Math.PI)
    ctx.fill()

    // Check if enough area is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++
    }

    const scratchedPercentage = (transparentPixels / (canvas.width * canvas.height)) * 100

    if (scratchedPercentage > 30 && !scratchedAreas[index]) {
      const newScratchedAreas = [...scratchedAreas]
      newScratchedAreas[index] = true
      setScratchedAreas(newScratchedAreas)
    }
  }

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    setIsScratching(true)
    const canvas = canvasRefs.current[index]
    if (canvas) {
      scratch(canvas, e.clientX, e.clientY, index)
    }
  }

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!isScratching) return
    const canvas = canvasRefs.current[index]
    if (canvas) {
      scratch(canvas, e.clientX, e.clientY, index)
    }
  }

  const handleMouseUp = () => {
    setIsScratching(false)
  }

  useEffect(() => {
    if (currentGame === "scratch") {
      canvasRefs.current.forEach((canvas, index) => {
        if (canvas) {
          initScratchCard(canvas, index)
        }
      })
    }
  }, [currentGame])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 z-50 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-pink-600 font-[var(--font-dancing-script)]">Fun Games for My Love 💕</h1>
        <Button onClick={onClose} variant="ghost" size="icon" className="text-pink-600 hover:bg-pink-100">
          <X size={24} />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Game Menu */}
        {currentGame === "menu" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-purple-600 mb-4 font-[var(--font-dancing-script)]">
                Choose Your Adventure!
              </h2>
              <p className="text-lg text-gray-600">Let's have some fun together! Pick a game to play 🎮</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="p-8 bg-gradient-to-br from-pink-100 to-pink-200 hover:scale-105 transition-transform cursor-pointer shadow-xl rounded-3xl"
                onClick={() => setCurrentGame("quiz")}
              >
                <div className="text-center">
                  <Star className="mx-auto mb-4 text-pink-600 animate-bounce" size={64} />
                  <h3 className="text-2xl font-bold text-pink-800 mb-4 font-[var(--font-dancing-script)]">Love Quiz</h3>
                  <p className="text-pink-600 text-lg">
                    How well do you know us? Let's find out with some fun questions!
                  </p>
                </div>
              </Card>

              <Card
                className="p-8 bg-gradient-to-br from-purple-100 to-purple-200 hover:scale-105 transition-transform cursor-pointer shadow-xl rounded-3xl"
                onClick={() => setCurrentGame("scratch")}
              >
                <div className="text-center">
                  <Gift className="mx-auto mb-4 text-purple-600 animate-bounce" size={64} />
                  <h3 className="text-2xl font-bold text-purple-800 mb-4 font-[var(--font-dancing-script)]">
                    Scratch Cards
                  </h3>
                  <p className="text-purple-600 text-lg">Scratch to reveal hidden love messages just for you!</p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Quiz Game */}
        {currentGame === "quiz" && !showResult && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2 font-[var(--font-dancing-script)]">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </h2>
                <div className="w-full bg-pink-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {!showFunnyResponse ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className="w-full p-4 text-left bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 text-gray-800 rounded-xl border-2 border-transparent hover:border-pink-300 transition-all"
                        variant="ghost"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center animate-heartbeat">
                  <Heart className="mx-auto mb-4 text-pink-500" size={48} />
                  <p className="text-lg text-pink-600 font-semibold">{quizQuestions[currentQuestion].funnyResponse}</p>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Quiz Results */}
        {showResult && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
              <Sparkles className="mx-auto mb-4 text-yellow-500 animate-bounce" size={64} />
              <h2 className="text-3xl font-bold text-pink-600 mb-4 font-[var(--font-dancing-script)]">
                Quiz Complete!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                You got {score} out of {quizQuestions.length} questions right!
              </p>
              <p className="text-lg text-pink-600 mb-8 italic">
                But honestly, you're perfect no matter what the score says! 💕
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full">
                  Play Again
                </Button>
                <Button
                  onClick={() => setCurrentGame("menu")}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
                >
                  Back to Games
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Scratch Cards Game */}
        {currentGame === "scratch" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-600 mb-4 font-[var(--font-dancing-script)]">
                Scratch to Reveal Love Messages!
              </h2>
              <p className="text-lg text-gray-600">Use your finger or mouse to scratch off the pink surface 💕</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scratchMessages.map((message, index) => (
                <Card key={index} className="p-6 bg-white shadow-xl rounded-3xl">
                  <div className="relative">
                    <canvas
                      ref={(el) => (canvasRefs.current[index] = el)}
                      className="w-full h-24 rounded-lg cursor-pointer"
                      onMouseDown={(e) => handleMouseDown(e, index)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    />
                    {scratchedAreas[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg">
                        <p className="text-lg font-semibold text-purple-700 text-center animate-heartbeat">{message}</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => setCurrentGame("menu")}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                Back to Games
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 animate-float opacity-40"
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
