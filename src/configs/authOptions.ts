import { SupabaseAdapter } from "@auth/supabase-adapter";
import { NextAuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";
import { lineConfig } from "@/configs/line";
import { supabaseConfig } from "@/configs/supabase";

export const authOptions: NextAuthOptions = {
  // サーバー側のログにAPIのレスポンスなどが表示される
  debug: false,
  session: { strategy: "jwt" },
  providers: [
    // LINE認証のためのプロバイダ
    LineProvider({
      clientId: lineConfig.clientId,
      clientSecret: lineConfig.clientSecret,
    }),
  ],
  // supabaseと連携するためのアダプタ
  adapter: SupabaseAdapter({
    url: supabaseConfig.projectUrl,
    secret: supabaseConfig.apiKey,
  }),
};
