import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { useBlogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const { id } = useParams();
  const blogPosts = useBlogPosts();

  // Loading state
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f6db0] mx-auto mb-4"></div>
          <p className="text-gray-600">{t('blog.loading')}</p>
        </div>
      </div>
    );
  }

  // If viewing a single post
  if (id) {
    const postId = parseInt(id);
    const post = blogPosts.find(p => p.id === postId);
    
    
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 font-cairo">
              {t('blog.articleNotFound')}
            </h1>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white font-semibold rounded-lg hover:from-[#735fb0] hover:to-[#5f6db0] transition-all duration-300 font-cairo"
            >
              {t('blog.backToBlog')}
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen pt-24 pb-16">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight font-cairo">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <User className="w-5 h-5" />
                    <span className="font-medium font-cairo">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium font-cairo">{post.date}</span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-cairo">
                    {post.excerpt}
                  </p>
                  <div className="text-lg text-gray-700 leading-relaxed font-cairo">
                    {post.content && (
                      <div 
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{ 
                          __html: post.content.replace(/\n/g, '<br>') 
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white font-semibold rounded-xl hover:from-[#735fb0] hover:to-[#5f6db0] transition-all duration-300 shadow-lg hover:shadow-xl font-cairo"
              >
                <ArrowRight 
                  className={`w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 rotate-180 ${isRTL ? 'rotate-0' : ''}`} 
                />
                {t('blog.backToBlog')}
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-cairo">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-cairo">
              {t('blog.subtitle')}
            </p>
          </motion.div>


          {/* Blog Posts Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#5f6db0] to-[#735fb0] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  {post.readTime && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-800/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                        {post.readTime}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 font-cairo">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed font-cairo">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500">
                      <User className="w-4 h-4" />
                      <span className="font-cairo">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="font-cairo">{post.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#5f6db0] font-semibold hover:text-[#735fb0] transition-colors duration-300 group-hover:translate-x-1 transform font-cairo"
                  >
                    {t('blog.readMore')}
                    <ArrowRight 
                      className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} 
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;