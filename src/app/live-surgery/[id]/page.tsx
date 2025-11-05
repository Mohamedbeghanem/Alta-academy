import { dentalCourses } from "@/lib/coursesData"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, User, BarChart, CheckCircle } from "lucide-react"

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = dentalCourses.find((course) => course.id === params.id)

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Course Features</h2>
                <ul className="grid gap-2">
                  {course.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{course.title}</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {course.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Instructor</p>
                    <p>{course.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Level</p>
                    <p>{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{course.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{course.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Join Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact for More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
