import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import GlitchElement from '../components/GlitchElement';
import { ContentData, Language } from '../types';
import { X } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-black selection:bg-brand">
      {/* Note: Navbar removed for this view to match screenshot aesthetic */}
      
      <div className="max-w-6xl mx-auto px-8 md:px-24 py-20 md:py-32">
        <GlitchElement>
            {/* Top Meta Row */}
            <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#EAEAEA] text-[#666666] px-3 py-1 text-xs font-bold tracking-wider">
                    NOTICES
                </span>
                <span className="text-[#999999] font-mono text-sm tracking-tight">
                    {post.date}
                </span>
            </div>

            {/* Title & Close Row */}
            <div className="flex justify-between items-start gap-12 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black font-sans leading-[1.1]">
                    {post.title}
                </h1>
                <Link 
                  to="/blog" 
                  className="text-black hover:opacity-60 transition-opacity pt-2"
                  aria-label="Close"
                >
                    <X size={48} strokeWidth={1.5} />
                </Link>
            </div>

            {/* Subtle Divider */}
            <div className="h-[1px] bg-[#EAEAEA] w-full mb-16" />

            {/* Content Area */}
            <article className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-p:text-[#333333] prose-p:leading-relaxed prose-blockquote:border-brand prose-blockquote:bg-subtle/20 prose-code:bg-gray-100 font-sans">
                <ReactMarkdown>{post.content || post.excerpt}</ReactMarkdown>
            </article>
            
            {/* Specific Bottom Left Decoration from screenshot */}
            <div className="mt-32 opacity-20">
               <div className="w-10 h-10 border border-black flex flex-col justify-center items-center gap-1.5 p-2">
                  <div className="w-5 h-[1.5px] bg-black"></div>
                  <div className="w-5 h-[1.5px] bg-black"></div>
                  <div className="w-3 h-[1.5px] bg-black self-start"></div>
               </div>
            </div>
        </GlitchElement>
      </div>
    </div>
  );
};

export default BlogPost;