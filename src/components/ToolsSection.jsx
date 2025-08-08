import React, {useRef} from 'react'
import Section from "./Section";
import Shape1 from "../images/features-icon-01.svg";
import Shape2 from "../images/features-icon-02.svg";
import Shape3 from "../images/features-icon-03.svg";
import Shape4 from "../images/features-icon-04.svg"
import { Link } from "react-router";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const ToolsSection = () => {

    const cardRef = useRef(null);

    const handleScrollL = function () {
        cardRef.current.scrollLeft -= 350;
    }

    const handleScrollR = function () {
        cardRef.current.scrollLeft += 350;
    }

    return (
        <Section className=" mx-auto w-full max-w-full">
            <div className="flex flex-col gap-y-8">
                <div className="self-center text-center max-w-4xl space-y-4">
                    <h1 data-aos="fade-up" data-aos-delay="300" className="text-6xl font-bold">Many tools to express your creativity</h1>
                    <p data-aos="fade-up" data-aos-delay="600" className="text-xl text-slate-400 max-w-xl mx-auto">Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips.</p>
                </div>

                <div ref={cardRef} data-aos="fade-up" data-aos-delay="900" className="flex overflow-x-hidden *:shrink-0 snap-mandatory gap-y-4 gap-x-2 scroll-smooth snap-start scroll-m-0.5 border-x-4 border-violet-600 rounded-2xl">
                    <Card img={Shape1} title="Modeling" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                    <Card img={Shape2} title="Experiences" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                    <Card img={Shape3} title="Collaboration" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                    <Card img={Shape4} title="Animation" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                    <Card img={Shape1} title="Animation" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                    <Card img={Shape2} title="Animation" description="Bring your ideas to life with tools made for creators. Design, collaborate, and build without limits. Whether you're sketching a vision or launching a product, everything you need is right at your fingertips." />
                </div>

                <div className="flex gap-x-8">
                    <p onClick={handleScrollL} className="flex items-center justify-center p-2.5 rounded-full border-2 bg-zinc-600/90 cursor-pointer hover:text-purple-300 hover:border-violet-300"><FaAngleLeft className="" /></p>
                    <p onClick={handleScrollR} className="flex items-center justify-center p-2.5 rounded-full border-2 bg-zinc-600/90 cursor-pointer hover:text-purple-300 hover:border-violet-300"><FaAngleRight className="" /></p>
                </div>
            </div>
        </Section>
    )
}

export default ToolsSection

const Card = function ({img, title, description}) {
    return (
        <div className="border overflow-x-hidden border-slate-900 rounded-xl bg-slate-800 flex flex-col items-start justify-end gap-y-2 min-w-sm w-sm px-4 py-2">
            <img src={img} alt="Feature Icon" className="size-14" />
            <h2 className="text-2xl font-semibold text-left">{title}</h2>
            <p className="text-md text-slate-400 text-left">{description}</p>
            <a href="#" className="text-violet-800 font-bold self-end hover:underline underline-offset-2">let's start &rarr;</a>
        </div>
    )
}