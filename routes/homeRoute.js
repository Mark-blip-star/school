const express = require('express')

const router = express.Router()


router.get(`/`,(req,res) => {
    res.render(`homePage`,{
        title:'DevOps'
    })
})

module.exports = router