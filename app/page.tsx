import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { MotionSection } from '@/components/MotionSection'
import { EditingSection } from '@/components/EditingSection'
import { VideoSection } from '@/components/VideoSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <MotionSection />
      <EditingSection />
      <VideoSection />
      <Footer />
    </main>
  )
}

