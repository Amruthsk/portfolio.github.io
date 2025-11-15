import React from 'react'

const UserCard = ({user}) => {
   const { firstName, lastName, photoUrl, age, gender, about } = user;
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
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard