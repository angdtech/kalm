import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function BlogPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_date', { ascending: false })

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles?.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.id}>
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="text-sm text-gray-500">
                {new Date(article.published_date).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}