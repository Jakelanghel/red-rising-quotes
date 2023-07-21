import React from "react";

const ErrorMsg = (props) => {
  const { error } = props;
  return (
    <div>
      <p className="error-msg">{error}</p>
    </div>
  );
};

export default ErrorMsg;
