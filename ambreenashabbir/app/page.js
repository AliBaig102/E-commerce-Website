import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/Banner";
import Heading from "@/components/Heading/Heading";

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <HeroSlider/>
        <Heading heading="Heading 01" description="This is the description of the page"/>
    </main>
  );
}
