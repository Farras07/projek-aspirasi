import mongoose from "mongoose";

const connection = {}

async function dbConnect() {

    if (connection.isConnected){
        return
    }

   const db = await mongoose.connect('mongodb://localhost:27017/aspirations',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


connection.isConnected = db.connections[0].readyState


}

module.exports = dbConnect


