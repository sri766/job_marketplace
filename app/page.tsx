import { Sparkle } from "lucide-react";
import { AnimatedGrid } from "./components/background";
import { MarqueeDemoVertical } from "./components/marquee";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-evenly">
      <AnimatedGrid />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold ">Find Your Dream Job!
          <Sparkle size={34} className="text-blue-600 inline"/>
        </h1>
        <p className="text-2xl text-center">
          or Find someone to fit your expectations
        </p>
        <Button size={"lg"}>Get Started</Button>
      </div>
      <div className="">
        <MarqueeDemoVertical />
      </div>

    </main>
  );
}
