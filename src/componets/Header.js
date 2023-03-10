import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

    const [burgerStatus, setBurgerStatus] = React.useState(false)

    // const closeNavHandler = () => {
    //     setCloseNav()
    // }
    const openNavHandler = () =>{
        setBurgerStatus(!burgerStatus)
    }
        
    
  return (
    <Container>
        <a>
            <img src={logo} />
        </a>
        <Menu>
            <a href=''> Modal S</a>
            <a href=''> Modal 3</a>
            <a href=''> Modal x</a>
            <a href=''> Modal Y</a>
        </Menu>

        <RightMenu>
            <a href=''>Shop</a>
            <a href=''>tesla account </a>
            <CustomMenu onClick={openNavHandler} />
        </RightMenu>

        <BurgerNav
        
        show={burgerStatus}>
            <CloseWraper>
                <CustomClose onClick={() => setBurgerStatus(!burgerStatus)}  />
            </CloseWraper>
            
            <li><a href='#'>Existing Ibentory</a></li>
            <li><a href='#'>Used Inventory </a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Existing Ibentory</a></li>
            <li><a href='#'>Existing Ibentory</a></li>
            <li><a href='#'>Existing Ibentory</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px ;
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
 

    display: flex;
    align-items: center;
    justify-content: center ;
    flex: 1;
    
    a{
        text-transform:uppercase;
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 750px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;


a{
        text-transform:uppercase;
        font-weight: 600;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    background-color: white;
    width: 300px;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform .2s ;
    
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

    }
    a{
        font-weight: 600;
    }
    

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`

const CloseWraper = styled.div`
    display: flex;
    justify-content: flex-end;


`