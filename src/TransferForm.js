import React from 'react'

const TransferForm = () => {
  return (
    <>
      <div className='App'>
        <div className='auth-form-container'>
            <form className='transfer'>
                <label for = "text">Account Number</label>
                <input type = "text" placeholder="Account Number" id = "Account Number" name="Account Number" />
                <label for = "text">IFSC Code</label>
                <input type = "text" placeholder="IFSC Code" id = "IFSC Code" name="IFSC Code" />
                <label for = "text">Phone Number</label>
                <input type = "text" placeholder="Phone Number" id = "Phone Number" name="Phone Number" />
                <label for = "text">Amount to Tranfer</label>
                <input type = "text" placeholder="Amount to Tranfer" id = "Amount to Tranfer" name="Amount to Tranfer" />
                <button>Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default TransferForm
