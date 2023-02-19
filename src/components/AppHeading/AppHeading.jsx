import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { AppContext } from "../AppContext/AppContext";

const Container = styled(Box)(() => ({
  backgroundColor: "wheat",
  color: "black",
  textAlign: "left",
  height: "fit-content",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LinkText = styled(Typography)(() => ({
  color: "black",
  margin: "0 20px",
}));

function AppHeading() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Container>
        <NavLink to="/">
          <LinkText variant="h3">My App</LinkText>
        </NavLink>
        <Container>
          <NavLink to="/about">
            <LinkText variant="h4">About</LinkText>
          </NavLink>
          {user?.id ? <UserHeading /> : <PublicHeading />}
        </Container>
      </Container>
      <Outlet />
    </>
  );
}

const UserHeading = () => {
  return (
    <>
      <NavLink to="/profile">
        <LinkText variant="h4">Profile</LinkText>
      </NavLink>
    </>
  );
};

const PublicHeading = () => {
  return (
    <>
      <NavLink to="/signIn">
        <LinkText variant="h4">Sign in</LinkText>
      </NavLink>
    </>
  );
};

export default AppHeading;
