import React from 'react'
import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const fetchUser = async () => {
    if (user) return;
    try{
      const res = await axios.get(BASE_URL + "/profile/view",
        {withCredentials:true,});
        dispatch(addUser(res.data));

    } catch (err){
      if(err.status === 401){
         navigate("/login");
      }
      console.error("Authentication failed:", err);
     
    }
  }

  useEffect(() => {
    if(!user){
      fetchUser();
    }
  
  }, []);
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Body