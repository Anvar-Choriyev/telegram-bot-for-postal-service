const express = require("express")
const User = require("../user/User")
const passportController = require("./passport")

const router = express.Router()

router.post("/register", passportController.register)

module.exports = router