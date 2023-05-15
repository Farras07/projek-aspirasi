
import AspirationBox from "@/components/aspirationBox"

export default function index(props){
    const {aspirationsData : data} = props

    return(
    <>
    
    <AspirationBox data={data}></AspirationBox>
    
 
    </>
    )
}

export async function getServerSideProps() {

  const res = await fetch("http:localhost:3000/api/aspiration")
    const serializeResult=  await res.json()
    return {
      props: {
         aspirationsData : serializeResult
        
      }
    }
  }