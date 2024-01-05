import React from "react";
import Dynamic from "next/dynamic";
import { Metadata } from 'next';

const Header = Dynamic(() => import("./Header"), { ssr: false });
const Foooter = Dynamic(() => import("./Footer"), { ssr: false });

export const metadata: Metadata = {
  title: 'Bloom Studio',
  description: 'Explore the creative world of Bloom Studio, where artistic vision meets digital innovation. Discover captivating designs, stunning visuals, and a unique blend of creativity and technology.',
};

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout : React.FC<LayoutProps> =  ({ children }) => {
  return (
    <div>
      <Header />
        <main>{children}</main>
      <Foooter />
    </div>
  );
}

export default Layout


