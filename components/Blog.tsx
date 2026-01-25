import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlitchElement from './GlitchElement';
import Section from './Section';
import { ContentData, ApiPost } from '../types';
import { fetchPosts } from '../services/blog';

interface BlogProps {
  content: ContentData['blog'];
}

const Blog: React.FC<BlogProps> = ({ content }) => {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        // 只显示最新的 3 篇文章
        setPosts(data.slice(0, 3));
      } catch (err) {
        console.error('Failed to load posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Section id="blog">
      <GlitchElement>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-black flex-grow"></div>
          <h2 className="text-3xl font-bold uppercase tracking-wider bg-brand px-4 py-1">{content.title}</h2>
          <div className="h-px bg-black flex-grow"></div>
        </div>
      </GlitchElement>

      <div className="space-y-4">
        {loading ? (
          // 加载骨架屏 - 显示3个占位项
          Array.from({ length: 3 }).map((_, idx) => (
            <GlitchElement key={idx} delay={idx * 0.1}>
              <div className="bg-white border-l-4 border-gray-200 pl-6 py-6 animate-pulse">
                <div className="grid md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="md:col-span-7">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                  </div>
                  <div className="md:col-span-3"></div>
                </div>
              </div>
            </GlitchElement>
          ))
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-gray-500 font-mono">
            {content.noPosts}
          </div>
        ) : (
          posts.map((post, idx) => (
            <GlitchElement key={post.id} delay={idx * 0.1}>
              <Link 
                to={`/blog/${post.id}`}
                className="group block relative bg-white border-l-4 border-gray-200 hover:border-black pl-6 py-6 transition-all"
              >
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  {/* 日期 */}
                  <div className="md:col-span-2 font-mono text-sm text-gray-400 pt-0.5">
                    {post.date}
                  </div>
                  
                  {/* 标题与摘要 */}
                  <div className="md:col-span-7">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    {/* 标签 */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* 阅读更多 */}
                  <div className="md:col-span-3 text-right hidden md:block">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 inline-block text-gray-800">
                      {content.readMore} →
                    </span>
                  </div>
                </div>
                
                {/* 悬停时的底部装饰线 */}
                <div className="absolute bottom-0 left-6 right-0 h-px bg-gray-200 group-hover:bg-black transition-colors"></div>
              </Link>
            </GlitchElement>
          ))
        )}
      </div>

      <GlitchElement delay={0.3} className="mt-12 flex justify-center">
        <Link 
          to={content.blogLink}
          className="group relative px-8 py-4 bg-black text-white font-bold font-mono text-sm uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300"
        >
          <span className="relative z-10">{content.viewAll}</span>
          <div className="absolute inset-0 bg-brand translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
        </Link>
      </GlitchElement>
    </Section>
  );
};

export default Blog;
