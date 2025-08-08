import { Outlet } from "react-router";
import Logo from "./SVG/Logo";
import { Link } from "react-router";

export default function PlainHeader() {
    return (
        <header className="">
            <div className="px-4 sm:px-6 lg:px-6 py-4 sm:py-6">
                <Link to="/" className="transition-transform hover:scale-105 outline-none">
                    <Logo className="size-8 sm:size-10" />
                </Link>
            </div>
            <Outlet />
        </header>
    );
}