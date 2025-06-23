import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://teywtbmbtnoslimvzcip.supabase.co"; // 네 프로젝트 URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
