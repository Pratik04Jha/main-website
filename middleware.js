// middleware.ts
export { default } from "next-auth/middleware"

// Optional: define which routes need auth
export const config = {
  matcher: ["/Links/profile"], // protect profile page for example
}
