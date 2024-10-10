import { useSession, signIn, signOut } from "next-auth/react";

/**
 * 認証関連の処理をまとめたカスタムフック
 */
const useAuth = () => {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = !!session;

  const login = () => signIn("line", { callbackUrl: "/" });
  const logout = () => signOut();

  return {
    session,
    isLoading,
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
