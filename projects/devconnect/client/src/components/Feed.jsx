import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard"

const Feed = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
 const feed = useSelector((store) => store.feed);


  const getFeed = async () => {
    setStatus("loading");
    setError(null);
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));


      setStatus("succeded");
     
      console.log("API response:", res.data);
      console.log("Payload being dispatched:", res.data.data);

    } catch (err) {
      console.error(err);
      setStatus("failed");
      setError(
        err.response?.data?.message ||
          "Failed to load feed. Please try again later"
      );
    }
  };
  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, [feed]);

  if (status === "loading") {
    return <div>Loading your feed...</div>;
  }
  if (status === "failed") {
    return <div className="text-red-500">Error: {error} </div>;
  }

  return (
  
  <div className="flex justify-center items-center p-4">
    
    {feed && feed.length > 0 && (
      <UserCard user={feed[0]} />
    )}
  </div>
);
};

export default Feed;
