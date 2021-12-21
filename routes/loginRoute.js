const express = require('express')

const router = express.Router()


router.get(`/login`,(req,res) => {
    res.render(`loginPage`,{
        title:'Вхід'
    })
})

router.get(`/register`,(req,res) => {
    res.render(`registerPage`,{
        title:"Реєстрація"
    })
})

module.exports = router