const express = require("express");
const errorController = require("./modules/error/errorController");
const AppError = require("./core/utils/AppError");
const userRouter = require("./modules/user/userRouter");
const regionRouter = require("./modules/region/regionRouter");
const authRouter = require("./modules/auth/authRouter");
const cors = require("cors");
// const swaggerJsDoc = require("swagger-jsdoc")
// const swaggerUI = require("swagger-ui-express")

// ROUTES
const orderRoutes = require("./modules/order/orderRoutes");
const authMiddleware = require("./core/middlewares/authMiddleware");
const districtRouter = require("./modules/district/districtRouter");
const packageRoutes = require("./modules/package/packageRoutes")
const postsRoutes = require("./modules/post/postRouter");
require("./modules/user/User");
const telegramBot = require("./telegramBot");
const passport = require("passport");
const passportRouter = require("./modules/auth/passportRouter")
const {Op} = require("sequelize")    
telegramBot()

const app = express();
app.use(express.json());
app.use(cors());
// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "InterEX Uz",
//             version: "1.0.0"
//         },
// 		servers: [
// 			{
// 				url: "http://localhost:8080"
// 			}
// 		],
// 		components: {
// 			securitySchemes: {
// 				bearerAuth: {
// 					type: "http",
// 					scheme: "bearer",
// 					bearerFormat: "JWT"
// 				}
// 			}
// 		},
// 		security: [
// 			{
// 				bearerAuth: [],
// 			}
// 		]
//     },
//     apis: ["./routes/*.js"]
// }

// const swaggerDocs = swaggerJsDoc(options)
// app.use("/api/v1/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const User = require("./modules/user/User")
const cookieParser = require("cookie-parser")

app.use(cookieParser())

const cookieExtractor = (req, res) => {
    let token = null
    if(req && req.cookies) {
        token = req.cookies["jwt"]
    }
    console.log(token);
    return token
}

const options = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.JWT_SECRET
}


passport.use(new JwtStrategy(options, async(payload, done) => {
    console.log(options)
    const user = await User.findOne({where: {id: {[Op.eq]: payload.id}}})
    if(user) {
        done(null, user)
    }   
    else {
        done(null, false)
    }
}))

app.use("/api/v1/users", passport.authenticate("jwt", {session: false}), userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/protected", passport.authenticate("jwt", {session: false}), passportRouter)
app.use("/api/v1/regions", regionRouter);
app.use("/api/v1/orders", authMiddleware, orderRoutes);
app.use("/api/v1/packages", authMiddleware, packageRoutes)
app.use("/api/v1/districts", authMiddleware, districtRouter);
app.use("/api/v1/posts", authMiddleware, postsRoutes);
app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/build/index.html");
});

app.all("*", (req, res, next) => {
	return next(new AppError(`${req.path} yo'li mavjud emas`, 404));
});

app.use(errorController);

module.exports = app;
