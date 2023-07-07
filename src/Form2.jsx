import React from "react";
import { useState } from "react";
import "./form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed in");
    } else {
      console.log("Password do not match");
      return;
    }
    if (formData.okayToEmail) {
      console.log("Thanks for signing Up");
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          className="form--input"
          onChange={handleChange}
        />
        <div className="form--marketing">
          <input
            type="checkbox"
            id="okayToEmail"
            name="okayToEmail"
            onChange={handleChange}
            checked={formData.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  );
}
