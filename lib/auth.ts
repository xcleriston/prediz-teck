import { getSupabaseServer } from "./supabase-server";

export async function getUser() {
  const supabase = await getSupabaseServer();

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  return user;
}

export async function getSession() {
  const supabase = await getSupabaseServer();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
