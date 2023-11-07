import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen gap-y-12">
                <div>
                    <img className="w-full" src="https://i.ibb.co/1Kjbx2D/404-error-isometric-illustration-23-2148509538-removebg-preview.png" alt="" />
                </div>
                <div>
                    <Link to="/">
                        <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">BACK TO HOME</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Error;