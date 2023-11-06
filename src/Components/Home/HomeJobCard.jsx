import { FaSackDollar } from "react-icons/fa6"
import { BsPerson } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import { ImCross } from 'react-icons/im';
import { Link } from "react-router-dom";

const HomeJobCard = ({ Job }) => {
    const { _id, UserName, Category, Title, PostDate, Deadline, SalaryRange, ApplicantsNumber, Banner } = Job;
    return (
        <>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-5 btn-border lg:flex lg:gap-6">
                <div className="lg:flex-1 overflow-hidden">
                    <img className="w-full h-[200px] md:h-[250px] lg:h-full max-h-[240px] hover:scale-125 duration-500" src={Banner} alt="" />
                </div>
                <div className="lg:flex-1 space-y-2 md:space-y-4 lg:space-y-5 md:mt-2 lg:mt-0">
                    <h1 className="text-sm md:text-xl lg:text-xl font-bold card-title-design inline-block "> {Title} </h1>
                    <div className="space-y-2 md:space-y-4 lg:space-y-3">
                        <h1 className="text-sm md:text-base lg:text-xl font-bold flex items-center gap-2 "><span className="font-medium"> <BsPerson className="md:text-xl lg:text-2xl"></BsPerson></span> {UserName}</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-[14px] lg:text-[14px] flex items-center gap-2"> <AiOutlineCalendar className="md:text-xl lg:text-2xl"></AiOutlineCalendar> <span className="font-bold">{PostDate}</span></p>
                            <p className="text-[10px] md:text-[14px] lg:text-[14px] flex items-center gap-2"> <ImCross className=" lg:text-lg"></ImCross> <span className="font-bold">{Deadline}</span></p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-[14px] lg:text-[14px] flex items-center gap-2"> <FaSackDollar className="md:text-xl lg:text-2xl"></FaSackDollar> <span className="font-bold">{SalaryRange}</span></p>
                            <p className="text-[10px] md:text-[14px] lg:text-[14px] flex items-center gap-2"> <TbListDetails></TbListDetails> <span className="font-bold">{ApplicantsNumber}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className=" btn-notched bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm rounded-sm">
                            {Category}
                        </button>
                        <Link to={`/job/${_id}`}>
                            <button className="flex items-end gap-1 py-2 md:py-2.5">
                                <div className="h-1 w-7 bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] mb-1"></div>
                                <span className=" card-title-design relative bg-transparent  font-bold text-[12px] md:text-sm lg:text-base">DETAILS</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeJobCard;