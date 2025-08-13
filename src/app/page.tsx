import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Section1 } from "@/components/section1";
import { Section2 } from "@/components/section2";
import { Section3 } from "@/components/section3";

export default function Home() {
  return (
    <main className="relative">
      <Menu />
      <Banner />
      <Section1 />
      <Section3 />
      <Section2 />
      <Footer />
    </main>
  )
}