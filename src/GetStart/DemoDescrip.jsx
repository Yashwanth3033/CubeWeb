import AvatarGroup from "./AvatarGroup.jsx";
import { CircleCheckBig }  from "lucide-react";

export default function DemoDescrip() {
  return (
    <div className="flex flex-col items-center justify-between basis-2/3 ">
        <AvatarGroup />
        <h1 className="text-2xl sm:text-4xl md:6xl font-bold mb-4 text-center">Get a taste of the user-centric platform</h1>
        <ul className="text-gray-500 mb-6 text-sm sm:text-lg">
            <li className="mb-2 flex flex-row gap-x-3"><CircleCheckBig className="text-green-600 w-5 h-5 md:w-7 md:h-7 ml-1" /><span className="text-gray-400">
              Experience the intuitive design that makes navigation effortless and enjoyable.</span></li>
            <li className="mb-2 flex flex-row gap-x-3"><CircleCheckBig className="text-green-600 w-5 h-5 md:w-7 md:h-7 ml-1" /><span className="text-gray-400">
              Explore the user-friendly interface that enhances your interaction and engagement.</span></li>
            <li className="flex flex-row gap-x-3"><CircleCheckBig className="text-green-600 w-5 h-5 md:w-7 md:h-7 ml-1" /><span className="text-gray-400">
              Join us to discover how our platform prioritizes user experience at every step.</span></li>
        </ul>
    </div>
  );
}   
