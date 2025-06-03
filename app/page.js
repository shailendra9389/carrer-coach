
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
  <h1 className="text-6xl font-bold underline text-red-500">
      Hello world!
    </h1>
   
   {/* <p className="text-red-500">this is me</p> */}
    <Button className="text-red-500">Hello</Button>
    <Input className="w-30px"></Input>
    </div>
  );
}
