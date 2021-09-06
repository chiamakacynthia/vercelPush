const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const model = require("./model")
const router = express.Router()


router.get("/", async (req, res)=>{
    const getData = await model.find()
    try {
        res.status(200).json({
            message:"seen all",
            data: getData,
        })
    } catch (error) {
        res.status(404).json({
            message:"seen all",
            data: error,
        })
    }
})

router.post("/", async (req, res)=>{
    const createData = await model.create({
       email: req.body.email,
        password: req.body.password,
    })
 
    try {
        res.status(200).json({
            message:"seen all",
            data: createData,
        })
    } catch (error) {
        res.status(404).json({
            message:"seen all",
            data: error,
        })
    }
})

module.exports = router;