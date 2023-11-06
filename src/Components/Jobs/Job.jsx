import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { Category, Banner, UserName, Title, PostDate, Deadline, SalaryRange } = job;
    return (
        <>
            <div data-aos="fade-up" className="p-5 bg-teal-500 bg-opacity-10 hover:bg-opacity-50 hover:text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 card-notched">
                <div className="w-full md:w-[300px] md:h-[170px] lg:navbar-start">
                    <img className="w-full h-[200px] md:w-[300px] md:h-[170px]" src={Banner} alt="" />
                </div>
                <div className=" text-center md:text-left space-y-2 lg:navbar-center">
                    <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{Title}</h2>
                    <h3 className="text-sm font-bold"><span className="font-medium">Posted by:</span> {UserName}</h3>
                    <h3 className="text-sm font-bold"><span className="font-medium">Salary:</span>{SalaryRange}</h3>
                    <h3 className="text-sm font-bold"><span className="font-medium">Posted Date</span> {PostDate}</h3>
                    <h3 className="text-sm font-bold"><span className="font-medium">Dead line</span> {Deadline}</h3>
                </div>
                <div className="md:col-span-2 lg:col-span-1 flex flex-row items-center justify-center lg:flex-col gap-10">
                    <Link className="">
                        <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">Details</button>
                    </Link>
                    <button className=" btn-border py-2 md:py-3 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2">{Category}</button>
                </div>
            </div>
        </>
    );
};

export default Job;