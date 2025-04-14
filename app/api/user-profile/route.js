import connectToDB from "@/lib/mongodb"
import User from "@/models/User"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

// GET - fetch user profile
export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      displayName: user.displayName || user.username,
      username: user.username,
      avatar: user.avatar || "",
      bio: user.bio || "",
    })
  } catch (error) {
    return NextResponse.json({ message: "Error fetching profile: " + error.message }, { status: 500 })
  }
}

// PUT - update user profile
export async function PUT(request) {
  try {
    const body = await request.json()
    const { displayName, avatar, bio } = body

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    user.displayName = displayName || user.displayName
    user.avatar = avatar || user.avatar
    user.bio = bio || user.bio

    await user.save()

    return NextResponse.json({
      displayName: user.displayName || user.username,
      username: user.username,
      avatar: user.avatar || "",
      bio: user.bio || "",
    })
  } catch (error) {
    return NextResponse.json({ message: "Error updating profile: " + error.message }, { status: 500 })
  }
}

// DELETE - delete user account
export async function DELETE() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Delete the user from the database
    await User.deleteOne({ email: session.user.email })

    return NextResponse.json({ message: "User account deleted successfully" })
  } catch (error) {
    return NextResponse.json({ message: "Error deleting account: " + error.message }, { status: 500 })
  }
}
