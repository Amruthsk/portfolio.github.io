import React from 'react'
import axios from "axios"
import { BASE_URL } from '../utils/constants';
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";


const ConnectionPage = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const connections = useSelector((store) => store.connections || []);

  const fetchConnections = async () => {
    setStatus("loading");
    setError(null);
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("Data  Successful:", res.data.data);
      dispatch(addConnection(res.data.data));
      setError(null);
      setStatus("succeeded");
    } catch (err) {
      setStatus("failed");
      setError(err.response?.data?.message || "Failed to fetch connections.");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (status === "loading") {
    return <div className="p-4 md:p-8">Loading connections...</div>;
  }

  if (status === "failed") {
    return <div className="alert alert-error p-4 md:p-8">{error}</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">My Connections</h1>

      {connections && connections.length === 0 && (
        <p>No connections found. Go make some friends!</p>
      )}

      {connections && connections.length > 0 && (
        <div className="space-y-4">
          {connections.map((connection) => (
            <div
              key={connection._id}
              className="flex space-y-4 items-center p-4 bg-base-300 rounded-lg shadow"
            >
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img
                    src={connection.photoUrl || "https://i.pravatar.cc/300"}
                    alt={`${connection.firstName}'s photo`}
                  />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">
                  {connection.firstName} {connection.lastName}
                </h2>
                {connection.age && (
                  <p className="text-sm text-gray-400">Age: {connection.age}</p>
                )}
                {connection.about && (
                  <p className="text-base-content">{connection.about}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConnectionPage;