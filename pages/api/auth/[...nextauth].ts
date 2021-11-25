import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, }) {
      // Save the user's profile data to the session
      const profilePic = session.user.image

      session.user.username = session.user.name.split(" ").join("").toLowerCase();
      session.user.uid = token.sub;
      session.user.profilePic = profilePic;

      return session;
    }
  }

});

