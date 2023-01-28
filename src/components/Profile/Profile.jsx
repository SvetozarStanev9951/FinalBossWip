import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Posts from "../Posts/Posts";

const Profile = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
      .then((response) => response.json())
      .then((json) => setProfileData(json));
  }, []);

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
