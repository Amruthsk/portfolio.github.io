import React from "react";

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  const handleLogin = async () => {
    try {
      setError(""); 
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
       setError(
         err?.response?.data || "Something went wrong. Please try again."
       );
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-300 card-md shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
          </div>

          <div className="py-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="card-actions justify-center">
            {error && (
              <p className="text-red-500 text-xs bold mt-2">{error}</p>
            )}
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
