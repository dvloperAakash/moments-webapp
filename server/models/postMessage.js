import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ 
    title:String,
    message:String,
    name:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likes:{
        type:[String],
        default:[],
    },
    comments: {type:[String],default:[]},
    createdAt:{
        type:Date,
        default:new Date()
    },
});
// Now we have schema,we are going to turn it into model.

const PostMessage = mongoose.model('PostMessage',postSchema);  // <name,schema>

export default PostMessage;