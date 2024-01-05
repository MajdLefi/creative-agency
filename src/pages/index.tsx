import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/layout"), { ssr: false });
const Herosection = dynamic(() => import("@/components/Herosection"), { ssr: false });
const AboutUs = dynamic(() => import("@/components/AboutUs"), { ssr: false });
const Vision = dynamic(() => import("@/components/Vision"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const Team = dynamic(() => import("@/components/Team"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Newsletter = dynamic(() => import("@/components/Newsletter"), { ssr: false });
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Herosection />
      <Stats />
      <Vision />
      <AboutUs />
      <Team />
      <Testimonials />
      <Newsletter />
    </Layout>
  )
}
