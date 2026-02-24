import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>No booking found!</div>;

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#1c1c1c", padding: "40px", borderRadius: "10px", textAlign: "center" }}>
        <div style={{ fontSize: "60px", marginBottom: "20px" }}>🎉</div>
        <h2 style={{ color: "#f5c518", marginBottom: "30px" }}>Booking Confirmed!</h2>
        
        <div style={{ background: "#333", padding: "20px", borderRadius: "10px", marginBottom: "30px" }}>
          <p style={{ color: "#f5c518", fontSize: "20px", fontWeight: "bold" }}>Booking ID: {state.bookingId}</p>
          <hr style={{ border: "1px solid #444", margin: "15px 0" }} />
          <p style={{ color: "#fff" }}><strong>Name:</strong> {state.name}</p>
          <p style={{ color: "#fff" }}><strong>Email:</strong> {state.email}</p>
          <p style={{ color: "#fff" }}><strong>Mobile:</strong> {state.mobile}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          style={{ background: "#f5c518", border: "none", padding: "15px 30px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" }}
        >
          🎬 Back to Movies
        </button>
      </div>
    </div>
  );
}

export default Confirmation;