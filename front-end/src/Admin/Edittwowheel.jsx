import React from 'react'
import "./twowheel.css"
function Edittwowheel() {
  return (
   <>   
   <div className="main-2">
   <div className="twomain">
   <div class="container-two">
        <h1>Edit Two-Wheeler</h1>
        <form action="#" method="POST" enctype="multipart/form-data">
            <div class="form-grid">
                <div class="form-group">
                    <label for="vehicle-name">Vehicle Name:</label>
                    <input type="text" id="vehicle-name" name="vehicle-name" required/>
                </div>

                <div class="form-group">
                    <label for="vehicle-category">Vehicle Category:</label>
                    <select id="vehicle-category" name="vehicle-category" required>
                        <option value="scooter">Scooter</option>
                        <option value="motorcycle">Motorcycle</option>
                        
                    </select>
                </div>

                <div class="form-group">
                    <label for="vehicle-brand">Vehicle Brand:</label>
                    <input type="text" id="vehicle-brand" name="vehicle-brand" required/>
                </div>

                <div class="form-group">
                    <label for="register-number">Register Number:</label>
                    <input type="text" id="register-number" name="register-number" required/>
                </div>

                <div class="form-group">
                    <label for="rental-price">Rental Price (per day):</label>
                    <input type="number" id="rental-price" name="rental-price" min="0" step="0.01" required/>
                </div>

                <div class="form-group">
                    <label for="model-year">Model/Year:</label>
                    <input type="text" id="model-year" name="model-year" required/>
                </div>

                <div class="form-group">
                    <label for="seat-capacity">Seat Capacity:</label>
                    <input type="number" id="seat-capacity" name="seat-capacity" min="1" required/>
                </div>

                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="file" id="image" name="image" class="file-input" accept="image/*" required/>
                </div>
            </div>

            <button type="submit" class="submit-btn">Edit</button>
        </form>
    </div>
    </div>
    </div>

   </>
  )
}

export default Edittwowheel