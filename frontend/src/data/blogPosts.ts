export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
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
    title: "Content Marketing That Converts",
    excerpt: "Create compelling content that engages your audience and drives meaningful conversions for your business.",
    content: "Content marketing is the cornerstone of successful digital strategies. Creating content that not only engages but also converts requires a deep understanding of your audience...",
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
    content: "Pay-per-click advertising can be highly effective when properly optimized. This guide covers advanced techniques for maximizing your PPC campaign performance...",
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
    content: "Building a strong brand identity online requires consistency across all digital touchpoints. This comprehensive guide will help you develop and maintain...",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    author: "Sarah Johnson",
    date: "Dec 3, 2024",
    category: "Branding",
    readTime: "5 min read"
  }
];