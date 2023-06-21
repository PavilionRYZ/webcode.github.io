import { useContext } from "react";
import { Box,styled } from '@mui/material';
import Editor from './Editor'
import { DataContext } from "../context/DataProvider";
const Container = styled(Box)`
 display:flex;
 background: black;
// background: linear-gradient(90deg, rgba(109,146,245,1) 0%, rgba(199,76,223,1) 49%, rgba(109,146,245,1) 100%);
// height:50vh;
`
const Code = ()=>{
      const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return(
       <Container>
        <Editor
              language="xml"
              heading="HTML"
              icon="</>"
              color="#FF1341"
              value={html}
              onChange={setHtml}
        />

        <Editor
              heading="CSS"
              language="css"
              icon="#"
              color="#0EBEFF"
              value={css}
              onChange={setCss}
        
        />

        <Editor
              heading="JavaScript"
              language="javascript"
              icon="( )"
              color="#FCD000"
              value={js}
              onChange={setJs}
        />

       </Container>
    )
}

export default Code;