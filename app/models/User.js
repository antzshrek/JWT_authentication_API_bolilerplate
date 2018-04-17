var mongoose = require("mongoose");

// MONGOOSE MODEL CONFIGURATION
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your firstname']
    },
    lastName: {
        type: String,
        required: [true, 'Please add your last name']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    companyName: {
        type: String        
    },
    profileimage:{
        type: String
    },
    email: {type: String, unique: true, required: true},
    meta: {
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now},
    }     
});

userSchema.statics.isEmailUnique = function (email) {
    return new Promise((resolve, reject) => {
        this.findOne({email})
            .exec((err, user) => {
                if (user) reject();
                else resolve();
            });
    });

};

module.exports = mongoose.model('User', userSchema);