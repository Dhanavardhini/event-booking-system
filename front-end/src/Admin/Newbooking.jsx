import React from 'react'
import "./managetwo.css"

function Newbooking() {
  return (
    <>
       <div className="manage">
    <div className="container-manage">
        <table className="vehicle-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Vehicle Name</th>
                    <th>Register no</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>adhi</td>
                    <td>tvs</td>
                    <td>tn68af3099</td>
                    <td>4</td>
                    <td>5000</td>
                    <td>Unapproved</td>
                    <td>
                        <div className="action-buttons">
                            <button className="btn btn-delete" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
              
                

            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}

export default Newbooking