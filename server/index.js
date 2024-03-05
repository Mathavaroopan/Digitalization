const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Mathavaroopan:Mathavaroopan@cluster0.oh7gbee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    try{
        res.send("Hello world");
    }catch(err){
        console.error(err);
    }
})

app.listen(5000, () => {
    console.log("Listening to the port 5000...")
})