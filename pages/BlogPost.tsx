import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import GlitchElement from '../components/GlitchElement';
import { ContentData, Language } from '../types';
import { ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  content: ContentData['blog'];
  navContent: ContentData['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
  scrollToSection: (id: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ content, navContent, lang, setLang, scrollToSection }) => {
  const { id } = useParams<{ id: string }>();
  const post = content.posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
           <h1 className="text-4xl font-bold mb-4">404 // DATA_NOT_FOUND</h1>
           <Link to="/blog" className="text-blue-600 underline hover:text-blue-800">Return to Archive</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        content={navContent} 
        scrollToSection={scrollToSection} 
      />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <GlitchElement>
            <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-black mb-8 transition-colors">
                <ArrowLeft size={16} /> BACK_TO_ARCHIVE
            </Link>
        </GlitchElement>

        <article>
            <GlitchElement delay={0.1}>
                <header className="mb-12 border-b-4 border-black pb-8">
                    <div className="flex items-center gap-4 font-mono text-sm text-gray-500 mb-4">
                        <span className="w-2 h-2 bg-brand inline-block"></span>
                        <span>LOG_ID: {String(post.id).padStart(3, '0')}</span>
                        <span>//</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
                </header>
            </GlitchElement>

            <GlitchElement delay={0.2}>
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-brand prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono font-sans text-gray-800">
                    <ReactMarkdown>{post.content || post.excerpt}</ReactMarkdown>
                </div>
            </GlitchElement>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;