import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/layout"), { ssr: false });
const Herosection = dynamic(() => import("@/components/contact/Herosection"), { ssr: false });

export default function Contact() {
  return (
    <Layout>
      <Herosection />
    </Layout>
  )
}
