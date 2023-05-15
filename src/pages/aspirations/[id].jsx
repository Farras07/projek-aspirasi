import dbConnect  from '../../db/mongo/db'
import aspiration from '@/model/aspiration'
import { useRouter } from 'next/router'

export default function AspirationDetail ( props) {

    const router = useRouter()
    const { id } = router.query

    const {result} = props
    console.log(result)


    async function deleteAspiration(){

      
            const res = await fetch(`/api/aspiration/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
    
             
              console.log('afa iya?')
              console.log(res)
              
      
              router.push('/aspirations');
            
            
        
       
    }

   
    return (
        <>
        <h1>nama : {result.nama}</h1>
        <h1>nim : {result.nim}</h1>
        <h1>aspirasi untuk prodi : {result.aspro}</h1>
        <h1>aspirasi untuk hima : {result.asphim}</h1>
        <button onClick={()=> deleteAspiration()}> hapus</button>
        
        </>
    )
}

export async function getStaticPaths() {

    const res = await fetch("http:localhost:3000/api/aspiration")
    const Result=  await res.json()
    const paths = Result.post.map((res) => {
        return {
            params: {
                id: `${res._id}`,
               }
        }
     
    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    
    await dbConnect()

    const id = context.params.id

  

    const Aspiration =  await aspiration.findById(id)
    const result = JSON.parse(JSON.stringify(Aspiration))

    return {
        props: {
            result
        }
    }
}