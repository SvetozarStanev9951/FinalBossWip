import { useState } from "react";

const Playground = () => {
  const [user, setUser] = useState();
  return (
    <>
      <h1>Playground</h1>
      <SignIn setUser={setUser} />
      <UserPage user={user} />
    </>
  );
};

const SignIn = ({ setUser }) => {
  const handleSignIn = () => {
    setUser({
      name: "Test User",
      email: "user@test.com",
    });
  };
  return (
    <>
      <h2>SignIn</h2>
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
};

const UserPage = ({ user }) => {
  return (
    <>
      <h2>User Page</h2>
      <h3>Name: {user?.name}</h3>
      <h3>Email: {user?.email}</h3>
    </>
  );
};

export default Playground;
