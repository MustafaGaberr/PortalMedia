import { useTranslation } from 'react-i18next';

export interface BlogPost {
  id: number;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  image: string;
  authorKey: string;
  date: string;
  category: string;
  readTimeKey: string;
  tags?: string[];
}

// Create a function to get blog posts with translations
export const useBlogPosts = () => {
  const { t } = useTranslation();
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      titleKey: 'blog.posts.post1.title',
      excerptKey: 'blog.posts.post1.excerpt',
      contentKey: 'blog.posts.post1.content',
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      authorKey: 'blog.posts.post1.author',
      date: "Dec 15, 2024",
      category: "Marketing",
      readTimeKey: 'blog.posts.post1.readTime',
      tags: ["تسويق رقمي", "اتجاهات", "2024"]
    },
    {
      id: 2,
      titleKey: 'blog.posts.post2.title',
      excerptKey: 'blog.posts.post2.excerpt',
      contentKey: 'blog.posts.post2.content',
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      authorKey: 'blog.posts.post2.author',
      date: "Dec 12, 2024",
      category: "Social Media",
      readTimeKey: 'blog.posts.post2.readTime',
      tags: ["وسائل التواصل", "ROI", "قياس الأداء"]
    },
    {
      id: 3,
      titleKey: 'blog.posts.post3.title',
      excerptKey: 'blog.posts.post3.excerpt',
      contentKey: 'blog.posts.post3.content',
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      authorKey: 'blog.posts.post3.author',
      date: "Dec 10, 2024",
      category: "SEO",
      readTimeKey: 'blog.posts.post3.readTime',
      tags: ["SEO", "تحسين محركات البحث", "جوجل"]
    },
    {
      id: 4,
      titleKey: 'blog.posts.post4.title',
      excerptKey: 'blog.posts.post4.excerpt',
      contentKey: 'blog.posts.post4.content',
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      authorKey: 'blog.posts.post4.author',
      date: "Dec 8, 2024",
      category: "Content",
      readTimeKey: 'blog.posts.post4.readTime',
      tags: ["محتوى", "تحويلات", "استراتيجية"]
    },
    {
      id: 5,
      titleKey: 'blog.posts.post5.title',
      excerptKey: 'blog.posts.post5.excerpt',
      contentKey: 'blog.posts.post5.content',
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
      authorKey: 'blog.posts.post5.author',
      date: "Dec 5, 2024",
      category: "PPC",
      readTimeKey: 'blog.posts.post5.readTime',
      tags: ["PPC", "إعلانات", "تحسين"]
    },
    {
      id: 6,
      titleKey: 'blog.posts.post6.title',
      excerptKey: 'blog.posts.post6.excerpt',
      contentKey: 'blog.posts.post6.content',
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      authorKey: 'blog.posts.post6.author',
      date: "Dec 3, 2024",
      category: "Branding",
      readTimeKey: 'blog.posts.post6.readTime',
      tags: ["هوية تجارية", "علامة تجارية", "اتساق"]
    },
    {
      id: 7,
      titleKey: 'blog.posts.post7.title',
      excerptKey: 'blog.posts.post7.excerpt',
      contentKey: 'blog.posts.post7.content',
      image: "https://images.pexels.com/photos/159106/pexels-photo-159106.jpeg",
      authorKey: 'blog.posts.post7.author',
      date: "Dec 1, 2024",
      category: "Marketing",
      readTimeKey: 'blog.posts.post7.readTime',
      tags: ["بريد إلكتروني", "تسويق", "حملات"]
    },
    {
      id: 8,
      titleKey: 'blog.posts.post8.title',
      excerptKey: 'blog.posts.post8.excerpt',
      contentKey: 'blog.posts.post8.content',
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      authorKey: 'blog.posts.post8.author',
      date: "Nov 28, 2024",
      category: "Marketing",
      readTimeKey: 'blog.posts.post8.readTime',
      tags: ["تحليل البيانات", "ذكاء الأعمال", "قرارات"]
    }
  ];

  // Return posts with translated content
  return blogPosts.map(post => ({
    ...post,
    title: t(post.titleKey),
    excerpt: t(post.excerptKey),
    content: t(post.contentKey),
    author: t(post.authorKey),
    readTime: t(post.readTimeKey)
  }));
};