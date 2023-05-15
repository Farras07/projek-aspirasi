import dbConnect from '../../../db/mongo/db'
import Aspiration from '../../../model/aspiration'


export default async function  handler (req, res){


    
 if (req.method === 'POST') {

    const { nama, nim, aspro, asphim } = req.body
    
 
    if( !nama || !nim || !aspro || !asphim ) return;


    await dbConnect()
      
    
    

    const result = await Aspiration.create({nama, nim, aspro, asphim})
   

    
    res.status(201).json({
        post: result,
        message: 'Your Aspiration Has Send Successfully!'
    })


}else if (req.method === 'GET'){

    await dbConnect()
      
    const result = await Aspiration.find({})
   

    
    res.status(201).json({
        post: result,
        message: 'All aspiration'
    })



}else {
    res.status(404).json({
        message: 'Not Found'
    })
}

    


}