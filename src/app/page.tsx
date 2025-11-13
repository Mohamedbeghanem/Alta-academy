import { Navigation } from "@/components/navigation"
import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { Footer } from "@/components/footer"
import AnimatedLogoCloud from "@/components/AnimatedLogoCloud";
import { Hero1 } from '@/components/hero1';
import { Hero2 } from '@/components/hero2';
import TeamSlider from "@/components/mvpblocks/Team-slider"; 
import { Feature43 } from "@/components/feature43";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 lg:pt-20">
        <AltaAcademyHero />
           <Hero1
        heading="Live Surgery Sessions"
        description="Witness live surgical procedures performed by world-renowned experts. Enhance your skills and knowledge by observing real-time cases."
        image={{
          src: '/livesurgery01.jpeg',
          alt: 'Live surgery session in progress',
        }}
      />
                 <Hero2
        heading="Live Surgery Sessions"
        description="Witness live surgical procedures performed by world-renowned experts. Enhance your skills and knowledge by observing real-time cases."
        image={{
          src: '/livesurgery01.jpeg',
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
