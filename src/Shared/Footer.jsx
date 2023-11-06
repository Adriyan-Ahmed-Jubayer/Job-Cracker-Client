const Footer = () => {
    return (
        <>
            <section className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <h1 className="btn normal-case text-xl flex items-center gap-2 font-bold"><img className="h-full" src="https://i.ibb.co/XpCSfxY/image-removebg-preview.png" alt="" />JOB CRACKER</h1>
                </aside>
                <nav>
                    <header className="footer-title font-bold">Contact</header>
                    <a className="link link-hover">+880 123456-7890</a>
                    <a className="link link-hover">example@email.com</a>
                    <a className="link link-hover">example@yahoo.com</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold">Social Media</header>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Linkdin</a>
                    <a className="link link-hover">Instagram</a>
                </nav>
                <nav>
                    <header className="footer-title font-bold">ADDRESS</header>
                    <a className="link link-hover">1/46 R.N.D Road Dhaka-1211</a>
                </nav>
            </section>
            <section className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </section>
        </>
    );
};

export default Footer;