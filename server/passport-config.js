const LocalStrategy = require("passport").Strategy
const bcrypt = require("bcrypt")

// const findByUsername = (username) => {
//     const user = User.findOne({
//         where: {username: {[Op.eq]: username}}
//     })
//     if(user) {
//         return user
//     }
//     return null
// }

function initialize(passport, findByUsername) {
    const authenticateUser = async(username, password, done) => {
        const user = await findByUsername(username)
        if(user === null) {
            return done(null, false, {message: "Login yoki parol xato"})
        }
        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: "Login yoki parol xato"})
            }
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStrategy({usernameField: "username"}), authenticateUser)
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        done(null, get)
    })
}

module.exports = initialize