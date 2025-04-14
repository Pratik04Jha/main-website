import connectToDB from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    const { username, email, password } = await req.json()

    await connectToDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return new Response("User already exists", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    return new Response(JSON.stringify(newUser), {
      status: 201,
    })
  } catch (error) {
    return new Response("Error creating user: " + error.message, {
      status: 500,
    })
  }
}
