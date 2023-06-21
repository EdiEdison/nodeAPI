const express = require("express")
const mongoose = require("mongoose")
const portfolio = require('./models/productModel')

const app = express()

app.use(express.json())

// routes

app.get('/', (req, res) =>{
    res.send("HELLO API")
})

app.get('/portfolio', async(req, res) => {
    try {
        const portfolios = await portfolio.find({});
        res.status(200).json(portfolios)
    } catch {
        res.status(500).json({message: error.message})
    }
})

app.get('/portfolio/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const someportfolio = await portfolio.findById(id);
        res.status(200).json(someportfolio)
    } catch (error) {
        res.status(500).json({message: erro.message})
    }
})

app.post('/portfolio', async(req, res) => {
    try {
        const newportfolio = await portfolio.create(req.body)
        res.status(200).json(newportfolio);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});


mongoose.
connect('mongodb+srv://ediedisonfornang:admin123@cluster0.cvslnoe.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    console.log("Connected");
    app.listen(3000, ()=> {
        console.log("Node Api is running on port 3000");
    })
}).catch((error)=> {
    console.log(error);
})