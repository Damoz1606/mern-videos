import { Schema, model } from 'mongoose';

const video_schema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    url: {
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model("Video", video_schema);