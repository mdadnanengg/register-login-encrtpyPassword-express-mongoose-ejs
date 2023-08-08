import { createUser } from '../services/registerServices.js'
import bcrypt from 'bcrypt'

let registerPage = (req, res) => {
    res.render('register')
}

let registerUser = async (req, res) => {
    const { name, email, mobile, password, repassword } = req.body

    //add functionality to if req.body get empty values

    bcrypt.hash(password, 10, async (err, hash) => {

        // all code in bcrypt.hash can optimized
        let status = await createUser(name, email, mobile, hash)

        if (password == repassword) {
            if (status == 'success') {
                res.render("logedindashboard", {
                    name: name,
                    message: 'Your Registration Is Successfull please login'
                })
            } else {
                res.send('Registration Un Successfull')
            }
        } else {
            res.send('Password and repassword did not match')
        }

    })
}
export { registerPage, registerUser };