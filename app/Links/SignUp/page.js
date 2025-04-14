"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AvatarCarousel from "@/app/components/AvatarSlider"
AvatarCarousel
export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer",
  })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAvatarChange = (url) => {
    setForm({ ...form, avatar: url })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Account created successfully! Redirecting to profile...")
        setForm({
          username: "",
          email: "",
          password: "",
          avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer",
        })
        setTimeout(() => router.push("/Links/profile"), 1500)
      } else {
        setMessage(`Error: ${data.message || "Something went wrong"}`)
      }
    } catch (error) {
      setMessage(`Error: ${error.message || "Failed to connect to server"}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl p-10 flex flex-col items-center gap-8"
      >
        <h1 className="text-4xl font-bold text-center tracking-wide">Sign Up</h1>

        {/* Avatar Carousel */}
        <AvatarCarousel selectedAvatar={form.avatar} onAvatarChange={handleAvatarChange} />

        {message && (
          <div
            className={`p-3 rounded-md ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
          >
            {message}
          </div>
        )}

        {/* Input Fields */}
        <div className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />

          <button
            type="submit"
            className="bg-white text-black font-semibold rounded-md py-2 px-4 hover:bg-gray-200 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </div>

        <p className="text-center mt-2 text-sm">
          Already have an account?{" "}
          <Link href="/Links/SignIn" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  )
}
