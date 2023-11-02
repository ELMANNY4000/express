const express = require('express')
const usersRouter = express.Router()

usersRouter.get("/users", (req, res) => {
    res.send([
        {
            name: "Lee Owonikoko",
            email: "leeowonikoko@gmc.com",
            id: 1,
        },
        {
            name: "Paul Okonta",
            email: "paulokonta@gmc.com",
            id: 2
        },
        {
            name: "Precious Omisakin",
            email: "preciousOmisakin@gmc.com",
            id: 3
        }
    ])
})


usersRouter.get("/users/:id", (req, res) => {
    res.send([
        {
            name: "Lee Owonikoko",
            email: "leeowonikoko@gmc.com",
            id: 1,
        },
    ])
})


usersRouter.post("/users", (req, res) => {
    res.send("new user add ")
})
    

usersRouter.put("/users/:id", (req, res) => {
    res.send("upadte new user")
})


usersRouter.delete("/users/:id", (req, res) => {
    res.send("remove user ")
})



module.exports = usersRouter