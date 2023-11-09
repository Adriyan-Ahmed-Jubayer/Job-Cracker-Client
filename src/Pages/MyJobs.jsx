import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authentication";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Circles } from 'react-loader-spinner'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const MyJobs = () => {
    const { User } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const [Jobs, setJobs] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:5000/api/v1/collection?email=${User?.email}`)
                .then(res => setJobs(res.data))
            setLoading(false)
        }, 1000);
    }, [Jobs]);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/v1/collection/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount> 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
    }
    return (
        <>
        <Helmet>
            <title>Job Cracker | Jobs Collection</title>
        </Helmet>
            <div className="my-[40px] md:my-[80px] lg:my-[130px] shadow-2xl font-bold">
                <ul className="grid grid-cols-9 place-items-center text-[12px] py-4 bg-[#E6E6E6] rounded-tr-xl rounded-tl-xl">
                    <li>Job Title</li>
                    <li>Posted by</li>
                    <li>Category</li>
                    <li>Salary</li>
                    <li>Posting Date</li>
                    <li>Deadline</li>
                    <li>Applicants</li>
                    <li>update</li>
                    <li>Delete</li>
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
                            return <ul key={job._id} className="grid grid-cols-9 place-items-center text-[12px] py-4 border-teal-200 border ">
                                <li>{job.Title}</li>
                                <li>{job.UserName}</li>
                                <li>{job.Category}</li>
                                <li>{job.SalaryRange}</li>
                                <li>{job.PostDate}</li>
                                <li>{job.Deadline}</li>
                                <li>{job.ApplicantsNumber}</li>
                                <Link to={`/update-job/${job._id}`}>
                                    <button className="p-4 rounded-box bg-teal-300 text-xl text-white font-extralight "><AiOutlineEdit className="hover:scale-150 duration-500 "></AiOutlineEdit></button>
                                </Link>
                                <button onClick={() => handleDelete(job._id)} className="p-4 rounded-box bg-red-500 text-xl text-white font-extralight"><AiOutlineDelete className="hover:scale-150 duration-500 "></AiOutlineDelete></button>
                            </ul>
                        })
                    }
                    {
                        !Jobs.length && !loading && <div className="min-h-screen flex items-center justify-center">
                            <img className="w-full" src="https://i.ibb.co/k0S5J1q/no-data-concept-illustration-114360-616-removebg-preview.png" alt="" />
                        </div>
                    }
                </div>
            </div>


        </>
    );
};

export default MyJobs;