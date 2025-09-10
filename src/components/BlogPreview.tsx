import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const BlogPreview: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Discover the latest trends and technologies that will shape digital marketing strategies in the coming year.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Marketing"
    },
    {
      id: 2,
      title: "Social Media ROI: Measuring Success",
      excerpt: "Learn how to effectively measure and optimize your social media marketing return on investment.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Social Media"
    },
    {
      id: 3,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Essential SEO strategies that will help your website rank higher in search engine results.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      author: "Emily Davis",
      date: "Dec 10, 2024",
      category: "SEO"
    }
  ];

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {t('blog.read-more')}
                    <ArrowRight 
                      className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
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
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              {t('blog.view-all')}
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