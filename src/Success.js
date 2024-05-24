import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="success-container">
      <h1 className="success-heading">Form Submitted Successfully!</h1>
      <div className="success-details">
        <h2>Details:</h2>
        <p>
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p>
          <strong>Username:</strong> {formData.username}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        {/* <p><strong>Password:</strong> {formData.password}</p> */}
        <p>
          <strong>Phone Number:</strong> {formData.countryCode}{" "}
          {formData.phoneNumber}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>PAN Number:</strong> {formData.panNo}
        </p>
        <p>
          <strong>Aadhar Number:</strong> {formData.aadharNo}
        </p>
      </div>
    </div>
  );
};

export default Success;
