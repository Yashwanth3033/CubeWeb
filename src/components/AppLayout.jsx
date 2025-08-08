import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

function AppLayout() {
    return (
        <>
            <Header />
            <main className="max-w-screen-xl mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;

