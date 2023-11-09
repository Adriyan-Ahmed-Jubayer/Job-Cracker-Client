const Footer = () => {
    return (
        <>
            <section className="footer p-10 text-base-content">
                <aside>
                    <h1 className="btn normal-case text-xl flex items-center gap-2 font-bold dark:text-gray-100 dark:bg-slate-900 duration-700 dark:border-teal-500 "><img className="h-full" src="https://i.ibb.co/XpCSfxY/image-removebg-preview.png" alt="" />JOB CRACKER</h1>
                </aside>
                <nav>
                    <header className="footer-title font-bold dark:text-gray-200">Contact</header>
                    <a className="link link-hover dark:text-gray-100">+880 123456-7890</a>
                    <a className="link link-hover dark:text-gray-100">example@email.com</a>
                    <a className="link link-hover dark:text-gray-100">example@yahoo.com</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold dark:text-gray-200">Social Media</header>
                    <a className="link link-hover dark:text-gray-100">Facebook</a>
                    <a className="link link-hover dark:text-gray-100">Youtube</a>
                    <a className="link link-hover dark:text-gray-100">Linkdin</a>
                    <a className="link link-hover dark:text-gray-100">Instagram</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold dark:text-gray-200">ADDRESS</header>
                    <a className="link link-hover dark:text-gray-100">1/46 R.N.D Road Dhaka-1211</a>
                </nav>
            </section>
            <section className="footer footer-center p-4 text-base-content dark:text-gray-100">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </section>
        </>
    );
};

export default Footer;