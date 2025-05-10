import React from 'react'
import "./managetwo.css"
import { Link } from 'react-router-dom'
function Managefour() {
  return (
    <>
    <div className="manage">
    <div className="container-manage">
        <table className="vehicle-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Vehicle Name</th>
                    <th>Brand</th>
                    <th>Rent per day</th>
                    <th>Category</th>
                    <th>Register no</th>
                    <th>Model</th>
                    <th>Seat Capacity</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>innova</td>
                    <td>toyota</td>
                    <td>1000</td>
                    <td>suv</td>
                    <td>tn68af3099</td>
                    <td>2014</td>
                    <td>8</td>
                    <td>good</td>
                    <td>
                        <div className="action-buttons">
                            <button className="btn btn-delete" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <Link to={"/editfour"}>
                            <button className="btn btn-edit" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            </Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Jupiter</td>
                    <td>tvs</td>
                    <td>500</td>
                    <td>scooter</td>
                    <td>tn68af3099</td>
                    <td>2020</td>
                    <td>3</td>
                    <td>good condition scooty</td>
                    <td>
                        <div className="action-buttons">
                            <button className="btn btn-delete" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button className="btn btn-edit" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Duke 200</td>
                    <td>KTM</td>
                    <td>1000</td>
                    <td>motorcycle</td>
                    <td>tn68af3097</td>
                    <td>2023</td>
                    <td>2</td>
                    <td>good looking bike</td>
                    <td>
                        <div className="action-buttons">
                            <button className="btn btn-delete" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button className="btn btn-edit" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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

export default Managefour