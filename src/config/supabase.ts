import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// console.log(import.meta.env);
//@ts-ignore
export const supabase = createClient("https://hdrorwjmrqjjoujtklmo.supabase.co", supabaseKey);

// export const supabase = [];
