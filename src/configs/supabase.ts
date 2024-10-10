/**
 * supabaseのDBに接続するためのキー
 */
export const supabaseConfig = {
  projectUrl: process.env.SUPABASE_PROJECT_URL ?? "",
  apiKey: process.env.SUPABASE_API_SERVICE_ROLE_KEY ?? "",
} as const;
