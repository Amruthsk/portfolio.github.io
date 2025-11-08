import React from 'react'
import { useState } from 'react';

const Login = () => {
    const[emailId, setEmailId] = useState("");
    const[password, setPassword] = useState("")
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
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login