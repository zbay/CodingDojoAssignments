// TODO: user.js validations

/*
Assignment: Login and Registration
Create a login and registration that uses back-end validation, catches errors, and displays them to the client.
Required Registration Fields:
•	email
•	first_name
•	last_name
•	password
•	password_confirm
•	birthday
Each registration field should have at least one back-end validation on it! Besides password_confirmation.
email should use a unique:true as one of key:value pairs in the objects schema. How are we going to deal with uniqueness errors (note the error object from unique:true is different!)?
The login form should just have password and email
*/

//bcrypt: 
bcrypt.hash('password_from_form', 10)
.then(function(hashed_password){
})
.catch(function(error){
});

bcrypt.compare('password_from_form', 'stored_password')
.then(callback)
.catch(callback)

var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    customerSchema = new Schema({
      name: {
        first: {
          type: String,
          required: [true, "this is for something else"],
          trim: true,
        },
        last: {
          type: String,
          required: true,
          trim: true
        },
      },
      phone: {
        type: String,
        validate: [{
          validator: function( number ) {
            return /\d{3}-\d{3}-\d{4}/.test( number );
          },
          message: "{ VALUE } is not a valid phone number"
        },
        {
          validator: function( number ) {
            return false;
          },
          message: "{ VALUE } failed this validator"
        }
      ],
        required: [true, "Customer phone number required"]
      },
      gender: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        uppercase: true,
        trim: true,
        default: "MALE"
      },
      age: {
        type: Number,
        min: [18, "Maybe you need to be a little older"],
        max: [85, "You might want to be enjoying your retirement rather than using this site"],
        required: true
      },
      password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      },
      pets: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: "Pet"
        }],
        default: []
      }
      }, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
customerSchema.virtual( 'name.full' ).get( function () {
  return this.name.first + " " + this.name.last;
  // return `${ this.name.first } ${ this.name.last}`;
});