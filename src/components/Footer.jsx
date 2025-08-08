import Section from "./Section.jsx";
import Logo from "./SVG/Logo.jsx";
import { FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import logo from "../assets/fictional-i-logo.png";

function Footer() {
  return (
    <div>
      <footer className="max-w-screen-xl mx-auto w-full">
        <Section>
          <div className="flex flex-col md:flex-row gap-8">
            <Logo className="size-10 "/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 basis-full">
              {/* PRODUCTS */}
              <div>
                <h6 className="font-medium mb-2 underline">PRODUCTS</h6>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Cube Manage</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Cube Analyse</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Cube Launch</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Experimentation</a>
              </div>

              {/* RESOURCES */}
              <div>
                <h6 className="font-medium mb-2 underline">RESOURCES</h6>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Blog</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Cheat Sheet</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Channel Partners</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Affiliate Program</a>
              </div>

              {/* COMPANY */}
              <div>
                <h6 className="font-medium mb-2 underline">COMPANY</h6>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Session Recording</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Feature Flags</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Heatmaps</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Correlation Analysis</a>
              </div>

              {/* SUPPORT */}
              <div>
                <h6 className="font-medium underline mb-2">SUPPORT</h6>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">About Us</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Our Story</a>
                <a href="#" className="block text-slate-400 hover:text-slate-200 transition-colors mb-1">Work With Us</a>
              </div>
            </div>
          </div>
          <div>
            <span className="pt-3 flex flex-row justify-between">
              <div>
                <a href="#" className="text-slate-500 hover:text-slate-200 pr-1">Terms </a> .
                <a href="#" className="text-slate-500 hover:text-slate-200 pl-1"> Private policy</a>
              </div> 
              <div className="flex flex-row gap-x-1">
                <FaGithub size={24} className="self-end ml-1 text-violet-600 hover:text-violet-400 active:scale-110" />
                <FaLinkedin size={24} className="self-end ml-1 text-violet-600 hover:text-violet-400 active:scale-110" />
                <FaXTwitter size={24} className="self-end ml-1 text-violet-600 hover:text-violet-400 active:scale-110" />
                <FaMedium size={24} className="self-end ml-1 text-violet-600 hover:text-violet-400 active:scale-110" />
              </div>
            </span>
          </div>
        </Section>
      </footer>
    </div>
  );
}

export default Footer;

