// import { useNavigate, Link } from "react-router-dom";


const express = require("express");
const router = express.Router();
const collection = require("../mongo")


// router.route("/register").post((req,res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const username = req.body.username;
//     console.log("no2");
//     const newInfo = new collection({
//         email,
//         password
//     });
    
//     newInfo.save();
// })


  
  
  
//   // Function to insert data if not already present
//   const insertDataIfNotExists = async (newData) => {
//     console.log("yes1");
//     // Query the database to check if the data exists
//     const existingData = await collection.findOne(newData);
  
//     if (!existingData) {
//       // Data doesn't exist, so create a new instance and save it
//       const newDataInstance = new collection(newData);
//       console.log("yes2");
//       const insertedData = await newDataInstance.save();
//       console.log('New data inserted:', insertedData);
//     } else {
//       console.log('Data already exists:', existingData);
//     }
//   };
  
//   // Usage example
// //   const newData = { field1: 'value1', field2: 42 };
//   insertDataIfNotExists(newInfo);
        
    
    
// })

module.exports = router;