import Head from "next/head";

import Login from "./login";

import {unauthPage} from '../../middlewares/pageAuth'
export default function login () {


return(<>

    <Head>
        <title>Form Aspirasi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Login></Login>

    </>
)
}

export async function getServerSideProps(ctx){
    
await unauthPage(ctx)
   
    return {props : {}}
   
   }