import mongoose ,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema({
    videoFile:{
        type:String,
        unique: true,
        require:true,
    },
    thumbnail:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true,
        trim:true
    },
    views:{
        type:Number,
        required:true,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
}, {
    timestamps:true
});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema);