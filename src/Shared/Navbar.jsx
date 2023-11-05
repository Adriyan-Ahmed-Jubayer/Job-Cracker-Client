import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const Links = [
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/all-jobs" >ALL JOBS</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded`} to="/add-job" >ADD JOB</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded`} to="/collection" >MY JOB</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded`} to="/applied-jobs" >APPLIED JOBS</NavLink>,

    ]
    return (
        <>
            <div className="navbar my-3 md:my-4 lg:my-6">
                <div className="navbar-start">
                    <div className="dropdown xl:hidden ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 shadow-md rounded-md w-52 z-10 gap-3">
                            {
                                Links.map((Link, i) => <li key={i}>{Link}</li>)
                            }
                        </ul>
                    </div>
                    <div className="hidden xl:flex">
                        <nav className="flex items-center gap-3">
                            {
                                Links.map((Link, i) => <span key={i}>{Link}</span>)
                            }
                        </nav>
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className="btn btn-ghost normal-case text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-2 font-bold"><img className=" h-8 md:h-full" src="https://i.ibb.co/XpCSfxY/image-removebg-preview.png" alt="" />JOB CRACKERS</h1>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;