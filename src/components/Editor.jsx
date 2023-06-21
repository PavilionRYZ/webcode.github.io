import { useState } from 'react';
import {Box,styled} from'@mui/material';
import  CloseFullscreenIcon  from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import'codemirror/mode/xml/xml' ;
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';

const Container = styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    padding:0 8px 8px;
`

const Heading = styled(Box)`
    background:#1d1e22;
    display:flex;
    padding:9px 12px;
    gap:1rem;
    font-size:1.2rem;
`
const Header = styled(Box)` 
    background:#060606;
    display:flex;
    color:#AAABEC;
    justify-content:space-between;
    font-weidth:900;
`


const Editor =({heading,language,icon,color,value,onChange})=>{

    const [open,setOpen]=useState(true);
   
    const handleChange =(editor,data,value) =>{
           onChange(value)
      }
    return(
        <Container style={open ? null:{flexGrow:0}}>
                <Header>
                    <Heading>
                        <Box component="span" 
                         style={
                            {
                                background:color,
                                width:30,
                                height:25,
                                display:'flex',
                                placeContent:'center',
                                borderRadius:5,
                                marginright:5,
                                paddingBottom:2,
                                color:"#000"
                            }
                         }
                        >
                           {icon}
                        </Box>
                        {heading}
                    </Heading>
                    <CloseFullscreenIcon
                       fontSize="medium"
                       style={{alignSelf:"center"}}
                       onClick={()=>setOpen(prevState => !prevState)}
                    />
                </Header>
                <ControlledEditor
                 className="controlled-editor"
                 value={value}
                onBeforeChange={handleChange}
                 options={{
                    theme:'material',
                    lineNumbers: true
                 }}
                />

        </Container>
    )
}
export default Editor;