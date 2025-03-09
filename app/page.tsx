import About from "@/components/pages/home/About";
import HomeHero from "@/components/pages/home/HomeHero";

import MenuCategories from "@/components/pages/home/MenuCategories";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <About />
      <MenuCategories />
    </main>
  );
}
