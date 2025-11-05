import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import CTA2 from "@/components/mvpblocks/cta-2"
import DentalCourseSlider from "@/components/mvpblocks/DentalCourseSlider"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
        <DentalCourseSlider />
      </div>
      <CTA2 />
      <Footer />
    </main>
  )
}