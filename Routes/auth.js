const router =require ("express"). Router()
const {signup} =require("../Controllers/auth.js")

router.post("/signup", signup)

module.exports= router