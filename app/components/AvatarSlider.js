"use client"

import React, { useState, useRef } from "react"

// Avatar URLs from DiceBear
export const avatarUrls = [
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Easton",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Adrian",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Jameson",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Leo",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Jack",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Liliana",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Sara",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Leah",
]

export default function AvatarCarousel({ selectedAvatar, onAvatarChange }) {
  const initialIndex = avatarUrls.indexOf(selectedAvatar) !== -1
    ? avatarUrls.indexOf(selectedAvatar)
    : 0

  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const avatarRef = useRef(null)
  let startX = null

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % avatarUrls.length
    setCurrentIndex(newIndex)
    onAvatarChange(avatarUrls[newIndex])
  }

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + avatarUrls.length) % avatarUrls.length
    setCurrentIndex(newIndex)
    onAvatarChange(avatarUrls[newIndex])
  }

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    if (startX !== null) {
      const diff = startX - endX
      if (diff > 50) goToNext()
      else if (diff < -50) goToPrev()
    }
    startX = null
  }

  return (
    <div className="relative w-full flex items-center justify-center gap-6">
      <button
        type="button"
        onClick={goToPrev}
        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
      >
        ◀
      </button>

      <div
        className="w-28 h-28 overflow-hidden rounded-full border-4 border-white/30"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={avatarRef}
        >
          {avatarUrls.map((url, index) => (
            <img
              key={index}
              src={url || "/placeholder.svg"}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToNext}
        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
      >
        ▶
      </button>
    </div>
  )
}
