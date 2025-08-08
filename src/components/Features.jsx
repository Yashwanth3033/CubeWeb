import { useState } from "react";
import BlueBlush from "../images/bluelightBlush.svg";
import AllShape from "../images/allShapes.png";

export default function Feature() {
  const [selectedTab, setSelectedTab] = useState("Everyone");

  return (
    <section className="z-10 bg-gradient-to-r from-gray-900 to-slate-800 p-8 rounded-lg text-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl mx-auto font-bold mb-20 text-center max-w-3xl">
          Features to help you create your best designs
        </h1>

        <div data-aos="fade-up" data-aos-delay="600" className="backdrop-blur-sm rounded-xl flex flex-col lg:flex-row justify-between bg-slate-800/40 bg-blur-6xl p-3 sm:p-6 ">
            <div>
              {/* Tabs */}
                <div className="flex flex-col sm:flex-row justify-start gap-4 mb-6">
                {["Everyone", "Freelancers", "Organizations"].map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        selectedTab === tab
                        ? "bg-violet-800 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    >
                    {tab}
                    </button>
                ))}
            </div>

            {/* Dynamic Content */}
            <div className="text-center max-w-lg flex items-center ">
            {selectedTab === "Everyone" && (
                <div>
                <h2 className="text-3xl font-bold mb-2">Kickstart your project with these tools</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Unlock your creative potential with tools built for simplicity and power. Whether you're starting fresh or scaling fast, our platform helps you collaborate, design, and deliver your best work—together.
                </p>
                </div>
            )}

            {selectedTab === "Freelancers" && (
                <div>
                <h2 className="text-3xl font-bold mb-2">Perfect tools for freelancers</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Manage your projects with ease, track client progress, and stay ahead of deadlines. Our tools are designed to help you focus on your craft while we handle the busywork behind the scenes.
                </p>
                </div>
            )}

            {selectedTab === "Organizations" && (
                <div>
                <h2 className="text-3xl font-bold mb-2">Share your plan and clarify project risk</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Empower your teams with scalable solutions for collaboration, performance, and growth. From startups to enterprises, streamline your workflows, centralize your data, and drive impactful results at every level.
                </p>
                </div>
            )}
            </div>
            </div>
            
            <img src={AllShape} alt="Decorative shapes" className="w-auto h-60 sm:h-90" />
        </div>
      </div>
      <div className="-z-10 absolute top-0 overflow-hidden hidden sm:block">
        <img src={BlueBlush} alt="allBlush" className=" h-[500px] " />
      </div>
    </section>
  );
}
