import { useRef } from "react";
import {
  Typography,
  Box,
  styled,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SignInButton from "../../components/Styled/SignInButton";

const Container = styled(Box)(() => ({
  width: "60%",
  maxWidth: "1080px",
  margin: "auto",
}));

function SignIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberMeInputRef = useRef();

  const handleSignIn = () => {
    console.table({
      Email: emailInputRef.current?.value ?? "",
      Password: passwordInputRef.current?.value ?? "",
      "Remember?": rememberMeInputRef.current?.checked ?? false,
    });
  };

  return (
    <Container>
      <Typography variant="h2">Sign In</Typography>
      <TextField
        fullWidth
        helperText="Type in your email"
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
        helperText="Type in your password"
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
