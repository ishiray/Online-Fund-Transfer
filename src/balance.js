import React from 'react'
import { Navbar } from './Navbar'
import { Balanceheading } from './Balanceheading'

 export const Balance = () => {
    const data =[
        {
            name:"Ishita",
            accountNumber:"123",
            phoneNumber:"123456",
            bankName:"SBI",
            branch:"Basvangudi",
            amount:"10000"
        },
        {
            name:"Ishita",
            accountNumber:"123",
            phoneNumber:"123456",
            bankName:"SBI",
            branch:"Basvangudi",
            amount:"10000"
        },
    ]
  return (
    <>
        <Navbar />
        <Balanceheading />
        <div className='table'>
      <table className='table-container'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Account Nymber</th>
                <th>Phone no</th>
                <th>Bank</th>
                <th>Branch</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val,i)=>
                <tr>
                    <td>{val.name}</td>
                    <td>{val.accountNumber}</td>
                    <td>{val.phoneNumber}</td>
                    <td>{val.bankName}</td>
                    <td>{val.branch}</td>
                    <td>{val.amount}</td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
        <div className='App'>
             {/* < className='auth-form-container'>
                <form className="transfer" >
                    <label for="text">card number</label>
                    <input type="text" placeholder="card number" id="card number" name="card number"/>
                    <label for="password">pin</label>
                    <input type="password" placeholder="pin" id="pin" name="pin"/>
                    <button type="submit">Submit</button>
                </form>
            </div> */}
        </div> 
    </>
  )
}

// export default Balance;
