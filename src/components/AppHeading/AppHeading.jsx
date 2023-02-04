import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = ({ bgrColor, textColor }) => ({
  mainDiv: {
    backgroundColor: bgrColor,
    color: textColor,
    textAlign: "left",
    height: "fit-content",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    color: textColor,
    fontSize: "40px",
    margin: "0 20px",
  },
});

function AppHeading() {
  const bgrColor = "wheat";
  const textColor = "black";

  const styles = useStyles({ bgrColor, textColor });

  return (
    <>
      <div style={styles.mainDiv}>
        <NavLink to="/" style={{ color: textColor }}>
          <h1>My App</h1>
        </NavLink>
        <div>
          <NavLink to="/signIn" style={styles.navLink}>
            Sign in
          </NavLink>
          <NavLink to="/about" style={styles.navLink}>
            About
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default AppHeading;
