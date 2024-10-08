"use client";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";

/**
 * TOPページ
 */
export default function Home() {
  const { session, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Welcome: {session?.user?.name}</div>
      <LogoutButton />
    </main>
  );
}
