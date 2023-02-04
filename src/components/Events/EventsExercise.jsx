import { useRef, useState, useEffect } from "react";

const EventsExercise = () => {
  const emailRef = useRef();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log("Password: ", password);
  }, [password]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const [{ value: emailInput }, { value: passwordInput }] = e.target.children;
    console.log("Email: ", emailInput);
    console.log("Password: ", passwordInput);
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    console.log("Reset");
  };

  return (
    <form action="/login" onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <input type="text" name="email" ref={emailRef} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">SUBMIT</button>
      <button type="reset">RESET</button>
    </form>
  );
};

export default EventsExercise;
