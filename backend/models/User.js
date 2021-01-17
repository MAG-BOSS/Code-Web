import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    solved_questions: {
        type: [Number]
    },
    score: {
        type: Number,
        default: 0
    },
    codes_submitted:[{
        q_id: {type: Number},
        code: {type: String}
    }]
});

const User = mongoose.model('users', UserSchema);

export default User;