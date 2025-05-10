import React, { useState, useRef } from 'react';
import axios from 'axios';
import './twowheel.css';

function Addtwowheel() {
  const [formData, setFormData] = useState({
    event_type: '',
    event_date: '',
    price: '',
    event_status: '',
    file: null, 
  });

  const fileInputRef = useRef(null); 

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('event_type', formData.event_type);
    payload.append('event_date', formData.event_date);
    payload.append('price', formData.price);
    payload.append('event_status', formData.event_status);
    payload.append('file', formData.file);

    try {
      const response = await axios.post(
        'http://localhost/eventbackend/controllers/api/User/post/events.php',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response:', response.data);
      alert('Event Ticket added successfully!');
      setFormData({
        event_type: '',
        event_date: '',
        price: '',
        event_status: '',
        file: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add Event Ticket. Please try again.');
    }
  };

  return (
    <div className="main-2">
      <div className="twomain">
        <div className="container-two">
          <h1>Add Event Tickets</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="event_type">Event Type:</label>
                <input
                  type="text"
                  id="event_type"
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="event_date">Event Date:</label>
                <input
                  type="date"
                  id="event_date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Ticket Price :</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="event_status">Event Status:</label>
                <select
                  id="event_status"
                  name="event_status"
                  value={formData.event_status}
                  onChange={handleChange}
                  required
                  style={{backgroundColor:"black"}}
                >
                  <option value="">Select Status</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="file"
                  className="file-input"
                  accept="image/*"
                  onChange={handleChange}
                  ref={fileInputRef} 
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addtwowheel;
