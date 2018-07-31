// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {}
 
var UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        index: true,
    },
    fistname: {
        type: String,
        index: true
    },
    lastname: {
        type: String,
        index: true
    },
    password: {
        type: String,
        index: true
    },
    phone: {
        type: String,
        index: true
    },
    role: {
        type: String,
        enum: ['visitor', 'author'],
        default: 'author',
        index: true,
    }
 
}, {
    timestamps: true
});
 
// UserSchema.pre('save', function(next){
 
//     var user = this;
//     var SALT_FACTOR = 5;
 
//     if(!user.isModified('password')){
//         return next();
//     }
 
//     bcrypt.genSalt(SALT_FACTOR, function(err, salt){
 
//         if(err){
//             return next(err);
//         }
 
//         bcrypt.hash(user.password, salt, null, function(err, hash){
 
//             if(err){
//                 return next(err);
//             }
 
//             user.password = hash;
//             next();
 
//         });
 
//     });
 
// });
 
// UserSchema.methods.comparePassword = function(passwordAttempt, cb){
 
//     bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
 
//         if(err){
//             return cb(err);
//         } else {
//             cb(null, isMatch);
//         }
//     });
 
// }
 
module.exports = mongoose.model('User', UserSchema, 'users');