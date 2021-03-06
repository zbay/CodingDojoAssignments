const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const moment = require('moment');
const Bike = mongoose.model('Bike');
const UserSchema = new mongoose.Schema({
    firstName: {type: String, 
        required: [true, "A first name is required!"],
        trim: true
    },
    lastName: {type: String, 
        required: [true, "A last name is required!"],
        trim: true
    },
    email: {type: String,
        required: [true, "An email is required!"],
        trim: true,
        unique: true,
        minlength: [5, "An email address must contain at least 5 characters!"],
        validate: [
            {
                validator: function( address ) {
                  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return emailRegex.test(address);
                },
                message: "Please enter a valid email address!"
            },
        ]
    },
    password: {type: String, 
        minlength: [1, "The password field cannot be blank!"],
        required: [true, "A password is required!"],
    },
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}],
    last_login_attempt: {type: Number}, // utc timestamp
    strikes: {type: Number, default: 0}
});

UserSchema.pre('save', function(next) { // password hashing before saving
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