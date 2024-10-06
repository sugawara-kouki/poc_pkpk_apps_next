import { getServerSession } from "next-auth";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "../utils/options";
import { redirect } from "next/navigation";
import { supabase } from "@/types/supabase/supabase";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signIn");
  }
  // console.log(session?.user);

  // const { data, error } = await supabase
  //   .from("users")
  //   .upsert({ id: session?.user?., name: name })
  //   .select();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Welcome: {session?.user?.name}</div>
      <LogoutButton />
    </main>
  );
}
