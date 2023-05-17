import React from "react";

function Button({ children, version, type, isdDisabled }) {
  return (
    <button type={type} disabled={isdDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isdDisabled: false,
};

export default Button;
