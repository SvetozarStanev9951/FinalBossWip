import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { STORAGE_KEYS } from "../../utils/constants";

const Container = styled(Box)(() => ({
  width: "60%",
  maxWidth: "1080px",
  margin: "auto",
}));

// 4. Sign out page
// 5. On sign out confirm, remove all user data (Sign Out function)
// 6. Custom auth hook

function SignIn() {
  const { user, setUser } = useContext(AppContext);
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (user?.id) {
      navigate("/profile");
    }
  }, [user]);

  const handleSignIn = async () => {
    setErrors({});

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

    if (rememberMe) {
      window.localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } else {
      window.sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }

    setUser(user);
    navigate("/profile");
  };

  const handleInputChange = (e) => {
    const { value, checked, type } = e.target;
    if (type === "email") setEmail(value);
    if (type === "checkbox") setRememberMe(checked);
  };

  return (
    <Container>
      <Typography variant="h2">Sign In</Typography>
      <TextField
        error={!!errors.email}
        fullWidth
        helperText={errors.email || "Type in your email"}
        placeholder="some@email.com"
        type="email"
        inputProps={{
          style: {
            fontSize: "28px",
          },
        }}
        value={email}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        error={!!errors.password}
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
        control={<Checkbox checked={rememberMe} onChange={handleInputChange} />}
        label="Remember me"
      />
      <SignInButton
        variant="outlined"
        onClick={handleSignIn}
        data-testid="sign-in-button"
      >
        Sign in
      </SignInButton>
    </Container>
  );
}

export default SignIn;
