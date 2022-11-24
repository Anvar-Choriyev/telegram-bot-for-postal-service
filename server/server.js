const dotenv = require("dotenv");
const flash = require("express-flash");
const { session } = require("passport");
const passport = require("passport");
const nodeEnv = process.env.NODE_ENV;
let envPath;
if (nodeEnv === "dev") {
	envPath = ".env.dev";
} else if (nodeEnv === "prod") {
	envPath = ".env.prod";
}
dotenv.config({ path: `./${envPath}` });

const app = require("./app");
const database = require("./core/config/database/database");
const initialData = require("./core/utils/initialData");
const { getUsers } = require("./modules/user/userController");
// const initializePassport = require("./passport-config")
// initializePassport(passport, 
// 	username => getUsers.find(user => user.username === username),
// 	id => users.find(user => user.id === id))

// const users = []

// app.use(flash())
// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	resave: false,
// 	saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

const PORT = process.env.PORT || 9090;
const start = async () => {
	try {
		await database.authenticate();
		await database.sync({
			// force: true,
		});
		app.listen(PORT, () => {
			console.log(`Server ${process.env.NODE_ENV} started on port ${PORT}`);
		});

		initialData();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
