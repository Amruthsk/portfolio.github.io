import React from 'react'
import { useState, useEffect } from "react";
import UserCard from "./UserCard";



const EditProfile = ({ currentUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");


  
  useEffect(() => {
    if (currentUser) {
         setFirstName(currentUser.firstName || "");
         setLastName(currentUser.lastName || "");
         setAge(currentUser.age || "");
         setGender(currentUser.gender || "Male");
         setAbout(currentUser.about || "");
         setPhotoUrl(currentUser.photoUrl || "");
    }
  }, [currentUser]);

  const previewUser = {
    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl,
  };


  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 justify-center">
      <form className=" md:flex-1 space-y-3 p-4 bg-base-200 rounded-lg">
        <h1 className="text-2xl font-bold">Edit Your Profile</h1>
        {/* First Name Input */}
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* Last Name Input */}
        <div>
          <label className="label">Last Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Age Input */}
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        {/* Gender Dropdown */}
        <div>
          <label className="label">Gender</label>
          <select
            className="select select-bordered w-full"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* About Textarea */}
        <div>
          <label className="label">About</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        {/* Photo URL Input */}
        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Profile
        </button>
      </form>

      <div className="w-full md:w-auto p-4 bg-base-300 rounded-lg shadow-md justify-center">
        <h2 className="text-xl font-bold mb-4 text-center">Live Preview</h2>
        <UserCard user={previewUser} />
      </div>
    </div>
  );
};

export default EditProfile