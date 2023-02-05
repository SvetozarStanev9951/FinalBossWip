import { useRef } from "react";
import SignInButton from "../../components/Styled/SignInButton";

const useStyles = () => ({
  container: {
    width: "60%",
    maxWidth: "1080px",
    margin: "auto",
  },
  input: {
    fontSize: "28px",
    padding: "5px 15px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    marginBottom: "20px",
  },
  checkbox: {
    width: "50px",
    margin: 0,
  },
});

function SignIn() {
  const styles = useStyles();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberMeInputRef = useRef();

  const handleSignIn = () => {
    console.table({
      Email: emailInputRef.current.value,
      Password: passwordInputRef.current.value,
      "Remember?": rememberMeInputRef.current.checked,
    });
  };

  return (
    <>
      <div style={styles.container}>
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="some@email.com"
          style={styles.input}
          ref={emailInputRef}
        />
        <input
          type="password"
          name="password"
          style={styles.input}
          placeholder="s0m3Pa55worD"
          ref={passwordInputRef}
        />
        <div style={styles.row}>
          <input
            type="checkbox"
            name="rememberMe"
            style={styles.checkbox}
            ref={rememberMeInputRef}
          />
          <span>Remember me?</span>
        </div>
        <SignInButton variant="contained" onClick={handleSignIn}>
          Sign in
        </SignInButton>
      </div>
    </>
  );
}

export default SignIn;
