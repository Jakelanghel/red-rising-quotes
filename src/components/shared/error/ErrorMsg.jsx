import React from "react";

const ErrorMsg = (props) => {
  const { error, apiError } = props;
  if (apiError) {
    return (
      <div>
        <p className="error-msg">{error}</p>
      </div>
    );
  }
};

export default ErrorMsg;
