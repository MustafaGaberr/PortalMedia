import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const BlogPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Discover the latest trends and technologies that will shape digital marketing strategies in the coming year.",
      content: "Digital marketing is evolving at an unprecedented pace. With new technologies emerging and consumer behaviors shifting, businesses must adapt their strategies to stay competitive...",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Marketing",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Social Media ROI: Measuring Success",
      excerpt: "Learn how to effectively measure and optimize your social media marketing return on investment.",
      content: "Understanding the return on investment of your social media efforts is crucial for long-term success. This comprehensive guide will walk you through the essential metrics...",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Social Media",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Essential SEO strategies that will help your website rank higher in search engine results.",
      content: "Search engine optimization has become more sophisticated than ever. With Google's algorithm updates and changing user behavior patterns...",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      author: "Emily Davis",
      date: "Dec 10, 2024",
      category: "SEO",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Content Marketing Strategies That Convert",
      excerpt: "Create compelling content that engages your audience and drives conversions.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      author: "Ahmed Al-Rashid",
      date: "Dec 8, 2024",
      category: "Content",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "PPC Campaign Optimization Techniques",
      excerpt: "Advanced techniques to improve your pay-per-click advertising performance.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
      author: "Lisa Park",
      date: "Dec 5, 2024",
      category: "PPC",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Building a Strong Brand Identity Online",
      excerpt: "Develop a consistent brand presence across all digital touchpoints.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      author: "Sarah Johnson",
      date: "Dec 3, 2024",
      category: "Branding",
      readTime: "5 min read"
    }
  ];

  const categories = ['all', 'Marketing', 'Social Media', 'SEO', 'Content', 'PPC', 'Branding'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // If viewing a single post
  if (id) {
    const post = blogPosts.find(p => p.id === parseInt(id));
    if (!post) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">
              Back to blog
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-lg text-gray-800 leading-relaxed">
                    {post.content && (
                      <>
                        <p className="mb-6">{post.content}</p>
                        <p className="mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mb-6">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <ArrowRight 
                  className={`w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 rotate-180 ${isRTL ? 'rotate-0' : ''}`} 
                />
                Back to Blog
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 rtl:pr-10 rtl:pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
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
                  {post.readTime && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {post.readTime}
                      </span>
                    </div>
                  )}
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

          {filteredPosts.length === 0 && (
            <motion.div variants={fadeInUp} className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;