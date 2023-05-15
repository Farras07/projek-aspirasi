import mongoose from "mongoose"

const AspirationSchema  = new mongoose.Schema({
    nama :{
        type: String,
        required: true,
    },
    nim : {
        type: String,
        required:true,
    },
    aspro: {
        type: String,
        required: true,
    },
    asphim: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),

    },
    pinned:{
        type: Boolean,
        default: false,

    }

})

export default mongoose.models.Aspiration || mongoose.model('Aspiration', AspirationSchema)