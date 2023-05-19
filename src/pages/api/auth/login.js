import user from '@/model/user';
import dbconnect from '../../../db/mongo/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req, res){
    
    if(req.method !== 'POST') return res.status(405).end();

    const  {username, password} = req.body;

    console.log(req.body.username)

    dbconnect()

    const checkUser = await user.findOne({username:username})


    console.log(checkUser)

    if(!checkUser) return status(401).end();

    const checkPassword = await bcrypt.compare(password, checkUser.password)
 
    if(!checkPassword) return res.status(401).end()

    const token = jwt.sign({
        id:checkUser.id,
        username:checkUser.user,

    },'afaiyah?',{
        expiresIn: '7d'
    })

    res.status(200)
    res.json({
        message: 'login successfully',
        token
    })
}