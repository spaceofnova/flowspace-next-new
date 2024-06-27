import { createClient } from "@supabase/supabase-js";

const client = createClient(
  "https://olzoeydvhtxabbqaeykt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sem9leWR2aHR4YWJicWFleWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzQxNDQsImV4cCI6MjAyOTE1MDE0NH0.2F3VmingteKI5Tt9Ld1BXrIyTHL_ym6HxkGEw7KSR3Q"
);

const supabase = () => client;

export default supabase;
