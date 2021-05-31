import React from 'react';
import styled from 'styled-components'
 
function Navbar(){
    return(
        <NavContainer>
         <Logo>
        <img src="/images/trans-logo.png" alt="name" />
      </Logo>  

         <NavMenu>
                <button onclick="document.getElementById('side2').scrollIntoView()">
                    <span>ABOUT</span>
                </button>
                <button> 
                    <span>EXPERIENCE</span>
                </button>
                <button> 
                    <span>PROJECTS</span>
                </button>
                <button>  
                    <span>EXTRACURRICULAR</span>
                </button>
            </NavMenu>         
  
</NavContainer>
        
    )
}

export default Navbar;

const NavContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #f9f9f9;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 2.6px;
z-index: 3

` 
const Logo = styled.div`
padding: 0;
width: 80px;
margin-top: -10px;
max-height: 70px;
font-size: 0;
display: inline-block;
img {
  display: block;
  width: 100%;
}
`;
const NavMenu = 
styled.div`
align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  cursor:pointer;
 
  button {
    display: flex;
    background-color: #f9f9f9;
    align-items: center;
    padding: 6px 21px;
    border:0px;
    transition: all 250ms ease-out;
    cursor:pointer;

  }
  button:hover{
    background-color:rgba(0,0,0,0.8);
    color:#f9f9f9;
}
  
`
