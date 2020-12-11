const User = require ("../Models/User");
const bcrypt = require ("bcrypt")

const authCtrl= {}

authCtrl.signup= async (request,response) => {
    const {firstName, lastName, email, password}= request.body;

    const user = new User ({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })

    try {
        user.password= bcrypt.hashSync(user.password,10)
        const newUser= await user.save()
            response.send ({message: "User created successfully", newUser})
            
    }
    catch (exception){
        console.log(exception)
        response.status(500).send({error: "Internal server Error"})
    }
}

authCtrl.login= async (request,response) => {
    const {email, password}= request.body;
    await User.findOne({email:email, password: password},
        (error,user)= newUser)
    if (error){
        response.status(500)
        response.send ({message:"Internal Server Error"})
    }
}

module.exports= authCtrl