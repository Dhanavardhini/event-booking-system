
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './f.css';

function Twobooking() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost/eventbackend/controllers/api/User/Get/Eevent.php');
        console.log(response.data); 
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="main-book">
      <h1 className="h1two">🎭 Entertainment Events</h1>
      <div className="two-card">
        {events.length > 0 ? (
          events.map((event) => {
            const formattedDate = new Date(event.date).toLocaleDateString();

            return (
              <div className="event-card" key={event.id}>
                <div 
                  className="event-image" 
                  style={{ backgroundImage: `url(http://localhost/eventbackend/controllers/api/User/upload/${event.file})` }}
                ></div>
                <div className="event-details">
                  <h2 className="event-name">{event.event_type}</h2>
                  <p className="event-price">₹{event.price}</p>
                  <p className="event-date">{event.event_date}</p>  
                  <p className="event-status">{event.event_status}</p>

                  <Link 
                    to={{ pathname: `/bookform/${event.id}` }} 
                    state={{ 
                      price: event.price, 
                      event_name: event.event_type,  // event_name will be passed to BookForm
                      event_date: event.event_date 
                    }}
                  >
                    <button className="view-button">Book Now</button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="loading-text">Loading events...</p>
        )}
      </div>
    </div>
  );
}

export default Twobooking;
