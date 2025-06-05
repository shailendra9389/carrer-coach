
import HeroSection from "@/components/hero.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return(
    <div>
        <div className="grid-background"></div>
        <HeroSection/>
    </div>
  )
}
