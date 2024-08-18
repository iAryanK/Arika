import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { compare } from "bcryptjs";
import { connectToDB } from "./lib/db";
import { User } from "./models/user.model";
import console from "console";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectToDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid credentials!");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        // @ts-ignore
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectToDB();
          const alreadyUser = await User.findOne({ email });

          if (alreadyUser) return true;

          const username = convertEmail(email as string);

          await User.create({
            firstName: name,
            email: email,
            image: image,
            authProviderId: id,
            username: username,
          });
          return true;
        } catch (error: any) {
          throw new Error("Error while creating user", error);
        }
      }

      if (account?.provider === "github") {
        try {
          const { email, name, image, id } = user;
          await connectToDB();
          const alreadyUser = await User.findOne({ email });

          if (alreadyUser) return true;

          const username = convertEmail(email as string);

          await User.create({
            firstName: name,
            email: email,
            image: image,
            authProviderId: id,
            username: username,
          });
          return true;
        } catch (error: any) {
          throw new Error("Error while creating user", error);
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});

function convertEmail(email: string) {
  const [username, domain] = email.split("@");
  const domainWithoutDot = domain.split(".").join("_");

  return `${username}_${domainWithoutDot}`;
}
