/** @type {import('next').NextConfig} */
const nextConfig = {
  // 外部の画像を使用する場合の設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

export default nextConfig;
