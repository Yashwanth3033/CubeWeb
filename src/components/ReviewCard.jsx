import ReviewPerson1 from "../images/reviewPerson1.png";
import ReviewPerson2 from "../images/reviewPerson2.png";
import ReviewPerson3 from "../images/reviewPerson3.png";
import { Star } from "lucide-react";

export default function ReviewCard() {
    return (
        <div className="gap-x-2 rounded-md grid sm:grid-cols-3 grid-cols-1 gap-4 *:p-2 *:justify-between">
            <div data-aos="fade-up" className="flex flex-col items-center gap-x-2 gap-y-2 mb-2">
                <img src={ReviewPerson1} alt="Reviewer" className="w-10 h-10 rounded-full" />
                <div className="flex flex-row gap-x-1 outline-none">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm max-w-70 text-gray-500">"The only tool that has the technology to meet our unique and complex needs."</p>
                <a href="#" className="text-slate-100 text-md">Trustpilot - <span className="font-semibold text-violet-800">4.9/5</span></a>
            </div>
            <div data-aos="fade-up" className="flex flex-col items-center gap-x-2 gap-y-2 mb-2">
                <img src={ReviewPerson2} alt="Reviewer" className="w-10 h-10 rounded-full" />
                <div className="flex flex-row gap-x-1 outline-none">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm max-w-70 text-gray-500">"The one solution truly engineered to handle our specialized requirements with precision and reliability."</p>
                <a href="#" className="text-slate-100 text-md">Capterra - <span className="font-semibold text-violet-800">4.7/5</span></a>
            </div>
            <div data-aos="fade-up" className="flex flex-col items-center gap-x-2 gap-y-2 mb-2">
                <img src={ReviewPerson3} alt="Reviewer" className="w-10 h-10 rounded-full" />
                <div className="flex flex-row gap-x-1 outline-none">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm max-w-70 text-gray-500">"Unmatched in its ability to adapt to our evolving challenges—no other tool comes close."</p>
                <a href="#" className="text-slate-100 text-md">G2 - <span className="font-semibold text-violet-800">4.9/5</span></a>
            </div>
        </div>
    );
}
