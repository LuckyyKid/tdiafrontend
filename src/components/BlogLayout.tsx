import React from 'react';
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogLayoutProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  image,
  imageAlt,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col text-white relative z-10">
      <StickyHeader />

      <div className="pt-32 md:pt-40 pb-8 px-4 md:px-8 halo-top relative">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/explore/industry-trends"
            className="inline-flex items-center text-[#9ec8ff] hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Industry Trends
          </Link>

          <div className="mb-6">
            <div className="micro-label mb-4">{category}</div>
            <h1 className="tdia-h text-[38px] md:text-[52px] lg:text-[60px] mb-6 leading-[1.05]">
              <span>{title}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#7c8aa5] mb-6 leading-relaxed">
              {excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#7c8aa5] font-mono-tdia">
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-2 text-[#9ec8ff]" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-2 text-[#9ec8ff]" />
                {readTime}
              </div>
              <div className="flex items-center">
                <User className="h-3.5 w-3.5 mr-2 text-[#9ec8ff]" />
                {author}
              </div>
            </div>
          </div>

          <div className="tdia-card aspect-video rounded-2xl overflow-hidden mb-8">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="container mx-auto max-w-4xl px-4 md:px-8 pb-16">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-[#7c8aa5] prose-strong:text-white prose-a:text-[#9ec8ff]">
            {children}
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogLayout;
