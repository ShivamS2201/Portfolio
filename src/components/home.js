import React from 'react';
import styled from 'styled-components';

function Home(){
    return(
        <Conatiner>
        <div class="row">
            <div class="side">
            <h1>SHIVAM SHARMA</h1>
            <p>Hi ! I am a second year computer science undergraduate at <a class="bvcoe" href="https://www.bvcoend.ac.in/">BVCOE</a>, New Delhi, India.<br />
            I like to build Mobile and Web Apps, along with that I have Executive Experience while working at <b>BVPIEEE</b> and <b>TEDxBVCOE</b>
            </p>
                <p>With this know how I want to take plunge into hardcore technical field encompassing Ai based Mobile and Web applications.</p>
                <br/>
                <div class="social-links" width="10px">
		<a href="https://www.linkedin.com/in/shivam-s-183a16120/" target="_blank"><i class="fa fa-linkedin"></i></a>
		<a href="https://github.com/ShivamS2201" target="_blank"><i class="fa fa-github"></i></a>
		<a href="https://twitter.com/xzjdshfuhW" target="_blank"><i class="fa fa-twitter"></i></a>
		
	</div>
            </div>
<div class="main">
             <img src="/images/pp.jpg" alt="Profile-pic"/>
             
         </div>
         </div>
         <hr />
         <SkillMeter>
           Meter OP

         </SkillMeter>
        </Conatiner>
    )
}

const Conatiner = styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
.row {  
    margin-top:55px;
    display: flex;
    max-width:calc(100wv -5px);
    align-items:center;
  }
  .side {
    flex: 50%;
    background-color: #f1f1f1;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 69%) -13px 9px 8px 2px, rgb(0 0 0 / 73%) -7px 9px 9px 0px;
  }
  
  
    .bvcoe{
      text-decoration: none;
      color:black;
     }
    .social-links{
     display:flex;
     justify-content: space-between

    }
    .social-links > a{
        margin: 10px;
  padding: 20px;
  font-size: 30px;
    }
  }
  .side > p{
    font-size:17px;
  }
  .main {
    flex: 50%;
    background-color: white;
    padding: 20px;
    img{
        padding-left:28px;
        height:86%;
        width:86%;
        margin-top:20px;
        object-fit:fit;
        border-radius:50%;
        
    }
  }
  @media screen and (max-width: 700px) {
    .row {  margin-top:90px; 
      flex-direction: column;
      
    }  
    .side {
      box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;
    }  
    .main{
      box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;
         }
    SkillMeter{
      background-color:red;
    }
    }  

`

const SkillMeter = styled.div`
margin-top: 12px; 
background-color:red;
min-height:30vh;
@media screen and (max-width: 700px){
  margin-top:35px;
}
`

export default Home;

