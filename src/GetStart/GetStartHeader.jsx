import Lottie from "lottie-react";
import logo from "../ani/3dCube.json";

function Header() {
    return (
        <header className="px-12">
                <div className="flex flex-row items-center justify-between ">
                    <Lottie className="size-30" animationData={logo} loop={true}  />
                </div>
        </header>
    );
}

export default Header;