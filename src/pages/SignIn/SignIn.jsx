import { useContext, useRef, useState } from "react";
import {
  Typography,
  Box,
  styled,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SignInButton from "../../components/Styled/SignInButton";
import { AppContext } from "../../components/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(() => ({
  width: "60%",
  maxWidth: "1080px",
  margin: "auto",
}));

function SignIn() {
  const { setUser } = useContext(AppContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberMeInputRef = useRef();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    setErrors({});

    const email = emailInputRef.current?.value?.trim();
    const password = passwordInputRef.current?.value?.trim();

    if (!email) {
      setErrors((errors) => ({ ...errors, email: "Email is required" }));
    }

    if (!password) {
      setErrors((errors) => ({ ...errors, password: "Password is required" }));
      return;
    } else {
      if (password !== "test1234") {
        setErrors((errors) => ({ ...errors, password: "Wrong password" }));
        return;
      }
    }

    const allUsers = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => json);

    const [user] = allUsers.filter(
      (el) => el.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      setErrors((errors) => ({ ...errors, email: "User does not exist" }));
      return;
    }

    setUser(user);
    navigate("/profile");
  };

  return (
    <Container>
      <Typography variant="h2">Sign In</Typography>
      <TextField
        error={errors.email}
        fullWidth
        helperText={errors.email || "Type in your email"}
        placeholder="some@email.com"
        inputRef={emailInputRef}
        type="email"
        inputProps={{
          style: {
            fontSize: "28px",
          },
        }}
      />
      <TextField
        fullWidth
        error={errors.password}
        helperText={errors.password || "Type in your password"}
        placeholder="s0m3pa55word"
        inputRef={passwordInputRef}
        type="password"
        inputProps={{
          style: {
            fontSize: "28px",
          },
        }}
      />
      <FormControlLabel
        control={<Checkbox inputRef={rememberMeInputRef} />}
        label="Remember me"
      />
      <SignInButton variant="outlined" onClick={handleSignIn}>
        Sign in
      </SignInButton>
    </Container>
  );
}

export default SignIn;
