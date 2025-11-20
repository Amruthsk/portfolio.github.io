import React from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const dispatch = useDispatch();
   const { _id,firstName, lastName, photoUrl, age, gender, about } = user;

   const handleSendRequest = async (status, userId) => {
     try {
       const res = await axios.post(
         BASE_URL + "/request/send/" + status + "/" + userId,
         {},
         { withCredentials: true }
       );
       console.log(`Decision (${status}) on user ${userId} sent successfully.`);
       dispatch(removeUserFromFeed(userId));
     } catch (err) {
       console.error(`Decision (${status}) on user ${userId} failed:`, err);
     }
   };
   
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt={`${firstName}'s profile photo`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        {about && <p>{about}</p>}
        <div className="text-sm text-gray-500 mt-2">
          {age && <p>Age: {age}</p>}
          {gender && <p>Gender: {gender}</p>}
        </div>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("IGNORED", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("INTERESTED", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard