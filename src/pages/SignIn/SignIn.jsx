import { useState } from "react";

function SignIn() {
  const [userData, setUserData] = useState();

  const handleSignIn = () => {
    console.log(userData);
  };

  const handleInputChange = ({ target: { value, name, checked, type } }) => {
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <h1>Sign In</h1>
      <input
        type="email"
        onChange={handleInputChange}
        name="email"
        placeholder="Type in your email"
      />
      <input type="password" onChange={handleInputChange} name="password" />
      <input type="checkbox" onChange={handleInputChange} name="rememberMe" />
      <input
        type="checkbox"
        onChange={handleInputChange}
        name="cookieConsent"
      />
      <button onClick={handleSignIn}>Sign in </button>
    </>
  );
}

export default SignIn;
