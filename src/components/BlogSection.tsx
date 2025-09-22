import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, BookOpen, Scale, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Fictitious Bias: The Critical Role of Negative Critics in Hindering Justice Delivery and The Paramount Importance of Respecting the Authority of Courts in South Sudan",
    excerpt: "This paper examines the critical importance of respecting the Supreme Court of South Sudan's authority for the nation's stability and democratic consolidation, highlighting the role of negative critics and the dangers of fabricated bias.",
    content: "Full article content here...",
    author: "Reech M.D Malual",
    date: "2022-09-22",
    category: "Legal Opinions",
    readTime: "25 min read",
    tags: ["Constitutional Law", "Judicial Independence", "South Sudan", "Rule of Law", "Justice System"],
    slug: "fictitious-bias"
  },
  {
    id: 2,
    title: "Understanding Employment Rights in South Sudan's Evolving Legal Landscape",
    excerpt: "A comprehensive guide to the latest developments in employment law and worker protection in South Sudan.",
    content: "Full article content here...",
    author: "Adv. Reech M. D. Malual-Akumric",
    date: "2024-12-15",
    category: "Articles",
    readTime: "8 min read",
    tags: ["Employment Law", "Workers Rights", "Legal Updates"]
  },
  {
    id: 3,
    title: "Oil and Gas Contract Negotiations: Best Practices for South Sudanese Businesses",
    excerpt: "Essential strategies for navigating complex oil and gas contractual arrangements in the current regulatory environment.",
    content: "Full article content here...",
    author: "Adv. Bol Madut Ayii",
    date: "2024-12-10",
    category: "Articles",
    readTime: "12 min read",
    tags: ["Oil & Gas", "Contract Law", "Business Advisory"]
  },
  {
    id: 4,
    title: "The Future of Alternative Dispute Resolution in South Sudan",
    excerpt: "Exploring the growing importance of mediation and arbitration as effective alternatives to traditional litigation.",
    content: "Full article content here...",
    author: "Adv. Reech M. D. Malual-Akumric",
    date: "2024-12-05",
    category: "Articles",
    readTime: "10 min read",
    tags: ["ADR", "Mediation", "Legal Innovation"]
  }
];

const legalOpinions = [
  {
    id: 5,
    title: "Constitutional Implications of Recent Parliamentary Legislation",
    excerpt: "Legal analysis of the constitutional validity and potential impact of recently enacted legislation.",
    content: "Full opinion content here...",
    author: "Adv. Reech M. D. Malual-Akumric",
    date: "2024-12-12",
    category: "Legal Opinions",
    readTime: "15 min read",
    tags: ["Constitutional Law", "Legislation", "Legal Analysis"]
  },
  {
    id: 6,
    title: "Taxation Policy Reform: Implications for Foreign Investment",
    excerpt: "Expert opinion on proposed tax reforms and their potential effects on foreign direct investment in South Sudan.",
    content: "Full opinion content here...",
    author: "Adv. Wol D. A. Chan",
    date: "2024-12-08",
    category: "Legal Opinions",
    readTime: "12 min read",
    tags: ["Tax Law", "Foreign Investment", "Policy Analysis"]
  },
  {
    id: 7,
    title: "Media Freedom and Regulatory Compliance: Balancing Act",
    excerpt: "Analysis of the current state of media law and recommendations for balancing press freedom with regulatory requirements.",
    content: "Full opinion content here...",
    author: "Adv. Reech M. D. Malual-Akumric",
    date: "2024-12-01",
    category: "Legal Opinions",
    readTime: "11 min read",
    tags: ["Media Law", "Press Freedom", "Regulatory Compliance"]
  }
];

const news = [
  {
    id: 8,
    title: "Akumric Law House Wins Major Oil & Gas Arbitration Case",
    excerpt: "Our firm successfully represented a major international client in a complex arbitration dispute worth $50 million.",
    content: "Full news content here...",
    author: "Akumric Law House",
    date: "2024-12-14",
    category: "News",
    readTime: "3 min read",
    tags: ["Firm News", "Case Victory", "Oil & Gas"]
  },
  {
    id: 9,
    title: "New Partnership with East Africa Law Society",
    excerpt: "We are proud to announce our strengthened partnership with EALS, expanding our regional legal network.",
    content: "Full news content here...",
    author: "Akumric Law House",
    date: "2024-12-11",
    category: "News",
    readTime: "2 min read",
    tags: ["Partnerships", "Regional Network", "Professional Development"]
  },
  {
    id: 10,
    title: "Upcoming Legal Workshop on Employment Law Compliance",
    excerpt: "Join us for a comprehensive workshop on the latest employment law requirements for South Sudanese businesses.",
    content: "Full news content here...",
    author: "Akumric Law House",
    date: "2024-12-09",
    category: "News",
    readTime: "2 min read",
    tags: ["Workshop", "Employment Law", "Business Education"]
  }
];

const allPosts = [...articles, ...legalOpinions, ...news].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

const BlogSection = () => {
  const navigate = useNavigate();

  const handleArticleClick = (article: any) => {
    if (article.slug) {
      navigate(`/article/${article.slug}`);
    } else {
      // For articles without slugs, use a generic route
      navigate(`/article/${article.id}`);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Articles":
        return BookOpen;
      case "Legal Opinions":
        return Scale;
      case "News":
        return Newspaper;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Articles":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Legal Opinions":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "News":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Legal Insights & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest articles, expert legal opinions, and firm news. 
            We share insights on legal developments, best practices, and industry trends.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            All Posts
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Articles
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Legal Opinions
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            News
          </Button>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand mb-8 text-center">Featured Posts</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allPosts.slice(0, 2).map((post) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getCategoryColor(post.category)} flex items-center gap-1`}>
                        <CategoryIcon className="h-3 w-3" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:text-brand group-hover:bg-brand/10"
                        onClick={() => handleArticleClick(post)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-brand flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Recent Articles
            </h3>
            <Button variant="outline" size="sm">
              View All Articles
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <Card key={article.id} className="hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                      Article
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-brand transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(article.date)}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-0 text-xs group-hover:text-brand"
                      onClick={() => handleArticleClick(article)}
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Opinions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-brand flex items-center gap-2">
              <Scale className="h-6 w-6" />
              Legal Opinions
            </h3>
            <Button variant="outline" size="sm">
              View All Opinions
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalOpinions.map((opinion) => (
              <Card key={opinion.id} className="hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs">
                      Opinion
                    </Badge>
                    <span className="text-xs text-muted-foreground">{opinion.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-brand transition-colors line-clamp-2">
                    {opinion.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {opinion.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(opinion.date)}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-0 text-xs group-hover:text-brand"
                      onClick={() => handleArticleClick(opinion)}
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Latest News */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-brand flex items-center gap-2">
              <Newspaper className="h-6 w-6" />
              Latest News
            </h3>
            <Button variant="outline" size="sm">
              View All News
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((newsItem) => (
              <Card key={newsItem.id} className="hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                      News
                    </Badge>
                    <span className="text-xs text-muted-foreground">{newsItem.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-brand transition-colors line-clamp-2">
                    {newsItem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {newsItem.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatDate(newsItem.date)}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-0 text-xs group-hover:text-brand"
                      onClick={() => handleArticleClick(newsItem)}
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center p-8 bg-brand rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with Legal Insights
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest legal updates, expert opinions, 
            and firm news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-brand hover:bg-white/90 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 