import { createClient } from "@supabase/supabase-js";

// Get our credentials from the .env file
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Make sure our credentials exist
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables!");
}

// Create our Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);