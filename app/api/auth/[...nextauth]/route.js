import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // Add the redirectUri here
      authorizationUrl: 'https://github.com/login/oauth/authorize?scope=read:user',
      redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,  // Make sure this matches your registered GitHub redirect URI
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
