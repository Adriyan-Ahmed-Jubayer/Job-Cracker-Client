const HomeJobCard = ({ Job }) => {
    const { UserName, Category, Title, PostDate, Deadline, Salary, ApplicantsNumber, Banner } = Job;
    return (
        <>
            <div className="p-5 btn-border lg:flex lg:gap-6">
                <div className="lg:flex-1">
                    <img className="w-full h-[200px] md:h-[250px] lg:h-full max-h-[240px]" src={Banner} alt="" />
                </div>
                <div className="lg:flex-1 space-y-2 md:space-y-4 lg:space-y-5 md:mt-2 lg:mt-0">
                    <h1 className="text-sm md:text-xl lg:text-xl font-bold card-title-design inline-block "> {Title} </h1>
                    <div className="space-y-2 md:space-y-4 lg:space-y-3">
                        <h1 className="text-sm md:text-xl lg:text-xl font-bold inline-block "><span className="font-medium"> Posted By</span> : {UserName}</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-[14px] lg:text-[14px]"> Post on: <span className="font-bold">{PostDate}</span></p>
                            <p className="text-[10px] md:text-[14px] lg:text-[14px]"> Dead Line: <span className="font-bold">{Deadline}</span></p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-[14px] lg:text-[14px]"> Salary range: <span className="font-bold">{Salary}</span></p>
                            <p className="text-[10px] md:text-[14px] lg:text-[14px]"> Applicants Number: <span className="font-bold">{ApplicantsNumber}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button  className=" btn-notched bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm rounded-sm">
                            {Category}
                        </button>
                        <button className="flex items-end gap-1 py-2 md:py-2.5">
                            <div className="h-1 w-7 bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] mb-1"></div>
                            <span className=" card-title-design relative bg-transparent  font-bold text-[12px] md:text-sm lg:text-base">DETAILS</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeJobCard;