import { NavLink } from "react-router-dom";
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
  },
});

function AppHeading({ bgrColor, textColor, children }) {
  const styles = useStyles({ bgrColor, textColor });

  return (
    <div style={styles.mainDiv}>
      <NavLink to="/" style={{ color: textColor }}>
        <h1>{children}</h1>
      </NavLink>
      <NavLink to="/signIn" style={styles.navLink}>
        Sign in
      </NavLink>
      <NavLink to="/about" style={styles.navLink}>
        About
      </NavLink>
    </div>
  );
}

AppHeading.propTypes = {
  bgrColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default AppHeading;
