import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogPosts } from '../data/blogPosts';

const BlogPreview: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const blogPosts = useBlogPosts();

  // Show only the first 4 posts in preview
  const previewPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-accent) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cairo" style={{ color: 'var(--primary-color)' }}>
              {t('blog.title')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed font-cairo" style={{ color: 'var(--accent-color)' }}>
              {t('blog.subtitle')}
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {previewPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-elegant overflow-hidden hover:shadow-2xl transition-all duration-500 border border-primary-400/20 hover:border-primary-400/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className="bg-gradient-to-r from-primary-400 to-primary-600 text-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-lg font-bold text-primary-300 mb-2 md:mb-3 line-clamp-2 group-hover:text-primary-200 transition-colors duration-300 font-cairo">
                    {post.title}
                  </h3>
                  <p className="text-primary-100/80 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 text-xs md:text-sm leading-relaxed font-cairo">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-primary-200/70">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden md:inline font-cairo">{post.author}</span>
                      <span className="md:hidden font-cairo">{post.author.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-primary-200/70">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden md:inline font-cairo">{post.date}</span>
                      <span className="md:hidden font-cairo">{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300 text-xs md:text-sm group-hover:translate-x-1 transform font-cairo"
                  >
                    {t('blog.readMore')}
                    <ArrowRight 
                      className={`w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 rtl:mr-1 md:rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} 
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-600 text-gray-900 font-semibold rounded-xl hover:from-primary-500 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform font-cairo"
            >
              {t('blog.viewAll')}
              <ArrowRight 
                className={`w-5 h-5 ml-3 rtl:mr-3 rtl:ml-0 ${isRTL ? 'rotate-180' : ''}`} 
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;