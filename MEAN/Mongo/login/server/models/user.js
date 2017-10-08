const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');
const UserSchema = new mongoose.Schema({
    email: {type: String, 
        minlength: [1, "The email field cannot be left blank!"],
        required: [true, "An email address is required!"],
        unique: [true, "This email is already in use! Please use another, or log in!"],
        validate: [
            {
                validator: function( address ) {
                  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return emailRegex.test(address);
                },
                message: "Please enter a valid email address!"
            },
        ]},
    first_name: {type: String, 
        minlength: [1, "The first name cannot be left blank!"],
        required: [true, "A first name is required!"],
        trim: true},
    last_name: {type: String, 
        minlength: [1, "The last name cannot be left blank!"], 
        required: [true, "A last name is required!"], 
        trim: true},
    password: {type: String, 
        minlength: [1, "The password field cannot be blank!"],
        required: [true, "A password is required!"],
    },
    birthday: {type: Date, 
        required: [true, "A birth date is required!"],
        validate: [{ // ensure yyyy-mm/dd and that the date is in the past
            validator: function(date){
                const formatted = moment(date).format("YYYY-MM-DD");
                const dateRegex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])/;
                if(!dateRegex.test(formatted)){
                    return false;
                }
                const past = moment(date).valueOf();
                const current = moment().valueOf();
                return current > past;
            },
            message: "Invalid birth date!"
        }]
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

// pre-save function that hashes the password for storage
UserSchema.pre('save', function(next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if(!user.isModified('password')){
        return next();
    }
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if(err){
            return next(err);
        }
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err){
                return next(err);
            }

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
mongoose.model('User', UserSchema);