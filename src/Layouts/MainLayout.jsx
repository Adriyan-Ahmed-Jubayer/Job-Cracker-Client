import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
    return (
        <>
            <header className="max-w-[1400px] mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen max-w-[1400px] mx-auto">
                <Outlet/>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;