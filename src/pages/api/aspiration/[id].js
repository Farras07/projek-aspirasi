import dbConnect from '../../../db/mongo/db'
import aspiration from '../../../model/aspiration'
import Aspiration from '../../../model/aspiration'


export default async function handler (req, res){
    
    if ( req.method === 'DELETE' ){
        console.log('oke')

        await dbConnect()

        const deleteAspiration = await aspiration.deleteOne({_id: req.query.id})

        res.status(200).json({ success: true, data:deleteAspiration })
    } else if ( req.method === 'PUT'){

        await dbConnect()

        const isPinned = await Aspiration.findOne({_id: req.query.id})

        const pinned = await Aspiration.findOneAndUpdate(
            { _id: req.query.id }, // Filter by ID
            { $set: {pinned: !isPinned.pinned } }, // Update the ispinned field to false
            { new: true } // Return the updated document
          );
        res.status(200).json({ success: true, data:pinned })


    }
}