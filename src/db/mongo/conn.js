
const {MongoClient, ServerApiVersion, Collection, ObjectId} = require('mongodb')
class MongoConnect {

    constructor(){
   
    }

     async addAspiration({name, nim, aspro, asphim, slug}){
        try {
            const date = new Date().toISOString()
            const client  = await MongoClient.connect('mongodb+srv://rootadmin:adminix123@cluster0.6vs28ld.mongodb.net/?retryWrites=true&w=majority');
    
            const db = client.db('coba')
        
            const  mhsCollection = db.collection('mahasiswa')

            const result = await mhsCollection.insertOne({name, nim, aspro, asphim, date, slug})

            client.close()

            return result;
          
        } catch (error) {

            console.log(error.message)
            
        }
    }


    async showAspirations (){
        
        const client  = await MongoClient.connect('mongodb+srv://rootadmin:adminix123@cluster0.6vs28ld.mongodb.net/?retryWrites=true&w=majority');
        
         const mhsCollection = client.db('coba').collection('mahasiswa')

         const aspirations = await mhsCollection.find().toArray()

      
         return aspirations
        



    }

    async showAspirationByid(){

        const client  = await MongoClient.connect('mongodb+srv://rootadmin:adminix123@cluster0.6vs28ld.mongodb.net/?retryWrites=true&w=majority');
        
         const mhsCollection = client.db('coba').collection('mahasiswa')


         const aspirations = await mhsCollection.find({}, {_id:1}).toArray()

      
         return aspirations
        



    }

    async findAspirationById(id){

        console.log(id)
        const client  = await MongoClient.connect('mongodb+srv://rootadmin:adminix123@cluster0.6vs28ld.mongodb.net/?retryWrites=true&w=majority');
        
         const mhsCollection = client.db('coba').collection('mahasiswa')


         const aspirations = await mhsCollection.find({_id:new ObjectId(id)}).toArray()

      
         return aspirations

    }
    
}



module.exports = MongoConnect


