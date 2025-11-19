import React from 'react'
import axios from 'axios';
import { BASE_URL } from  '../utils/constants'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const RequestPage = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const getRequests = async() =>{
     setStatus("loading");
     setError(null);
    try{
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));

      console.log(
        "Deposition Successful. Redux `requests` slice is now populated."
      );
      setStatus("succeeded");
    }
    catch(err){
      console.error("Request Data Failed:", err);
        setStatus("failed");
        setError(err.response?.data?.message || "Failed to fetch requests.");

    }
  }

  const reviewRequest = async (status, _id) => {
    try{
       await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
       dispatch(removeRequest(_id));

    }
    catch(err){
console.error(`Judgment (${status}) on ${_id} failed:`, err);
    }
  }

  useEffect(()=>{
    getRequests();
  }, [dispatch]);

  return (
    <div>
      <h1>Connection Requests</h1>
      <div className="space-y-4">
        {status === "loading" && <p>Loading requests...</p>}
        {status === "failed" && <p className="text-red-500">{error}</p>}
        {status === "succeeded" && (!requests || requests.length === 0) && (
          <p>You have no pending connection requests.</p>
        )}
        {status === "succeeded" &&
          requests &&
          requests.length > 0 &&
          requests.map((request) => (
            <div
              key={request._id}
              className="flex items-center justify-between p-3 bg-base-200 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={request.fromUserId.photoUrl}
                      alt={`${request.fromUserId.firstName}'s photo`}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-bold">
                    {request.fromUserId.firstName} {request.fromUserId.lastName}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RequestPage