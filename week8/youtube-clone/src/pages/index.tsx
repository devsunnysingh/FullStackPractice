import Image from "next/image";
import { Inter } from "next/font/google";
// import {VideoCard} from "@/components/VideoCard";
import {VideoCard} from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar/>
      <VideoGrid/>
      {/* <VideoCard title={"How to learn Tailwind | using Dcumentation"}
      image={"thumbnail1.jpg"}
      thumbImage={"thumbnail1.jpg"}
      author={"Freecodecamp"}
      views={"100k"}
      timeStamp={"2 days ago"}
      /> */}
    </div>
  );
}
