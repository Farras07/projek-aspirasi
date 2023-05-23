

export default async function  handler (req, res){ 


  if(req.method !== 'POST') return res.status(405).end();
   


    const response = await fetch("https://api-frontend.kemdikbud.go.id/search_mhs/",{
        method:"POST",
        body:JSON.stringify(req.body),
        headers:{
          "Content-Type" : "application/json"
        }
      })
    
    
    const data = await response.json();

    console.log(data.mahasiswa)

    if(data.mahasiswa.length=== 0) return res.status(404).end();

    res.status(200)
    res.json({
        message:'mahasiswa valid',
    })

}