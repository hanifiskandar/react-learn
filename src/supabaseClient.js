import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghnmuywvztidcxsbakui.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdobm11eXd2enRpZGN4c2Jha3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyOTU0NjksImV4cCI6MjA2NTg3MTQ2OX0.gWxhep0sU2IE5dfUIuN0fQJTgy3DSzx-Iacvn-Z8ZP4";
export const supabase = createClient(supabaseUrl, supabaseKey);
