import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "BK" + Math.floor(Math.random() * 1000000);
    navigate("/confirmation", { state: { ...formData, bookingId, movieId: id } });
  };

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: "#f5c518", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", marginBottom: "30px" }}
      >
        ← Back
      </button>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#1c1c1c", padding: "40px", borderRadius: "10px" }}>
        <h2 style={{ color: "#f5c518", marginBottom: "30px", textAlign: "center" }}>🎟️ Book Your Seat</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "8px" }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "none", background: "#333", color: "#fff", fontSize: "16px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "8px" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "none", background: "#333", color: "#fff", fontSize: "16px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label style={{ color: "#fff", display: "block", marginBottom: "8px" }}>Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "none", background: "#333", color: "#fff", fontSize: "16px", boxSizing: "border-box" }}
            />
          </div>
          <button
            type="submit"
            style={{ width: "100%", padding: "15px", background: "#f5c518", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;