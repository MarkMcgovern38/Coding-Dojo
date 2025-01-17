import { Schema, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator"
import validator from 'validator'
const { isEmail } = validator
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [isEmail, 'Not an email'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, {timestamps: true})
UserSchema.plugin(mongooseUniqueValidator)

// MiddleWare
UserSchema.virtual('confirmPassword')
    .get(function () {
        return this._confirmPassword
    })
    .set(function (value) {
        this._confirmPassword = value
    })

UserSchema.pre('validate', function (next){
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "Passwords don't match")
    }
    next()
})

UserSchema.pre('save', function (next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            console.log('HASH: ', hash);
            this.password = hash
            next()
        })
})

const User = model('User', UserSchema);
export default User;