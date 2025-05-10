import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookform.css";

function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "", 
    tickets: 1,
    event_date: "",
    time: "", 
    payment: "",
    price: 0,
    status: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  
  // Destructure the state from location
  const { price = 0, event_name = "", event_date = "" } = location.state || {};
 

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      event: event_name, 
      event_date: event_date,
    }));
  
    if (formData.tickets && price) {
      const calculatedPrice = Number(formData.tickets) * price;
      setFormData((prevData) => ({
        ...prevData,
        price: calculatedPrice,
      }));
    }
  }, [formData.tickets, price, event_name, event_date]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/eventbackend/controllers/api/User/post/functionbook.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.message);
      alert("Event Booking Added successfully");
      navigate("/bookfour");
    } catch (error) {
      console.error("Error during event booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="vr-body">
      <div className="vr-container">
        <h1 className="vr-title">Function Event Booking Form</h1>
        <form className="vr-form" onSubmit={handleSubmit}>
          <div className="vr-form-group">
            <label className="vr-label">Name:</label>
            <input
              className="vr-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Email:</label>
            <input
              className="vr-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Phone Number:</label>
            <input
              className="vr-input"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Event:</label>
            <input
              className="vr-input"
              type="text"
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Number of Tickets:</label>
            <input
              className="vr-input"
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Event Date:</label>
            <input
              className="vr-input"
              type="date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Event Time:</label>
            <input
              className="vr-input"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Payment Method:</label>
            <input
              className="vr-input"
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Calculated Price:</label>
            <input
              className="vr-input"
              type="text"
              value={formData.price || "N/A"}
              disabled
            />
          </div>
          <button className="vr-submit-btn" type="submit">
            Book Tickets
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookings;
