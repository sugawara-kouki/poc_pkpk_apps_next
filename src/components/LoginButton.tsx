"use client";
import useAuth from "@/hooks/useAuth";

const LoginButton = () => {
  const { login } = useAuth();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={login}
    >
      ログイン
    </button>
  );
};

export default LoginButton;
