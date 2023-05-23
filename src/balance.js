import React from 'react'
import { Navbar } from './Navbar'

 export const Balance = () => {
  return (
    <>
        <Navbar />
        <div className='App'>
            <div className='auth-form-container'>
                <form className="transfer" >
                    <label for="text">card number</label>
                    <input type="text" placeholder="card number" id="card number" name="card number"/>
                    <label for="password">pin</label>
                    <input type="password" placeholder="pin" id="pin" name="pin"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div> 
    </>
  )
}

// export default Balance;
