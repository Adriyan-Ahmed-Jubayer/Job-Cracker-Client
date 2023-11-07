import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authentication";

const MyJobs = () => {
    const {User} = useContext(AuthContext);
    const [Jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/collection?email=${User?.email}`)
        .then(res => console.log(res.data))
    }, []);
    return (
        <>
            <div></div>
        </>
    );
};

export default MyJobs;