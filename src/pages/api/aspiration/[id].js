import dbConnect from '../../../db/mongo/db'
import aspiration from '../../../model/aspiration'
import Aspiration from '../../../model/aspiration'


export default async function handler (req, res){
    
    if ( req.method === 'DELETE' ){
        console.log('oke')

        await dbConnect()

        const deleteAspiration = await aspiration.deleteOne({_id: req.query.id})

        res.status(200).json({ success: true, data:deleteAspiration })
    }
}