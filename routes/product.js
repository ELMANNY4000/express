const express = require('express')
const router = express.Router()

router.get("/product", (req, res) => {
    res.send([
        {
            name: "iphone 12 pro",
            desc : "black FU",
            price: "$1770",
            rate:6
        },
        {
            name: "iphone 12 pro",
            desc : "black FU",
            price: "$1770",
            rate:6
        },
        {
            name: "iphone 12 pro",
            desc : "black FU",
            price: "$1770",
            rate:6
        },

    ])
})



router.get("/product/:id", (req, res) => {
    res.send({
        name: "iphone 12 pro",
        desc : "black FU",
        price: "$1770",
        rate:6
    })
})


router.post("/product", (req,res)=> {
    res.send("add a new product")
})

router.put("/product/:id", (req,res)=> {
    res.send("new product")
})

router.delete("/product/:id", (req,res)=> {
    res.send("remove product")
})


module.exports = router