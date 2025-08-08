import ReviewWomen from "../images/ReviewWomen.png";
import Section from "./Section";

export default function FAQ() {
    return (
        <Section>
            <div className="gap-x-4">
                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col justify-center items-center gap-y-2 mb-12">
                    <img src={ReviewWomen} alt="Reviewer" sizes={12} className="rounded-full" />
                    <p className="text-slate-500 text-lg text-center font-serif max-w-xl">"I had to work 8 hours a day on one app. With Cube, I only need one or two hours. I just need to work on creatives, because everything else is automated."</p>
                    <span className="text-slate-100">Mirta Jiang - <button href="#" className="text-violet-800">Paid Apps</button></span>
                </div>
                <h1 className="text-4xl my-8">FAQs</h1>
                <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col md:flex-row justify-between gap-x-2 gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        {/* 1 */}
                        <p className="text-slate-100 text-lg font-bold max-w-md">What is the d/f b/w the Free and Paid versions?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                        {/* 2 */}
                        <p className="text-slate-100 text-lg font-bold">Do you have student or non-profit discounts?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                        {/* 3 */}
                        <p className="text-slate-100 text-lg font-bold">How is the price determined?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="900" className="flex flex-col gap-y-2">
                        {/* 1 */}
                        <p className="text-slate-100 text-lg font-bold">Do I need coding knowledge to use this product?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                        {/* 2 */}
                        <p className="text-slate-100 text-lg font-bold">Is there a way to become an Affiliate reseller?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                        {/* 3 */}
                        <p className="text-slate-100 text-lg font-bold">What forms of payment do you accept?</p>
                        <p className="text-slate-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}