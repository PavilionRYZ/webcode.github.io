import logo from  "../picture/webcode.png"
import { AppBar , Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
background: black;
`
const Header = ()=>{
    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 150 ,height:60,padding:'15px 0 15px 0'}} /> 
            </Toolbar>
        </Container>
    )
}

export default Header;