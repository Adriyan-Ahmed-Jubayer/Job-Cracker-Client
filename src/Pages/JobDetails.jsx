import { useLoaderData, useParams } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6"
import { BsPerson, BsFillPersonPlusFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BiCategoryAlt } from 'react-icons/bi';
import { useContext } from "react";
import { AuthContext } from "../Providers/Authentication";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const JobDetails = () => {
    const [Job, setJob] = useState({})
    const {id} = useParams()
    const form = useRef();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/job/${id}`)
        .then(res => setJob(res.data))
    }, [Job])


    const { _id, Company, CompanyLogo, Title, UserName, Category, SalaryRange, Description, PostDate, Deadline, ApplicantsNumber, Banner } = Job;
    const { User } = useContext(AuthContext);

    const handleApply = (Deadline) => {
        const currentDate = Date.now()
        const deadline = new Date(Deadline).getTime();

        if (currentDate > deadline) {
            toast.error('The deadline for this job has passed. You cannot apply', {
                position: "top-center"
            })
            return;
        }
        if (User.email === Job.PosterEmail) {
            toast.error('Employers cannot apply for their own jobs.', {
                position: "top-center"
            })
            return;
        }
        if (deadline > currentDate) {
            document.getElementById('my_modal_1').showModal();
        }
    }

    const handleSubmit = (e) => {
        const templateParams = {
            to_email: User?.email
          };
        
        emailjs.sendForm('service_fjwmtwy', 'template_28viznu', form.current, 'waJ9Yf5ojORw9LwV5', templateParams)
      .then((result) => {console.log(result.text)}, (error) => {console.log(error.text)});
        const ApplierName = e.target.name.value;
        const ApplierEmail = e.target.email.value;
        const ApplierResume = e.target.resume.value;
        const AppliedJob = { ...Job, ApplierName, ApplierEmail, ApplierResume };
        delete AppliedJob._id;
        fetch('http://localhost:5000/api/v1/application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AppliedJob)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    fetch(`http://localhost:5000/api/v2/job?id=${_id}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({$inc: {ApplicantsNumber: 1 }})
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('Data Updated', data);
                            if(data){
                                toast.success('Your Application Submited Successfully')
                            }
                        })
                }

            })

    }
    return (
        <>
        <Helmet>
            <title>
                Job Cracker | Job Details
            </title>
        </Helmet>
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
                            <p className="text-[12px] leading-6 text-[#64666C] dark:text-gray-300 md:text-[14px] md:leading-8 lg:text-[16px] lg:leading-9"><span className="font-medium text-black dark:text-gray-100">Job Description:</span> {Description}</p>
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
                    <form ref={form} onSubmit={handleSubmit} method="dialog" className="space-y-4">
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
                            <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-3 md:py-3 px-9 w-full md:px-8 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default JobDetails;