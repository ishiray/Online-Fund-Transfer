
const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/", require("./routes/noteRoute"));
app.get("/",cors(),(req,res) => {

})

const secretKey = 'Hello';

app.post("/", async(req,res) => {
    const{email, password, number, account, pin} = req.body

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch(e) {
        res.json("not exist")
    }
})
app.post("/transfer", async(req,res) => {
    const{account, pin, receiver} = req.body
    console.log("server")
    try{
        console.log("try2")
        const check=await collection.findOne({account:account})
        const check2=await collection.findOne({account:receiver})
        if (check && check2){
            res.json("exist")
            console.log("1")
        }
        else if(!check){
            res.json("not exist")
        }
        else if(!check2){
            res.json("not receiver")
        }
    }
    catch(e) {
        res.json("not exist")
        console.log("2")
    }
})

// const decryptData = (encryptedData) => {
//     const decryptedData = AES.decrypt(encryptedData, secretKey).toString(enc.Utf8);
//     return decryptedData;
//   };

app.post("/register", async(req,res) => {
    const{email, password, number, account, pin} = req.body
    const data={
        email:email,
        password:password,
        number:number,
        account:account,
        pin:pin
    }

    // const decryptedPin = decryptData(pin);
    //         data.pin = decryptedPin;

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            console.log(5)
            // const decryptedPin = decryptData(pin);
            // data.pin = decryptedPin;
            res.json("not exist")
            await collection.insertMany([data])
        }
    }
    catch(e) {
        res.json("not exist")
    }
})
app.listen(3001, () => {
    console.log("port connected")
})