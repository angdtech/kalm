import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://giidrygjpwortpcpbweb.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpaWRyeWdqcHdvcnRwY3Bid2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjQ3MzUsImV4cCI6MjA2NjkwMDczNX0.HBx4gnjhtdsaQED_dUoYG8GnNfMFlTcwBwzACUjxqHY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for your database
export type Article = {
  id: string
  title: string
  content: string
  slug: string
  excerpt: string | null
  author: string
  published_date: string
  word_count: number
  featured_image: string | null
  images: any[]
  status: string
  category: string | null
  tags: string[]
  seo_title: string | null
  seo_description: string | null
  original_url: string | null
  created_at: string
  updated_at: string
}