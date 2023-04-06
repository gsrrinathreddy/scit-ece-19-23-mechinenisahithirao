import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function ContactMe(){
const [loader,setLoader] = useState(true);
    const [contactMe,setContactMe] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/ContactMe')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setContactMe(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name:M.Sahithi</Typography>
<Typography>Adderss: Sapthagiri colony</Typography>
<Typography>House NO : 9-4-361</Typography>
<Typography>City: Karimnagar</Typography>
<Typography>State: Telangana</Typography>
<Typography>Country: India</Typography>
<Typography>Email: mechinenisahithirao2001@gmail.com</Typography>
<Typography>Phone No.: 7793997033</Typography>
        </>
        
    )
}