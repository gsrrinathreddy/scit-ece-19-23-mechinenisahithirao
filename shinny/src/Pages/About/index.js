
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function About(){
const [loader,setLoader] = useState(true);
    const [about,setAbout] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/About')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAbout(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: Your Sahithi</Typography>
<Typography>Father Name: Kondal Rao</Typography>
<Typography>Mother Name: Nagarani</Typography>
<Typography>Email: mechinenisahithirao2001@gmail.com</Typography>
<Typography>Phone No.: 7793997033</Typography>
        </>
        
    )
}