import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"; // Import your CSS file

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+91", name: "India" },
  ];

  const countries = ["India", "USA"];
  const cities = {
    India: ["Mumbai", "Delhi"],
    USA: ["New York", "Los Angeles"],
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required";
    tempErrors.username = formData.username ? "" : "Username is required";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.password = validatePassword(formData.password);
    tempErrors.countryCode = formData.countryCode
      ? ""
      : "Country Code is required";
    tempErrors.phoneNumber = formData.phoneNumber
      ? ""
      : "Phone Number is required";
    tempErrors.country = formData.country ? "" : "Country is required";
    tempErrors.city = formData.city ? "" : "City is required";
    tempErrors.panNo = formData.panNo ? "" : "PAN Number is required";
    tempErrors.aadharNo = formData.aadharNo ? "" : "Aadhar Number is required";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[a-zA-Z]/.test(password)) {
      return "Password must contain at least one letter";
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~-]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
  }, [formData, isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      navigate("/success", { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {isSubmitted && errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {isSubmitted && errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {isSubmitted && errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {isSubmitted && errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-group">
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password-btn"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {isSubmitted && errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <div className="phone-group">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="">Select Country Code</option>
              {countryCodes.map((country) => (
                <option
                  key={country.code}
                  value={country.code}
                >{`${country.name} (${country.code})`}</option>
              ))}
            </select>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {isSubmitted && errors.countryCode && (
            <span className="error-message">{errors.countryCode}</span>
          )}
          {isSubmitted && errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>
        <div className="form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {isSubmitted && errors.country && (
            <span className="error-message">{errors.country}</span>
          )}
        </div>
        <div className="form-group">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {cities[formData.country] &&
              cities[formData.country].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          {isSubmitted && errors.city && (
            <span className="error-message">{errors.city}</span>
          )}
        </div>
        <div className="form-group">
          <label>PAN Number</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {isSubmitted && errors.panNo && (
            <span className="error-message">{errors.panNo}</span>
          )}
        </div>
        <div className="form-group">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {isSubmitted && errors.aadharNo && (
            <span className="error-message">{errors.aadharNo}</span>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
