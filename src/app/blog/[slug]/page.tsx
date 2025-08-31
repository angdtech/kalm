import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export default async function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600 mb-8">
        By {article.author} • {new Date(article.published_date).toLocaleDateString()}
      </div>
      <div className="prose max-w-none">
        {article.content.split('\n\n').map((paragraph: string, index: number) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  )
}