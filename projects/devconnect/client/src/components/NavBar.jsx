import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
       await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.error("Server Purge Failed:", err);
    }
  };

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            DevConnect
          </Link>
        </div>
        {user && (
          <div className="flex gap-2">
            <span className="font-medium">Welcome, {user.firstName}</span>
            <div className="dropdown dropdown-end mx-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Photo" src={user.photoUrl} />
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  Menu
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to="/profile"
                      className="flex justify-between items-center hover:text-gray-300"
                    >
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/settings"
                      className="flex justify-between items-center hover:text-gray-300"
                    >
                      Settings
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex justify-between items-center hover:text-gray-300 text-left w-full"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
