import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios";
import HomeJobCard from "./HomeJobCard";

const HomeJobs = () => {
    const [Jobs, setJobs] = useState([]);
    const [block, setBlock] = useState(6)
    const Categories = [

        {
            id: 0,
            name: "ALL JOBS"
        },
        {
            id: 1,
            name: "ONSITE"
        },
        {
            id: 2,
            name: "REMOTE"
        },
        {
            id: 3,
            name: "HYBRID"
        },
        {
            id: 4,
            name: "PART TIME"
        }
    ];
    const [tabs, setTabs] = useState(Categories[0])

    const url = tabs.name === Categories[0].name ? "https://job-cracker.vercel.app/api/v1/jobs" : `https://job-cracker.vercel.app/api/v1/jobs?category=${tabs.name}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setJobs(res.data))
    }, [tabs])
    return (
        <>
            <div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="w-9/12 md:w-7/12 xl:w-4/12 mx-auto text-center space-y-3 lg:space-y-6 mb-5 md:mb-10 xl:mb-14">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">JOB'S CATEGORY</h4>
                    <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold leading-tight">Explore Jobs by <span className="text-design">Category</span></h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Browse a Variety of Job Opportunities Categorized for Your Convenience. Find Your Dream Job in the Industry of Your Choice.</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="flex gap-2 md:gap-5 xl:gap-7 items-center justify-center">
                    {
                        Categories.map(Category => <button key={Category.id} onClick={() => setTabs(Category)} className={tabs.id === Category.id ? ` py-2 md:py-3 px-3 md:px-6 lg:px-9 relative rounded` : `btn-border py-2 md:py-3 px-3 md:px-6 lg:px-9 font-bold text-xs md:text-sm `}>
                            {
                                tabs.id === Category.id && <motion.div layoutId="active category" className={`absolute inset-0 b bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]`} />
                            }
                            <span className={tabs.id === Category.id ? `relative text-white font-bold text-xs md:text-sm` : `relative card-title-design font-bold text-xs md:text-sm`} >{Category.name}</span>

                        </button>)
                    }
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[30px] md:mt-[60px] lg:mt-[90px] container mx-auto mb-5 md:mb-10 xl:mb-14 ">
                    {
                        Jobs.slice(0, block).map((Job, i) => <HomeJobCard key={i} Job={Job}></HomeJobCard>)
                    }
                </div>
                <div className="text-center ">
                    <button onClick={() => setBlock(Jobs.length)} className={`${block == Jobs.length || !Jobs.length ? 'hidden' : 'visible'} bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded`}>
                        Show More
                    </button>
                    <button onClick={() => setBlock(6)} className={`${block == Jobs.length ? 'bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded' : 'hidden'} `}>
                        Show Less
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomeJobs;