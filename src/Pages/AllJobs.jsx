import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Components/Jobs/Job";
import { Circles } from  'react-loader-spinner'
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
    const [Jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const [searchedValue, setSearchedValue] = useState(null)

    const handleSearch = e => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchedValue(value)
    }

    const url = searchedValue ? `https://job-cracker.vercel.app/api/v1/jobs-collection?title=${searchedValue}` : 'https://job-cracker.vercel.app/api/v1/jobs-collection'

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(res => {
            setJobs(res.data)
            setLoading(false);
        })
    }, [searchedValue, url])
    return (
        <>
        <Helmet>
            <title>Job Cracker | ALL JOBS</title>
        </Helmet>
            <section className="mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="form-control flex-row justify-center">
                            <input className="py-2.5 md:py-3 px-10 md:px-8 lg:px-10 rounded-tl-[4px] rounded-bl-[4px] w-9/12 bg-transparent text-xs md:text-sm lg:text-base md:mx-0 border-[#65D5CF] focus:border-2 border focus:outline-none font-medium" type="text" name="search" placeholder="Enter Your Job's Name " />
                            <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded-tr-[4px] rounded-br-[4px] ">SEARCH</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className=" mx-4 md:mx-10 mb-[40px] md:mb-[80px] lg:mb-[130px]">
                {
                    loading && <div className="flex justify-center text-purple-600 items-center min-h-screen">
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
                    Jobs.length ?
                        <div className="space-y-6">
                            {
                                Jobs.map(job => <Job key={job._id} job={job} ></Job>)
                            }
                        </div>
                        : <></>
                }
                {
                    !Jobs.length && <div className="min-h-screen flex items-center justify-center">
                        <img className="w-full" src="https://i.ibb.co/k0S5J1q/no-data-concept-illustration-114360-616-removebg-preview.png" alt="" />
                    </div>
                }
            </section>
        </>
    );
};

export default AllJobs;