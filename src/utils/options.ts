import { SupabaseAdapter } from "@auth/supabase-adapter";
import { NextAuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_KEY!,
  }),
};
