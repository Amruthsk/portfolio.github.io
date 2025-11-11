import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
   const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9999/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        });
        console.log("User : ", res.data);
        dispatch(addUser(res.data));
      
      
    } catch (err) {
      console.error(err);
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
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
