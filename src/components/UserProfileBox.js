import React from "react";
import "./UserProfileBox.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserProfileBox() {
  const { authUser } = useSelector((state) => state.auth);
  return (
    <div className="p-std user_profile_box d-flex flex-column align-items-center justify content-between">
      {authUser.id ? (
        <div className="d-flex flex-column align-items-center justify content-between">
          <div className="user_profile_box_image">
            <img src={authUser.photo} width="100px" />
          </div>
          <h5 className="text-main mt-2">
            {authUser.firstName.charAt(0).toUpperCase() +
              authUser.firstName.slice(1) +
              " " +
              authUser.lastName.charAt(0).toUpperCase() +
              authUser.lastName.slice(1)}
          </h5>
          <p className="font-1">{authUser.email}</p>
          <p className="font-1 mt-2">{authUser.birthDate}</p>
          <Link to="./userprofile/profile">
            <button className="btn btn-primary bg-main mt-3">
              Profile Git
            </button>
          </Link>
        </div>
      ) : (
        <p>User Profile</p>
      )}
    </div>
  );
}
