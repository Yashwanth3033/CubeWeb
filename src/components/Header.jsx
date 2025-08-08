import Logo from "./SVG/Logo";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

function Header() {
    return (
        <header className="px-4 sm:px-8 lg:px-12 py-6 lg:py-8">
            <div className="flex flex-row items-center justify-between">
                <Link to="/" className="transition-transform outline-none hover:scale-105">
                    <Logo className="size-8 sm:size-10" />
                </Link>
                <div className="flex flex-row items-center justify-center gap-x-3 sm:gap-x-6">
                    <Link to="PlainHeader/SignIn" className="text-sm sm:text-lg text-slate-400 font-mono outline-none hover:underline active:scale-105 transition-transform">
                        Sign in
                    </Link>
                    <Link to="PlainHeader/GetStart" className="group px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-md rounded-md bg-violet-900 flex flex-row items-center justify-center text-white font-semibold hover:bg-violet-800 active:scale-105 active:font-bold transition-transform outline-none">
                        <span className="hidden sm:inline">Get Started</span>
                        <span className="sm:hidden">Start</span>
                        <ArrowRight size={14} className="ml-1 sm:ml-1 text-blue-400 active:scale-110 group-hover:translate-x-1 sm:size-4"/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;