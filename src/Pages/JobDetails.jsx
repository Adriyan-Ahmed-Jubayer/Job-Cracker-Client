import { useLoaderData } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6"
import { BsPerson, BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BiCategoryAlt } from 'react-icons/bi';
import { useContext } from "react";
import { AuthContext } from "../Providers/Authentication";
import { toast } from "react-toastify";

const JobDetails = () => {
    const Job = useLoaderData();
    const { _id, Company, CompanyLogo, Title, UserName, Category, SalaryRange, Description, PostDate, Deadline, ApplicantsNumber, Banner } = Job.data;
    const {User} = useContext(AuthContext);

    const handleApply = (Deadline) => {
        const currentDate = Date.now()
        const deadline = new Date(Deadline).getTime();
        
        if(currentDate > deadline){
            toast.error('The deadline for this job has passed. You cannot apply', {
                position: "top-center"
            })
            return;
        }
        if(User.email === Job.data.PosterEmail){
            toast.error('Employers cannot apply for their own jobs.', {
                position: "top-center"
            })
            return;
        }
        if(deadline > currentDate){
            document.getElementById('my_modal_1').showModal();
        }
    }
    return (
        <>
            <section className="container mx-auto mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex-1">
                        <img className="w-full" src="https://i.ibb.co/NYy1PJm/resume-concept-illustration-114360-185-removebg-preview.png" alt="" />
                    </div>
                    <div className="flex-1 border border-teal-500 p-5 rounded space-y-5">
                        <div>
                            <img src={Banner} alt="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <img className="max-w-[40px] max-h-[40px] rounded-full" src={CompanyLogo} alt="" />
                                    <h1 className="text-sm font-bold ">{Company}</h1>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-4xl"><AiOutlineCalendar></AiOutlineCalendar></span>
                                    <h3 className="text-sm font-bold "> {PostDate}</h3>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-4xl"><BsPerson></BsPerson></span>
                                    <h3 className="text-sm font-bold "> {UserName}</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-3xl text-red-500"><ImCross></ImCross></span>
                                    <h3 className="text-sm font-bold "> {Deadline}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-sm md:text-base lg:text-lg font-bold"><span className="font-medium">Job Position:</span> {Title}</h1>
                            <p className="text-[12px] leading-6 text-[#64666C] md:text-[14px] md:leading-8 lg:text-[16px] lg:leading-9"><span className="font-medium text-black">Job Description:</span> {Description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-3xl"><FaSackDollar></FaSackDollar></span>
                                    <h1 className="text-sm font-bold ">{SalaryRange}</h1>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-4xl"><BiCategoryAlt></BiCategoryAlt></span>
                                    <h3 className="text-sm font-bold "> {Category}</h3>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <abbr title={`Applicants Number ${ApplicantsNumber} `}>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-4xl"><BsFillPersonPlusFill></BsFillPersonPlusFill></span>
                                        <h3 className="text-sm font-bold "> {ApplicantsNumber}</h3>
                                    </div>
                                </abbr>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleApply(Deadline)} className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-3 md:py-3 px-9 md:px-8 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog" className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required defaultValue={User?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">E-mail</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" defaultValue={User?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="text" name="resume" placeholder="Enter Your Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-3 md:py-3 px-9 w-full md:px-8 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">Apply</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default JobDetails;