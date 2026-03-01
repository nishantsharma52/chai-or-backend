import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const viedoSchema = new Schema(
    {
        viedoFile: {
            type: String,    //cloudinary url
            required: true,

        },

        thumbnail: {
            type: String,  //cloudinary url
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        duration: {
            type: Number,
            required: true,
        },

        views: {
            type: Number,
            default: 0
        },

        isPublised: {
            type: Boolean,
            default: true
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },


    },
    {
        timestamps: true
    }
)

viedoSchema.plugin(mongooseAggregatePaginate)

export const Viedo = mongoose.model("Viedo", viedoSchema)