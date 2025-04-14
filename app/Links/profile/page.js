"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import AvatarCarousel from "@/app/components/AvatarSlider"

export default function ProfilePage() {
  const { data: session, status, update } = useSession()
  const [displayName, setDisplayName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [bio, setBio] = useState("")
  const [editing, setEditing] = useState(false)
  const [message, setMessage] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      setDisplayName(session.user.name || "")
      setAvatar(session.user.image || "/placeholder.svg")  // Default avatar image
      setBio(session.user.bio || "")
    }
  }, [session])

  if (status === "loading") {
    return <div className="h-screen w-screen flex items-center justify-center text-white">Loading...</div>
  }

  if (!session) {
    redirect("/Links/SignIn")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/user-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ displayName, avatar, bio }),
      })

      if (res.ok) {
        // Update the session with new user data
        await update({
          ...session,
          user: {
            ...session.user,
            name: displayName,
            image: avatar,
            bio: bio,
          },
        })

        setEditing(false)
        setMessage("Profile updated successfully!")

        // Clear message after 3 seconds
        setTimeout(() => setMessage(""), 3000)
      } else {
        const data = await res.json()
        setMessage(`Error: ${data.message || "Something went wrong"}`)
      }
    } catch (error) {
      setMessage(`Error: ${error.message || "Failed to connect to server"}`)
    }
  }

  const handleDeleteAccount = async () => {
    if (!isDeleting) {
      setIsDeleting(true)
      setMessage("Are you sure? Click 'Delete Account' again to confirm.")
      return
    }

    try {
      const res = await fetch("/api/user-profile", {
        method: "DELETE",
      })

      if (res.ok) {
        setMessage("Account deleted successfully. Redirecting...")
        setTimeout(() => {
          router.push("/Links/SignIn")
        }, 2000)
      } else {
        const data = await res.json()
        setMessage(`Error: ${data.message || "Something went wrong"}`)
        setIsDeleting(false)
      }
    } catch (error) {
      setMessage(`Error: ${error.message || "Failed to connect to server"}`)
      setIsDeleting(false)
    }
  }

  const cancelEditing = () => {
    // Reset to original values
    if (session?.user) {
      setDisplayName(session.user.name || "")
      setAvatar(session.user.image || "/placeholder.svg") // Default avatar image
      setBio(session.user.bio || "")
    }
    setEditing(false)
    setMessage("")
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4 py-12">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            {!editing ? (
              avatar && (
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                />
              )
            ) : (
              <AvatarCarousel selectedAvatar={avatar} onAvatarChange={(url) => setAvatar(url)} />
            )}
          </div>

          {editing ? (
            <>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Your Bio"
                rows={3}
                className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-md font-semibold transition-colors bg-white text-black hover:bg-gray-200"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="flex-1 py-3 rounded-md font-semibold transition-colors bg-gray-700 text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-center">{displayName}</h2>
              <p className="text-sm text-center opacity-80">{bio}</p>

              <button
                type="button"
                onClick={() => setEditing(true)}
                className="w-full py-3 rounded-md font-semibold transition-colors bg-white text-black hover:bg-gray-200"
              >
                Edit Profile
              </button>
            </>
          )}

          {message && (
            <p className={`text-center text-sm mt-2 ${message.includes("Error") ? "text-red-400" : "text-green-400"}`}>
              {message}
            </p>
          )}

          {!editing && (
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="w-full py-3 rounded-md font-semibold transition-colors bg-red-600 text-white hover:bg-red-700 mt-4"
            >
              {isDeleting ? "Confirm Delete Account" : "Delete Account"}
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
