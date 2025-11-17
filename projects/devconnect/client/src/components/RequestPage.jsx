import React from 'react'
import axios from 'axios';
import { BASE_URL } from  '../utils/constants'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRequests } from "../utils/requestSlice";

const RequestPage = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getRequests = async() =>{
     setStatus("loading");
     setError(null);
    try{
      const res = await axios.get(BASE_URL + "user/request/recieved",{
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));

      console.log(
        "Deposition Successful. Redux `requests` slice is now populated."
      );
      setStatus("succeeded");
    }
    catch(err){
      console.error("Request Data    Failed:", err);
        setStatus("failed");
        setError(err.response?.data?.message || "Failed to fetch requests.");

    }
  }

  useEffect(()=>{
    getRequests();
  }, []);

  return (
    <div>
      <h1>Connection Requests</h1>
      <div className = "space-y-4">
        {status === 'loading' && <p>Loading requests...</p>}
        {status === 'failed' && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default RequestPage