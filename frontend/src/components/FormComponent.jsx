import { useState } from "react";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    userType: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/form", formData);
      console.log(response);
      alert(response.data.message);
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "1000px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 style={{fontSize:"80px"}}>Form Submission</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "15px",
            fontSize: "60px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "15px",
            fontSize: "60px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter your mobile number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          style={{
            padding: "15px",
            fontSize: "60px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
          style={{
            padding: "15px",
            fontSize: "60px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">-select-</option>
          <option value="captain">Captain</option>
          <option value="customer">Customer</option>
        </select>
        <textarea
          name="comment"
          placeholder="Enter your comment"
          value={formData.comment}
          onChange={handleChange}
          required
          style={{
            padding: "15px",
            fontSize: "60px",
            resize: "vertical",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "15px",
            fontSize: "60px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
