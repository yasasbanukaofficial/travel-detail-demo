'use client';

import Navbar from "@/components/layout/Navbar";

const pages = [
  { label: "Home", href: "#" },
  { label: "Speak", href: "#" },
];

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-md z-20">
      <div className="relative w-full h-[80px]">
        <div className="flex justify-center items-center h-full">
          <Navbar
            items={pages}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;