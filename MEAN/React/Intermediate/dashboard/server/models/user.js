const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    name: {type: String, 
        required: [true, "A name is required!"],
        trim: true
    },
    password: {type: String, 
        minlength: [1, "The password field cannot be blank!"],
        required: [true, "A password is required!"],
    }
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