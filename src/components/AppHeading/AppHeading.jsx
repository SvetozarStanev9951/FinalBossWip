import PropTypes from "prop-types";

const useStyles = ({ bgrColor, textColor }) => ({
  mainDiv: {
    backgroundColor: bgrColor,
    color: textColor,
    textAlign: "left",
    height: "fit-content",
    padding: "20px",
  },
});

function AppHeading({ bgrColor, textColor, children }) {
  const styles = useStyles({ bgrColor, textColor });

  return (
    <div style={styles.mainDiv}>
      <h1>{children}</h1>
    </div>
  );
}

AppHeading.propTypes = {
  bgrColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default AppHeading;
