const express = require('express');
const router = express.Router();

require('./db')
const User = require('./models/User')

router.get('/',(req,res)=>{
res.send("hello router")

});

router.post('/addnumbers', async (req, res) => {
    console.log(req.body.firstnum)
    const user = new User(req.body)
await user.save();

   
        res.status(201).json({message: "Number Add successfully"})
})

module.exports= router;