import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isHappy: true,
    employment: "",
    favColor: "",
  });
  //console.log(formData.favColor);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return { ...prevForm, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        className="form-data"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        className="form-data"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        className="form-data"
      />
      <input
        type="checkbox"
        name="isHappy"
        id="isHappy"
        checked={formData.isHappy}
        onChange={handleChange}
      />
      <label htmlFor="isHappy">I am Happy</label>
      <fieldset>
        <legend>Current Employment Status</legend>
        <input
          type="radio"
          id="part-time"
          name="employment"
          onChange={handleChange}
          value="part-time"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part Time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          onChange={handleChange}
          value="full-time"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full Time</label>
      </fieldset>
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <label htmlFor="favColor">Choose a Color</label>
      <select
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
}
