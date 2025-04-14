import connectToDB from "@/lib/mongodb"
import User from "@/models/User"

export async function GET(req, { params }) {
  try {
    const { username } = params

    await connectToDB()

    // Find the user by username
    const user = await User.findOne({ username })
    if (!user) {
      return new Response("User not found", { status: 404 })
    }

    // Return public user profile data
    return new Response(
      JSON.stringify({
        displayName: user.displayName || user.username,
        avatar: user.avatar || "",
        bio: user.bio || "",
      }),
      { status: 200 },
    )
  } catch (error) {
    return new Response("Error fetching user: " + error.message, { status: 500 })
  }
}
