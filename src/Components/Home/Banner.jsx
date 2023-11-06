import Search from "./Search";

const Banner = () => {
    return (
        <>
            <div className="flex items-center md:gap-9 lg:gap-0 lg:justify-between mb-5">
                <div className=" flex-[3] md:flex-1 space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-8 ml-3">
                    <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold">Your <span className="text-design">Gateway to Career</span> Opportunities</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Discover, Post, and Apply for Jobs with Ease on JOB CRACKER. Find the Perfect Job or Connect with Talented Candidates Today!</p>
                    <div className="hidden md:flex">
                        <Search></Search>
                    </div>
                </div>
                <div className=" flex-[2] md:flex-1">
                    <img className="mx-auto" src="https://i.ibb.co/vqTFFp3/customer-support-illustration-23-2148885967-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="md:hidden">
                <Search></Search>
            </div>
        </>
    );
};

export default Banner;