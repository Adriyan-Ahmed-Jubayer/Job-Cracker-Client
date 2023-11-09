import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authentication";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddJob = () => {
    const { User } = useContext(AuthContext);
    const [dateOfDeadline, setDateOfDeadline] = useState(null);
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const Company = User?.displayName;
        const CompanyLogo = User?.photoURL;
        const PosterEmail = User?.email;
        const PosterPhoto = User?.photoURL;
        const Title = form.Title.value;
        const UserName = User.displayName;
        const Category = form.Category.value;
        const SalaryRange = form.SalaryRange.value;
        const Description = form.Description.value;
        const PostDate = form.PostDate.value;
        const Deadline = form.Deadline.value;
        const ApplicantsNumber = +form.ApplicantsNumber.value;
        const Banner = form.Banner.value;
        const Job = { Company, CompanyLogo, PosterEmail, PosterPhoto, Title, UserName, Category, SalaryRange, Description, PostDate, Deadline, ApplicantsNumber, Banner }
        console.log(Job);
        fetch('https://job-cracker-bkvg9bh4v-adriyan.vercel.app/api/v1/jobs', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(Job)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('Your Job Added Successfully ')
            }
        })
    }
    return (
        <>
        <Helmet>
            <title>Job Cracker | ADD JOB</title>
        </Helmet>
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" className="w-9/12 md:w-7/12 xl:w-4/12 mx-auto text-center space-y-3 lg:space-y-6 mb-5 md:mb-10 xl:mb-14">
                <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">ADD YOUR JOB OPPORTUNITY</h4>
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold leading-tight">Post Your Job <span className="text-design">Opportunity</span></h1>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Share Your Job Opening with the World! Get Started with [Your Website Name] and Attract Top Talent to Your Organization.</p>
            </div>
            <section className='pb-20'>
                <div className="">
                    <div className="bg-teal-500 bg-opacity-25 px-5 md:p-10 py-5 text-center rounded-[5px] mx-4 xl:mx-0">
                        <form onSubmit={handleAddJob} className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Job Title</span>
                                </label>
                                <input type="text" placeholder="Enter Job Title ..." className="input input-bordered text-sm md:text-base dark:text-black " name='Title' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Job Category</span>
                                </label>
                                <select name="Category" className="input input-bordered text-sm md:text-base dark:text-black ">
                                    <option value="ONSITE">ONSITE</option>
                                    <option value="REMOTE">REMOTE</option>
                                    <option value="HYBRID">HYBRID</option>
                                    <option value="PART TIME">PART TIME</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Salary Range</span>
                                </label>
                                <input type="text" placeholder="Enter Salary Range" name='SalaryRange' className="input input-bordered text-sm md:text-base dark:text-black "  required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Posting Date</span>
                                </label>
                                <input type="date" placeholder="Enter Job Posting Date ..." className="input input-bordered text-sm md:text-base dark:text-black " name='PostDate' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold  ">Dead Line</span>
                                </label>
                                <div className="">
                                    <DatePicker
                                        selected={dateOfDeadline}
                                        onChange={(date) => setDateOfDeadline(date)}
                                        placeholderText="Enter Job's Circular's Deadline"
                                        dateFormat="yyyy-MM-dd"
                                        name="Deadline"
                                        className="input input-bordered text-sm md:text-base col-span-1 w-full dark:text-black "

                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Applicants Number</span>
                                </label>
                                <input type="text" defaultValue={0} placeholder="Enter Your Job's Applicants Number ..." className="input input-bordered text-sm md:text-base dark:text-black " name='ApplicantsNumber' required />
                            </div>
                            <div className="form-control lg:col-span-3">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Banner Image</span>
                                </label>
                                <input type="text" placeholder="Enter Banner Image ..." className="input input-bordered text-sm md:text-base dark:text-black " name='Banner' required />
                            </div>
                            
                            <div className="form-control lg:col-span-3">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold">Job Description</span>
                                </label>
                                <textarea name="Description" className="lg:col-span-2 text-[10px] md:text-base lg:text-lg py-2 md:py-4 rounded-lg px-6 dark:text-black " rows="8" placeholder="Try To Add Atleast 400 Character"></textarea>
                            </div>
                            <button className=" lg:col-span-3 bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-3 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">ADD JOB</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddJob;