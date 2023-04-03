import React from "react";
import { Alert } from "react-bootstrap";

const AlertModal = ({
  variant = "danger",
  text = "The username or password you entered is incorrect.",
  visible = false
}) => {
  if (visible === false) return null;
  return (
    <>
      <Alert variant={variant} className="text-center">
        {text}
      </Alert>
    </>
  );
};

export default AlertModal;
