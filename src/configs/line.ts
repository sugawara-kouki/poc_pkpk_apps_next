/**
 * lineの認証機能を使用するためのキー
 */
export const lineConfig = {
  clientId: process.env.LINE_CLIENT_ID ?? "",
  clientSecret: process.env.LINE_CLIENT_SECRET ?? "",
};
