"use client";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

/**
 * サインイン済みのユーザのみがアクセス可能なページ
 */
export default function Home() {
  const { session, isAuthenticated } = useAuth();

  // 未ログインの場合はログイン画面にリダイレクト
  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src={
          session?.user?.image ??
          "https://placehold.jp/b0b0b0/ffffff/150x150.png?text=dummy"
        }
        width={200}
        height={200}
        alt="profile images"
      />
      <div>Welcome: {session?.user?.name}</div>
      <LogoutButton />
    </main>
  );
}
