import React from "react";
import propTypes from "prop-types";
function ThemedButton({ theme, label, ...restProps }) {
  return (
    <button className={`btn btn-${theme}`} {...restProps}>
      {label}
    </button>
  );
}

ThemedButton.defaultProps = {
  theme: "success",
};

ThemedButton.propTypes = {
  theme: propTypes.string,
  label: propTypes.string.isRequired,
};
export default ThemedButton;
