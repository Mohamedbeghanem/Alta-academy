"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id

  // Mock blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    id: postId,
    title: "Advanced Implant Techniques: Mastering the Art of Digital Dentistry",
    content: `
      <p>Digital dentistry has revolutionized the field of implantology, offering unprecedented precision and predictability in treatment outcomes. As dental professionals, staying current with these technological advances is crucial for providing the best possible care to our patients.</p>
      
      <h2>The Evolution of Digital Implant Planning</h2>
      <p>Traditional implant planning relied heavily on 2D radiographs and manual measurements. Today, we have access to sophisticated 3D imaging, computer-aided design (CAD), and computer-aided manufacturing (CAM) technologies that have transformed the entire workflow.</p>
      
      <h3>Key Benefits of Digital Workflows</h3>
      <ul>
        <li><strong>Enhanced Precision:</strong> 3D imaging allows for accurate assessment of bone quality and quantity</li>
        <li><strong>Improved Patient Communication:</strong> Visual treatment plans help patients understand their procedures</li>
        <li><strong>Reduced Treatment Time:</strong> Streamlined workflows minimize chair time</li>
        <li><strong>Better Outcomes:</strong> Precise planning leads to more predictable results</li>
      </ul>
      
      <h2>Implementing Digital Technologies</h2>
      <p>The transition to digital workflows requires careful planning and investment in the right technologies. Here are the essential components:</p>
      
      <h3>1. 3D Imaging Systems</h3>
      <p>Cone beam computed tomography (CBCT) has become the gold standard for implant planning. These systems provide detailed 3D images of the patient's anatomy, allowing for precise implant placement.</p>
      
      <h3>2. Digital Impression Systems</h3>
      <p>Intraoral scanners have replaced traditional impression materials in many practices. These systems capture detailed 3D images of the patient's mouth, improving accuracy and patient comfort.</p>
      
      <h3>3. Treatment Planning Software</h3>
      <p>Specialized software allows for virtual implant placement, bone grafting planning, and prosthetic design. These tools enable comprehensive treatment planning before any surgical intervention.</p>
      
      <h2>Best Practices for Digital Implant Planning</h2>
      <p>To maximize the benefits of digital technologies, follow these best practices:</p>
      
      <ol>
        <li><strong>Comprehensive Assessment:</strong> Always perform a thorough clinical and radiographic evaluation</li>
        <li><strong>Multi-disciplinary Approach:</strong> Collaborate with specialists when needed</li>
        <li><strong>Patient Education:</strong> Use digital tools to explain treatment plans clearly</li>
        <li><strong>Quality Control:</strong> Verify all digital data before proceeding with treatment</li>
      </ol>
      
      <h2>Future Trends in Digital Implantology</h2>
      <p>The future of digital implantology looks promising, with emerging technologies such as artificial intelligence, augmented reality, and 3D printing continuing to advance the field. These innovations will further improve treatment outcomes and patient experiences.</p>
      
      <p>As we continue to embrace these digital technologies, it's essential to maintain a balance between innovation and proven clinical practices. The goal is always to provide the best possible care for our patients while staying at the forefront of technological advancement.</p>
    `,
    author: "Dr. Sarah Chen",
    authorRole: "Lead Implant Specialist",
    authorBio: "Dr. Sarah Chen is a board-certified periodontist with over 15 years of experience in implant dentistry. She has published numerous articles on digital implant planning and is a sought-after speaker at international conferences.",
    authorImage: "/professional-female-dentist.png",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Implantology",
    image: "/modern-dental-office.png",
    tags: ["Digital Dentistry", "Implant Planning", "3D Imaging", "Treatment Planning"]
  }

  const relatedPosts = [
    {
      id: 2,
      title: "The Future of Prosthetic Rehabilitation: Digital Workflows",
      author: "Dr. Michael Rodriguez",
      publishedAt: "2024-01-12",
      readTime: "6 min read",
      category: "Prosthodontics",
      image: "/placeholder-kk841.png"
    },
    {
      id: 3,
      title: "Digital Treatment Planning: From Scan to Smile",
      author: "Dr. James Thompson",
      publishedAt: "2024-01-03",
      readTime: "9 min read",
      category: "Digital Dentistry",
      image: "/placeholder.svg"
    }
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
        {/* Header */}
        <div className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6 text-green-600 hover:text-green-700 hover:bg-green-50">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden bg-white border-0 shadow-2xl">
              {/* Article Header */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-green-600 to-red-600 text-white border-0">
                    {blogPost.category}
                  </Badge>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(blogPost.publishedAt)}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                      <Bookmark className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blogPost.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-xl">
                  <Image
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{blogPost.author}</h3>
                    <p className="text-sm text-gray-600">{blogPost.authorRole}</p>
                    <p className="text-sm text-gray-500 mt-1">{blogPost.authorBio}</p>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Facebook className="w-4 h-4 mr-2 text-blue-600" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Twitter className="w-4 h-4 mr-2 text-blue-400" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-600" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </article>

        {/* Related Posts */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
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
                    <p className="text-sm text-gray-600 mb-4">By {post.author}</p>
                    <Button asChild variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                      <Link href={`/blog/${post.id}`}>
                        Read More →
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
