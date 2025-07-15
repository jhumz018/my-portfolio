import Image from "next/image";
import { Avatar } from "./components/avatar";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-black">
       <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          <div className="flex flex-col items-center -space-y-109 sm:-space-y-132.5">
            {/* Ellipse background */}
            <Avatar
              id="ellipse-red"
              alt="Ellipse"
              width={600}
              height={400}
              className=""
            />

            {/* Avatar overlapping ellipse slightly */}
            <Avatar
              id="jums"
              alt="Avatar of Jhumz"
              width={550}
              height={280}
              className="rounded-full"
            />
          </div>

        {/* Intro text */}
        <div className="text-center md:text-right max-w-xl">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">HI, I’m Jhumell Brao</h1>
          <h3 className="text-3xl font-bold mb-4 text-black dark:text-amber-300">Full Stack Developer</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m a passionate front-end developer with experience in creating clean,
            responsive web interfaces. I love blending design with code and crafting
            user experiences that feel both beautiful and functional.
          </p>
        </div>
      </div>
    </div>
  );
}
