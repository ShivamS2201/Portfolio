import React from 'react';
import styled from 'styled-components';

function Home(){
    return(
        <Conatiner>
        <div class="row">
            <div class="side">
            <h2>About Me</h2>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h2>TITLE HEADING</h2>
             <h5>Title description, Dec 7, 2017</h5>

                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <br/>
                <div class="social-links" width="10px">
		<a href="https://www.linkedin.com/in/himaninegi/"><i class="fa fa-linkedin"></i></a>
		<a href="https://github.com/Himani2000"><i class="fa fa-github"></i></a>
		<a href="https://twitter.com/himani__negi"><i class="fa fa-twitter"></i></a>
		<a href="mailto:negi.himani11@gmail.com"><i class="fa fa-envelope-o"></i></a>
	</div>
            </div>

        
        <div class="main">
             <img src="/images/pp.jpg" alt="Profile-pic"/>
             
         </div>
         </div>
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

`

export default Home;

