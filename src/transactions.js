import React from 'react'
import './ReactTable.css'
import { TransactionsHeading } from './transactionsHeading'
import { Navbar } from './Navbar'

const ReactTable = () => {
    const data =[
        {
            name:"Ishita",
            accountNumber:"123",
            phoneNumber:"123456",
            bankName:"SBI",
            branch:"Basvangudi"
        },
        {
            name:"Ishita",
            accountNumber:"123",
            phoneNumber:"123456",
            bankName:"SBI",
            branch:"Basvangudi"
        },
    ]
  return (
    <>
    <Navbar />
    <TransactionsHeading/>
    <div className='table'>
      <table className='table-container'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Account Nymber</th>
                <th>Phone no</th>
                <th>Bank</th>
                <th>Branch</th>
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
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ReactTable
