import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import axios from 'axios';

export default function Dashboard() {
    const [businessClassTickets, setBusinessClassTickets] = useState(0);
    const [firstClassTickets, setFirstClassTickets] = useState(0);

    useEffect(() => {
        axios.get('http://localhost/eventbackend/controllers/api/admin/get/countenter.php')
            .then(response => {
                console.log('Business Class Tickets Response:', response.data);
                const count = response.data.length;
                setBusinessClassTickets(count); 
            })
            .catch(error => {
                console.error('Error fetching business class tickets:', error);
            });

       
        axios.get('http://localhost/eventbackend/controllers/api/admin/get/functioncount.php')
            .then(response => {
                console.log('First Class Tickets Response:', response.data);
                const count = response.data.length;
                setFirstClassTickets(count);
            })
            .catch(error => {
                console.error('Error fetching first class tickets:', error);
            });
    }, []); 

    return (
        <>
            <main className="main-content">
                <div className="container">
                    <section className="summary-cards">
                        <div className="card1">
                            <h2>Entertainment Event Booking Tickets</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>
                        <div className="card1">
                            <h2>Function Event Booking Tickets</h2>
                            <p><FaAngleDoubleDown /></p>
                        </div>

                        <div className="card2">
                            <h3>Entertainment Event Bookings</h3>
                            <p>{businessClassTickets}</p> 
                        </div>
                        <div className="card2">
                            <h3>Function Event Booking</h3>
                            <p>{firstClassTickets}</p> 
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
