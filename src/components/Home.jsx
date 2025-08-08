import Section from "./Section";
import ReviewCard from "./ReviewCard.jsx";
import ToolsSection from "./ToolsSection.jsx";
import Freature from "./Features.jsx";
import Ecosystem from "./Ecosystem.jsx";
import FAQ from "./FAQ.jsx";
import LastSection from "./LastSection.jsx";

import { ArrowRight } from "lucide-react";
import layoutImg from "../images/allShapesNwindow.png";
import allBlush from "../images/allBlush.svg"
import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <Section  >
                    <div className="flex flex-col items-center justify-center text-center gap-y-6">
                        <h1 data-aos="fade-up" className=" text-center text-slate-100 font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-wrap">A powerful suite of user-centric products</h1>
                        <p  data-aos="fade-up" data-aos-delay="300" className="text-center text-slate-400 font-semibold text-md md:text-xl max-w-150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                        <p  data-aos="fade-up" data-aos-delay="600" className="flex flex-row items-center justify-center gap-x-2 pt-6 group">
                            <Link to="/PlainHeader/GetStart" className="text-md mt-4 mr-2 px-4 py-3 rounded-md bg-violet-900 flex items-center text-white font-semibold hover:bg-violet-800 active:scale-105 active:font-bold transition-transform">
                                Get Started <ArrowRight size={16} className="ml-1 text-blue-400 group-hover:translate-x-1" />
                            </Link>
                            <Link to="/docs" className="text-md mt-4 ml-2 px-5 py-3 rounded-md bg-slate-700 flex items-center text-white font-semibold hover:bg-slate-600 active:scale-105 active:font-bold transition-transform">
                                Read Docs
                            </Link>
                        </p>
                            <img data-aos="fade-up" data-aos-delay="300" src={layoutImg} alt="Layout Illustration" className="w-full max-w-3xl mt-10" />
                        <ReviewCard />
                    </div>
                    <hr className="border-slate-700" />
                    <div className="-z-10 absolute top-0 overflow-hidden hidden sm:block">
                        <img src={allBlush} alt="allBlush" className=" h-[1200px] " />
                    </div>
            </Section> 
            <ToolsSection />
            <hr className="border-slate-700" />
            <Freature />
            <hr className="border-slate-700" />
            <Ecosystem />
            <hr className="border-slate-700" />
            <FAQ />
            <hr className="border-slate-700" />
            <LastSection />
            <hr className="border-slate-700" />
        </>
    );
}