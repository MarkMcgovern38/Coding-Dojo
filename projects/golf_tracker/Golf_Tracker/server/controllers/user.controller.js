import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const UserController = {
    register: async (req, res) => {
        try{
            console.log("Request Body:", req.body);
            const { firstName, lastName, email, password, confirmPassword } = req.body;

            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                console.log("Validation failed: Missing fields");
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                console.log("Validation failed: Passwords don't match")
                return res.status(400).json({ message: "Passwords don't match" });
            }

            const newUser = await User.create(req.body);
            console.log("New user created:", newUser);

            const userToken = jwt.sign(
                {userId:newUser._id, email: newUser.email},
                process.env.SECRET_KEY
            );
            res.cookie('userToken', userToken, {httpOnly: true});
            res.status(201).json(newUser);
        }
        catch(err){
            console.log('Error in register:', err.message)
            res.status(500).json(err)
        }
    },

    login: async (req, res) => {
        try{
            //check if email exist
            const{email, password} = req.body;
            
            const potentialUser = await User.findOne({email})
            console.log(potentialUser);
            if(!potentialUser){
                return res.status(404).json({message:'User not found register now'})
            }
            //check if passwords match
            const passwordMatch = await bcrypt.compare(password, potentialUser.password)
            if(!passwordMatch){
                return res.status(400).json({message:'Invalid credentials'})
            }
            // Log user in
            const userToken = jwt.sign(
                {userId:potentialUser._id, email:potentialUser.email},
                process.env.SECRET_KEY
            )
            res.cookie('userToken', userToken, { httpOnly: true })
            res.status(201).json(potentialUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    logout: async (req, res) => {
        res.clearCookie('userToken')
        res.status(200).json({message:'Successfully Logged Out!'})
    },

    getLoggedInUser: async (req, res) => {
        try{
            const {id} = req.params
            console.log(id);
            console.log(req.params);
            const user = await User.findById(id)
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}