import React from 'react';
import styled from 'styled-components'
 
function Navbar(){
    return(
        <NavContainer>
         <Logo src="/images/trans-logo.png" />  

         <NavMenu>
                <a>
                    <span>ABOUT</span>
                </a>
                <a> 
                    <span>EXPERIENCE</span>
                </a>
                <a> 
                    <span>PROJECTS</span>
                </a>
                <a>  
                    <span>EXTRACURRICULAR</span>
                </a>
            </NavMenu>         
  
</NavContainer>
        
    )
}

export default Navbar;

const NavContainer = styled.div`
height:70px;
   
    display:flex;
    background:#f9f9f9;
    align-items:center;
    padding:0px 36px;
` 
const Logo = styled.img`
height: 121%;
    width: 9%;
    object-fit: cover;
}
margin-left: -24px;
margin-top: -10px;

`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
    }
    a:hover{
        background-color:rgba(0,0,0,0.8);
        color:#f9f9f9;
    }
` 