import {Box,styled} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import {DataContext} from "../context/DataProvider"

const Container =styled(Box)`
 height:100vh
`
 
const Result = ()=>{

    const [src,setSrc]= useState('');

    useEffect(()=>{
       const timeout = setTimeout(()=>{
           setSrc(srcCode)
        },1000)
        return ()=> clearTimeout(timeout)
    },)

    const {html,css,js}=useContext(DataContext);
    const srcCode=`
    <html>
            <body>${html}
            </body>
            <style>${css}
            </style>
            <script>${js}
            </script>
    </html>
    
    `
    return(
        <Container>
            <iframe title="Output"
            srcDoc={src}
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
            />
        </Container>
    )
}

export default Result;