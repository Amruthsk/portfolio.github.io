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
  const [error, setError] = useState("");
  const [isLoginForm, setisLoginForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
   const handleSignup = async () => {
     try {
       setError("");
       const res = await axios.post(
         BASE_URL + "/signup",
         {firstName,
          lastName,
           emailId,
           password,
         },
         {
           withCredentials: true,
         }
       );
       console.log("Signup successful, user created:", res.data);

       dispatch(addUser(res.data));
       return navigate("/profile");
     } catch (err) {
       setError(err?.response?.data || "Signup failed. Please try again.");
     }
   };
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-300 card-md shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{isLoginForm ? "Login" : "Sign Up"}</h2>

          {!isLoginForm && (
            <>
              {/* First Name Input */}
              <div className="py-4">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name Input */}
              <div className="py-4">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

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

          <div className="card-actions flex flex-col items-center space-y-3">
            {error && (
              <p className="text-red-500 text-sm font-semibold mt-2 text-center">
                {error}
              </p>
            )}

            <button
              className="btn btn-primary w-full py-2 text-lg font-semibold"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Create Account"}
            </button>
          </div>
        </div>

        <p
          onClick={() => setisLoginForm((value) => !value)}
          className="text-center text-sm  mb-4 cursor-pointer hover:underline text-blue-600"
        >
          {isLoginForm
            ? "New here? Create an account"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;
