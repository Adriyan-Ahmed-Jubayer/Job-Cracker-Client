import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const MainLayout = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    const element = document.documentElement
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const options = [
        {
            icon: "sunny",
            text: 'light'
        },
        {
            icon: "moon",
            text: "dark"
        },
        {
            icon: 'desktop-outline',
            text: 'system'
        }
    ];

    const onWindowMatch = () => {
       if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
        element.classList.add('dark');
       } else {
        element.classList.remove('dark')
       }
    }
    onWindowMatch();
    useEffect(() => {
       switch (theme) {
        case 'dark':
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
            break;
        case 'light':
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
            break
        default:
            localStorage.removeItem('theme');
            onWindowMatch();
            break;
       }
    }, [theme]);

    darkQuery.addEventListener('change', (e) => {
        if (!("theme" in localStorage)) {
            if(e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark')
            }
        } 
    })
    return (
        <>
            <div className='fixed bottom-5 content-center duration-100 text-center lg:text-left lg:left-8 w-full rounded'>
                {
                    options.map(opt => (
                        <button key={opt.text} className={` w-10 h-10 lg:w-16 lg:h-16 leading-9 md:text-xl lg:text-3xl dark:bg-slate-800 bg-gray-100 ${theme === opt.text && "text-sky-600"}`} onClick={() => setTheme(opt.text)}>
                            <ion-icon name={opt.icon}></ion-icon>
                        </button>

                    ))
                }
            </div>
            <header className="max-w-[1400px] mx-auto dark:text-gray-100 dark:bg-slate-900 duration-700">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen max-w-[1400px] mx-auto dark:text-gray-100 dark:bg-slate-900 duration-700 ">
                <Outlet />
            </main>
            <footer className="dark:text-gray-100 dark:bg-slate-900 duration-700">
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;