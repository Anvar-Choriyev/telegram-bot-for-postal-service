const express = require("express")
const passportController = require("./passport")
const router = express.Router()


router.get("/users", passportController.login)

module.exports = router