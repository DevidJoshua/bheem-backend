const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 25
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 15
    }     
});

userSchema.pre('save', function(next){
    const user = this;
    
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return next(err);
        }
    
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
});

userSchema.methods.comparedPassword = function(candidatePassword) {
    const user = this;
    // console.log(user);

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
          if (err) {
            return reject(err);
          }
    
          if (!isMatch) {
            return reject(false);
          }
    
          resolve(true);
        });
      });
}

module.exports = mongoose.model('User', userSchema);