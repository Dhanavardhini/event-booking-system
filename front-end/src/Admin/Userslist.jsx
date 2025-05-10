
import axios from "axios";
import "./userlist.css";
import React, { useEffect, useState } from "react";

function Userslist() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost/eventbackend/controllers/api/admin/get/countenter.php"
        );
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch event data");
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (event) => {
    setEditingEventId(event.id);
    setEditFormData(event);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        "http://localhost/eventbackend/controllers/api/admin/put/enterupdate.php",
        editFormData
      );
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEventId ? { ...event, ...editFormData } : event
        )
      );
      setEditingEventId(null);
      alert("Event updated successfully");
    } catch (err) {
      console.error("Error updating event:", err);
      alert("Failed to update event");
    }
  };

  const handleCancelClick = () => {
    setEditingEventId(null);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost/eventbackend/controllers/api/admin/delete/enterdel.php",
        { id }
      );
      if (response.data.message === "success") {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
        alert("Event deleted successfully");
      } else {
        throw new Error(response.data?.message || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="event-container">
      <table className="event-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Event</th>
            <th>Tickets</th>
            <th>Event Date</th>
            <th>Time</th>
            <th>Payment</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
          <tr key={event.id} className={editingEventId === event.id ? "editing-row" : ""}>

              {editingEventId === event.id ? (
                <>
                  <td><input type="text" name="id" value={editFormData.id} readOnly /></td>
                  <td><input type="text" name="name" value={editFormData.name} onChange={handleInputChange} /></td>
                  <td><input type="email" name="email" value={editFormData.email} onChange={handleInputChange} /></td>
                  <td><input type="text" name="phone" value={editFormData.phone} onChange={handleInputChange} /></td>
                  <td><input type="text" name="event" value={editFormData.event} onChange={handleInputChange} /></td>
                  <td><input type="number" name="tickets" value={editFormData.tickets} onChange={handleInputChange} /></td>
                  <td><input type="date" name="event_date" value={editFormData.event_date} onChange={handleInputChange} /></td>
                  <td><input type="time" name="time" value={editFormData.time} onChange={handleInputChange} /></td>
                  <td><input type="text" name="payment" value={editFormData.payment} onChange={handleInputChange} /></td>
                  <td><input type="number" name="price" value={editFormData.price} onChange={handleInputChange} /></td>
                  <td><input type="text" name="status" value={editFormData.status} onChange={handleInputChange} /></td>
                  <td>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{event.email}</td>
                  <td>{event.phone}</td>
                  <td>{event.event}</td>
                  <td>{event.tickets}</td>
                  <td>{event.event_date}</td>
                  <td>{event.time}</td>
                  <td>{event.payment}</td>
                  <td>{event.price}</td>
                  <td>{event.status}</td>
                  <td>
                    <button onClick={() => handleEditClick(event)}>Edit</button>
                    <button onClick={() => handleDelete(event.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
}

export default Userslist;










