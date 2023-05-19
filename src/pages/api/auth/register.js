import dbConnect from '../../../db/mongo/db'
import user from '@/model/user';
import bcrypt from 'bcryptjs'

export default async function handler(req, res){
    
    if(req.method !== 'POST') return res.status(405).end();
    console.log(req.body)

    const { username,fullname , password} =req.body;

    console.log(password)
    const salt = bcrypt.genSaltSync(10)
   
    const passwordHash = bcrypt.hashSync(password, salt)
    

    console.log(passwordHash)

    dbConnect()
    console.log('oke')
    const register = await user.create({
        username,
        fullname,
        password:passwordHash,
    })

    const registeredUser = await user.findById({_id:register._id}).select('_id')
    

    res.status(200)
    res.json({
        message:'user registered successfully',
        user:registeredUser
    })
}