

import React, { useEffect, useState } from 'react';
import './mybook.css';

function Mybooking() {
  const [businessClassBookings, setBusinessClassBookings] = useState([]);
  const [firstClassBookings, setFirstClassBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const [businessClassResponse, firstClassResponse] = await Promise.all([
          fetch('http://localhost/eventbackend/controllers/api/admin/get/countenter.php'),
          fetch('http://localhost/eventbackend/controllers/api/admin/get/functioncount.php'),
        ]);

        const businessClassData = await businessClassResponse.json();
        const firstClassData = await firstClassResponse.json();

        setBusinessClassBookings(businessClassData);
        setFirstClassBookings(firstClassData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderTableRows = (bookings) => {
    if (bookings.length === 0) {
      return (
        <tr>
          <td colSpan="10">No bookings available</td>
        </tr>
      );
    }

    return bookings.map((booking, index) => (
      <tr key={index} className="vrs-table-row">
        <td className="vrs-table-cell" data-label="Name">{booking.name}</td>
        <td className="vrs-table-cell" data-label="Email">{booking.email}</td>
        <td className="vrs-table-cell" data-label="Phone">{booking.phone}</td>
        <td className="vrs-table-cell" data-label="Event">{booking.event}</td>
        <td className="vrs-table-cell" data-label="Tickets">{booking.tickets}</td>
        <td className="vrs-table-cell" data-label="Event Date">{booking.event_date}</td>
        <td className="vrs-table-cell" data-label="Time">{booking.time}</td>
        <td className="vrs-table-cell" data-label="Payment">{booking.payment}</td>
        <td className="vrs-table-cell" data-label="Price">{booking.price}</td>
        <td className="vrs-table-cell" data-label="Status">{booking.status}</td>
      </tr>
    ));
  };

  return (
    <div className="main-mybook">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="vrs-container">
        <h1 className="vrs-heading">Entertainment event Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Event</th>
              <th className="vrs-table-cell">Tickets</th>
              <th className="vrs-table-cell">Event Date</th>
              <th className="vrs-table-cell">Time</th>
              <th className="vrs-table-cell">Payment</th>
              <th className="vrs-table-cell">Price</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(businessClassBookings)}
          </tbody>
        </table>
      </div>

      <div className="vrs-container">
        <h1 className="vrs-heading">Function Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Event</th>
              <th className="vrs-table-cell">Tickets</th>
              <th className="vrs-table-cell">Event Date</th>
              <th className="vrs-table-cell">Time</th>
              <th className="vrs-table-cell">Payment</th>
              <th className="vrs-table-cell">Price</th>
              <th className="vrs-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(firstClassBookings)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;
