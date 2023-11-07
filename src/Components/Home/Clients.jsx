import Marquee from "react-fast-marquee";

const Clients = () => {
    return (
        <>
            <div className="space-y-5 md:space-y-7 lg:space-y-9">
                <div className="text-center space-y-3 md:space-y-3 lg:space-y-3">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">CLIENTS & PARTERNS</h4>
                    <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-tight font-bold">Clients <span className="text-design">&</span> Partners</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Dedicated and Trusted Partners</p>
                </div>
                <div className="p-10 border-teal-500 border rounded-lg ">
                    <Marquee>
                        <div className=" flex gap-12 items-center overflow-hidden">
                            <img className="h-[100px] hover:scale-125 duration-700" src="https://i.ibb.co/m9gKCBv/google-search-logo-578229-273-removebg-preview.png" alt="" />
                            <img className="h-[100px] hover:scale-125 duration-700" src="https://i.ibb.co/Ssz69Qt/Asus-Logo-removebg-preview.png" alt="" />
                            <img className="h-[100px] hover:scale-125 duration-700" src="https://i.ibb.co/Cm6Gh6z/Sony-Logo-1957-removebg-preview.png" alt="" />
                            <img className="h-[40px] hover:scale-125 duration-700" src="https://i.ibb.co/KhWds1S/2560px-Panasonic-logo-Blue-svg-removebg-preview.png" alt="" />
                            <img className="h-[40px] mb-3 hover:scale-125 duration-700" src="https://i.ibb.co/z6qHFrJ/1200px-Vivo-logo-2019-svg-removebg-preview.png" alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Clients;