import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let supabaseClient: SupabaseClient | null = null

export function getSupabaseClient() {
	if (supabaseClient) return supabaseClient

	const supabaseUrl =
		process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
	const supabaseKey =
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY

	if (!supabaseUrl || !supabaseKey) {
		console.warn("Supabase environment variables are missing.")
		return null
	}

	supabaseClient = createClient(supabaseUrl, supabaseKey)
	return supabaseClient
}
