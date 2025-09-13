import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/blogPosts';

const BlogPreview: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  // Show only the first 4 posts in preview
  const previewPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12"
          >
            {previewPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-3 text-xs md:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs md:text-sm text-gray-500">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden md:inline">{post.author}</span>
                      <span className="md:hidden">{post.author.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs md:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden md:inline">{post.date}</span>
                      <span className="md:hidden">{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-xs md:text-base"
                  >
                    {t('blog.readMore')}
                    <ArrowRight 
                      className={`w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 rtl:mr-1 md:rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              {t('blog.viewAll')}
              <ArrowRight 
                className={`w-5 h-5 ml-3 rtl:mr-3 rtl:ml-0 ${isRTL ? 'rotate-180' : ''}`} 
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;