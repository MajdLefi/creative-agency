import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/layout"), { ssr: false });
const Herosection = dynamic(() => import("@/components/about-us/Herosection"), { ssr: false });

export default function AboutUs() {
  return (
    <Layout>
      <Herosection />
    </Layout>
  )
}
