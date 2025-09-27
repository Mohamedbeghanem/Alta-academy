"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Users,
  Search,
  Filter,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Advanced Implant Techniques: Mastering the Art of Digital Dentistry",
    excerpt: "Discover the latest innovations in digital implant planning and how they're revolutionizing patient outcomes in modern dental practice.",
    content: "Digital dentistry has transformed the landscape of implantology, offering unprecedented precision and predictability...",
    author: "Dr. Sarah Chen",
    authorRole: "Lead Implant Specialist",
    authorImage: "/professional-female-dentist.png",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Implantology",
    image: "/modern-dental-office.png",
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: "The Future of Prosthetic Rehabilitation: Digital Workflows",
      excerpt: "Explore how digital workflows are streamlining prosthetic rehabilitation and improving patient satisfaction.",
      author: "Dr. Michael Rodriguez",
      authorRole: "Prosthodontist",
      authorImage: "/male-orthodontist-headshot.png",
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "Prosthodontics",
      image: "/placeholder-kk841.png"
    },
    {
      id: 3,
      title: "Patient Communication: Building Trust in Dental Practice",
      excerpt: "Learn essential communication strategies that help build lasting relationships with your patients.",
      author: "Dr. Emily Johnson",
      authorRole: "Practice Management Expert",
      authorImage: "/professional-female-oral-surgeon.png",
      publishedAt: "2024-01-10",
      readTime: "5 min read",
      category: "Practice Management",
      image: "/placeholder-diwq6.png"
    },
    {
      id: 4,
      title: "Emergency Dentistry: Protocols for Urgent Care",
      excerpt: "Essential protocols and techniques for handling dental emergencies in your practice.",
      author: "Dr. Ahmed Hassan",
      authorRole: "Oral Surgeon",
      authorImage: "/placeholder-user.jpg",
      publishedAt: "2024-01-08",
      readTime: "7 min read",
      category: "Emergency Care",
      image: "/placeholder-0rbi0.png"
    },
    {
      id: 5,
      title: "Continuing Education: Staying Current in Dentistry",
      excerpt: "The importance of lifelong learning and how to choose the right continuing education programs.",
      author: "Dr. Lisa Wang",
      authorRole: "Education Director",
      authorImage: "/professional-female-dentist.png",
      publishedAt: "2024-01-05",
      readTime: "4 min read",
      category: "Education",
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      title: "Digital Treatment Planning: From Scan to Smile",
      excerpt: "A comprehensive guide to digital treatment planning workflows and their benefits.",
      author: "Dr. James Thompson",
      authorRole: "Digital Dentistry Specialist",
      authorImage: "/male-orthodontist-headshot.png",
      publishedAt: "2024-01-03",
      readTime: "9 min read",
      category: "Digital Dentistry",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Building a Successful Dental Practice: Key Strategies",
      excerpt: "Essential strategies for growing and managing a thriving dental practice in today's competitive market.",
      author: "Dr. Maria Garcia",
      authorRole: "Practice Consultant",
      authorImage: "/professional-female-oral-surgeon.png",
      publishedAt: "2024-01-01",
      readTime: "6 min read",
      category: "Business",
      image: "/placeholder-logo.png"
    }
  ]

  const categories = [
    "All Posts",
    "Implantology", 
    "Prosthodontics",
    "Digital Dentistry",
    "Practice Management",
    "Emergency Care",
    "Education",
    "Business"
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-500/5 to-red-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
                  Dental Education Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest insights, techniques, and innovations in dental practice. 
                Expert knowledge from leading professionals in the field.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={category === "All Posts" ? "default" : "outline"}
                      className="whitespace-nowrap cursor-pointer hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
            </div>

            <Card className="overflow-hidden bg-white border-0 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-green-600 to-red-600 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        width={48}
                        height={48}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                  </div>
                  <Button asChild className="mt-6 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-xl border-0 self-start">
                    <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-green-600 border-green-600">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full mr-2"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-xl">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest articles, course updates, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
