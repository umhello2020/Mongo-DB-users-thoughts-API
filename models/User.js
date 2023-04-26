const { Schema, model } = require('mongoose');
// const Thought = require('./Thought');

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
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
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

// funnction to remove thoughts when associated user is deleted
// userSchema.pre('remove', async function(next) {
//     try {
//         // find all thoughts referencing this user and delete them 
//         await Thought.deleteMany({ user: this._id });
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// virtual to retrieve length of the user's friend array when queried
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;