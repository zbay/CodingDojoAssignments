const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BikeSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, 
        required: [true, "A title is required!"],
        trim: true,
        minlength: [1, "A title must be at least 1 character long!"]
    },
    description: {type: String, 
        required: [true, "A description is required!"],
        trim: true,
        minlength: [1, "A description must be at least 1 character long!"],
        maxlength: [200, "The description cannot be longer than 200 characters!"]
    },
    price: {type: Number,
        required: [true, "A dollar price is required!"],
        validate: [
            {
                validator: function( num ) {
                    return num >= 1;
                },
                message: "The price must be at least $1!"
            }
        ]
    },
    location: {type: String,
        required: [true, "A location is required!"],
        trim: true,
        minlength: [1, "A location must be at least 1 character long!"]
    },
    imgURL: {type: String,
        required: [true, "An image URL is required!"],
        trim: true,
        minlength: [1, "An image URL must be at least 1 character in length!"]}
});

mongoose.model('Bike', BikeSchema);