import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/configs/supabase";

// supabaseClient
export const supabaseClient = createClient(
  supabaseConfig.projectUrl,
  supabaseConfig.apiKey
);
