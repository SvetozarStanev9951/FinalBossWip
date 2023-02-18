import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";

import Loader from "../Loader/Loader";
import Posts from "../Posts/Posts";

const Profile = () => {
  const { user: profileData } = useContext(AppContext);

  if (!profileData) return <Loader isLoading={true} />;

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Username: {profileData.username}</p>
      <p>Email: {profileData.email}</p>
      <p>Phone: {profileData.phone}</p>
      <Posts userId={profileData.id} />
    </>
  );
};

export default Profile;
