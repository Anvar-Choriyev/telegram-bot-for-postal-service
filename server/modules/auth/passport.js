const passport = require("passport")
const catchAsync = require("../../core/utils/catchAsync")

exports.login = catchAsync(async(req, res, next) => {
    res.send("Authorized") 
})
