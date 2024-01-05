import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/layout"), { ssr: false });
const Herosection = dynamic(() => import("@/components/services/Herosection"), { ssr: false });

export default function Services() {
  return (
    <Layout>
      <Herosection />
    </Layout>
  )
}
