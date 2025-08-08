import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function LastSection() {
    return(
        <section>
            <div className="flex flex-col items-center justify-center p-14">
                <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl sm:text-4xl md:text-5xl max-w-3/4 text-center pb-6">Join the most flexible user-centric platform for teams</h1>
                <span data-aos="fade-up" data-aos-delay="600" className="flex flex-row items-center justify-center gap-x-2 pt-6 group">
                    <Link to="/PlainHeader/GetStart" className="text-md mt-4 mr-2 px-4 py-3 rounded-md bg-violet-900 flex items-center text-white font-semibold hover:bg-violet-800 active:scale-105 active:font-bold transition-transform">
                        Get Started <ArrowRight size={16} className="ml-1 text-blue-400 group-hover:translate-x-1" />
                    </Link>
                    <Link to="/docs" className="text-md mt-4 ml-2 px-5 py-3 rounded-md bg-slate-700 flex items-center text-white font-semibold hover:bg-slate-600 active:scale-105 active:font-bold transition-transform">
                        Read Docs
                    </Link>
                </span>
            </div>
        </section>
    )
}