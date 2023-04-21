const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ],
        
    },
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    {
        toJSON: {
            virtuals: true,
        },
        
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;