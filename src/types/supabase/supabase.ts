import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabasetype";

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);
