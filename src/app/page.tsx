import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { Hero1 } from '@/components/hero1';
import { Hero2 } from '@/components/hero-work';
import TeamSlider from "@/components/mvpblocks/Team-slider"; 
import { Feature43 } from "@/components/feature43";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
           <Hero1
        badge = "Alta Academy By Implantaly"
        heading="Live Surgery Sessions"
        description="provide direct immersion in real clinical procedures, allowing participants to observe, interact, and learn in real time alongside expert surgeons.Our goal is to deliver reliable, modern, and immediately applicable techniques through an authentic, guided surgical experience."
        image={{
          src: '/live-Sutgery.jpeg',
          alt: 'Live surgery session in progress',
        }}
      />
                 <Hero2
        badge = "Alta Academy By Implantaly"
        heading="Hands on Training Workshops"
        description="provide immersive, practice-driven learning through guided clinical workshops, allowing participants to master techniques directly on models and real clinical scenarios. Our goal is to build precise, confident practitioners through structured, step-by-step hands-on experience."
        image={{
          src: '/3a198e6f-4bc4-4269-af2e-04027fa912cf.jpeg',
          alt: 'Live surgery session in progress',
        }}
      />
      </div>
      <Feature43 />
      <TeamSlider />
      <AnimatedLogoCloud />
      <Footer />
    </main>
  )
}
