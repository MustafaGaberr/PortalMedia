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
      image: "/Assets/article1.jpg",
      authorKey: 'blog.posts.post1.author',
      date: "Dec 15, 2024",
      category: "Social Media",
      readTimeKey: 'blog.posts.post1.readTime',
      tags: ["إنستغرام", "مبيعات", "تسويق"]
    },
    {
      id: 2,
      titleKey: 'blog.posts.post2.title',
      excerptKey: 'blog.posts.post2.excerpt',
      contentKey: 'blog.posts.post2.content',
      image: "/Assets/article2.jpeg",
      authorKey: 'blog.posts.post2.author',
      date: "Dec 12, 2024",
      category: "AI & Technology",
      readTimeKey: 'blog.posts.post2.readTime',
      tags: ["ذكاء اصطناعي", "تسويق شخصي", "تقنية"]
    },
    {
      id: 3,
      titleKey: 'blog.posts.post3.title',
      excerptKey: 'blog.posts.post3.excerpt',
      contentKey: 'blog.posts.post3.content',
      image: "/Assets/article3.jpeg",
      authorKey: 'blog.posts.post3.author',
      date: "Dec 10, 2024",
      category: "Psychology",
      readTimeKey: 'blog.posts.post3.readTime',
      tags: ["سيكولوجيا", "سوشيال ميديا", "تأثير"]
    },
    {
      id: 4,
      titleKey: 'blog.posts.post4.title',
      excerptKey: 'blog.posts.post4.excerpt',
      contentKey: 'blog.posts.post4.content',
      image: "/Assets/article4.jpeg",
      authorKey: 'blog.posts.post4.author',
      date: "Dec 8, 2024",
      category: "Analytics",
      readTimeKey: 'blog.posts.post4.readTime',
      tags: ["تحليل البيانات", "نمو", "عملاء"]
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