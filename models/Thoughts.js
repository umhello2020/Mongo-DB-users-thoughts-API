const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            String,
        },
        createdAt: {

        },
        username: {

        },
        reactions: {
            
        }
    }
)