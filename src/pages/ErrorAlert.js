import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorAlert = () => {
  const navigate = useNavigate();
  return (
    <div className="alert alert-danger alert-dismissible fade show w-75 mx-auto text-center mt-5">
      <h4 className="alert-heading">
        <i className="bi-exclamation-octagon-fill"></i> Oops! Something went
        wrong.
      </h4>
      <p>Your transaction has failed. Please go back and try again.</p>
      <hr />

      <button
        type="button"
        className="btn btn-warning"
        onClick={() => navigate("/")}
      >
        Back home
      </button>
    </div>
  );
};
export default ErrorAlert;
