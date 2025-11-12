import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const getFeed = async () => {
    setStatus("loading");
    setError(null);
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));

      setStatus("succeded");
      console.log("feed data retrived: ", res.data);
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
    if (status === "idle") {
      getFeed();
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading your feed...</div>;
  }
  if (status === "failed") {
    return <div className="text-red-500">Error: {error} </div>;
  }

  return <div>Feed</div>;
};

export default Feed;
