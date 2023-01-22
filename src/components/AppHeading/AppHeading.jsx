import PropTypes from "prop-types";

function AppHeading({ bgrColor, textColor, children }) {
  return (
    <h1
      style={{
        backgroundColor: bgrColor,
        color: textColor,
      }}
    >
      {children}
    </h1>
  );
}

AppHeading.propTypes = {
  bgrColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default AppHeading;
