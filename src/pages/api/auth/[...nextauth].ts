import NextAuth, { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { linkGqlAccount } from './link-gql-account';

export default NextAuth({
  // debug: true,
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },

  events: {
    async signIn(message) {
      await linkGqlAccount(message.user.email as string);
    },
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, ...token } as Session;
    },
  },
});
