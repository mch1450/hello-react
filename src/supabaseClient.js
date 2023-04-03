import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fuvqupnrmsbkporizgfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1dnF1cG5ybXNia3Bvcml6Z2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMTU1NTAsImV4cCI6MTk5MjY5MTU1MH0.PQsTI0tPbOK0mbkD_bM-oGLSARYIvPlq9FkUPeTUSsk";

export const supabase = createClient(supabaseUrl, supabaseKey);