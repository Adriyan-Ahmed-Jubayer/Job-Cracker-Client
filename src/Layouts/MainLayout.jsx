import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;