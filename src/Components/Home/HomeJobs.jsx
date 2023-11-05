import { useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios";

const HomeJobs = () => {
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
    const handleJobs = async(Category) => {
        await setTabs(Category);
        axios.get()
    }
    return (
        <>
            <div>
                <div className="flex gap-2 items-center justify-center">
                    {
                        Categories.map(Category => <button key={Category.id} onClick={() => handleJobs(Category)} className={tabs.id === Category.id ? ` py-2 md:py-3 px-3 md:px-6 lg:px-9 relative rounded` : `btn-border py-2 md:py-3 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm `}>
                            {
                                tabs.id === Category.id && <motion.div layoutId="active category" className={ `absolute inset-0 b bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]`}/>
                            }
                                <span className={tabs.id === Category.id ? `relative text-white font-bold text-xs md:text-sm` : `relative text-design font-bold text-xs md:text-sm`} >{Category.name}</span>
                            
                        </button> )
                    }
                </div>
                <div className="mt-8 md:mt-14 lg:mt-20 xl:mt-28 flex justify-center">
                    
                </div>
            </div>
        </>
    );
};

export default HomeJobs;