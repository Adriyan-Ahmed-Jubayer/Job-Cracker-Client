import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authentication";
import { Circles } from "react-loader-spinner";

const AppliedJobs = () => {
    const [Jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const { User } = useContext(AuthContext)
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
    const [selectedCategory, setSelectedCategory] = useState(Categories[0].name)

    const url = selectedCategory == Categories[0].name ? `http://localhost:5000/api/v1/application?email=${User.email}` : `http://localhost:5000/api/v1/application?email=${User.email}&category=${selectedCategory}`
    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
            .then(res => setJobs(res.data))

            setLoading(false)
        }, 1000);
       
    }, [selectedCategory])
    return (
        <>
            <section className="my-[40px] md:my-[80px] lg:my-[130px] container mx-auto">
                <div className="flex items-center gap-3 justify-center md:justify-normal">
                    <h1>Filter By Category</h1>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="text-xs md:text-sm lg:text-base bg-teal-300 rounded-md p-3" name="Category" id="">
                        {
                            Categories.map(Category => <option key={Category.id} value={Category.name} className="bg-teal-300">
                                {Category.name}
                            </option>)
                        }
                    </select>
                </div>
            </section>
            <div className="my-[40px] md:my-[80px] lg:my-[130px] shadow-2xl font-bold">
                <ul className="grid grid-cols-4 place-items-center text-[12px] py-4 bg-[#E6E6E6] rounded-tr-xl rounded-tl-xl">
                    <li>Job Title</li>
                    <li>Applier Name</li>
                    <li>Applier Email</li>
                    <li>Resume</li>
                </ul>
                <div className="">
                    {
                        loading && <div className="flex justify-center items-center min-h-screen">
                            <Circles
                                height="80"
                                width="80"
                                color="#0FCFEC"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    }
                    {
                        Jobs.map(job => {
                            return <ul key={job._id} className="grid grid-cols-4 place-items-center text-[12px] py-4 border-teal-200 border ">
                                <li>{job.Title}</li>
                                <li>{job.ApplierName}</li>
                                <li>{job.ApplierEmail}</li>
                                <li>{job.ApplierResume}</li>
                            </ul>
                        })
                    }
                    {
                        !Jobs.length && <div className="min-h-screen flex items-center justify-center">
                            <img className="w-full" src="https://i.ibb.co/k0S5J1q/no-data-concept-illustration-114360-616-removebg-preview.png" alt="" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;