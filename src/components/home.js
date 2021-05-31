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
        <center> <h1>My Skills</h1></center>

         <SkillMeter id="#skill" key="skill">
         <div class="side2"  >    
         <h3>LANGUAGES</h3>
         <div class="skills lang">Python</div>     
         <div class="skills lang">JavaScript</div>     
         <div class="skills lang">C++</div>     
         <div class="skills lang">Lua</div>
         <div class="skills lang">HTML</div>     
         <h3>FrameWorks</h3>
        <div class="skills frameworks">Django</div>
        <div class="skills frameworks">React</div>
        <div class="skills frameworks">Flask</div>        
        <div class="skills frameworks">Flutter</div>
        <h3>Technologies</h3>
            <div class="skills Tech">Machine Learning</div>
            <div class="skills Tech">Computer Vision</div>
            <div class="skills Tech" id="1css">Deep Learning</div>
          <h3>Libraries</h3>   
           <div class="skills libs">Pandas</div>
           <div class="skills libs">Numpy</div>
           <div class="skills libs">Matplotlib</div>
           <div class="skills libs">Tensorflow</div>
           <div class="skills libs">Keras</div>
           <div class="skills libs CV">OpenCv</div>
           </div>
           
        <div class="main2">
            <h2 class="item1"><center>TOOLS</center></h2>
            <div class="item2"><i class='fab fa-github-square'></i></div>
            <div class="item3"> <i class="fab fa-git-alt"></i></div>
            <div class="item4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/883px-Jupyter_logo.svg.png" alt="vscode-icon"/></div>
            <div class="item5"> <img src="https://pbs.twimg.com/profile_images/1201816065266929664/evgRr8NV_400x400.jpg" alt="vscode-icon"/></div>
            <div class="item6"><img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/c7a9e3c69a2af799d9ba8693819794718e194956/icons/file_type_vscode.svg" alt="vscode-icon"/></div>


         </div>


          
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
    
    }  

`

const SkillMeter = styled.div`
display:flex;

margin-bottom:30px;
margin-top: 12px; 
min-height:30vh;
.side2 {
  flex: 50%;
  background-color: #f1f1f1;
  padding: 20px;
}
.main2 {
  display:grid;
  justify-items:center;
  flex: 50%;
  background-color: white;
  padding: 20px;

  .item1{
    color: midnightblue;
    grid-column: 1 / span 3;
    grid-row: 1;
  }
  .item2{
    grid-column: 3;
  grid-row: 2 / span 1;
  font-size: 64px;

  }
  .item4{
    grid-column: 2;
  grid-row: 3 / span 1;
  img{
    height:100px;
    width:auto;
  }


  }
  .item3{
    grid-column: 1 / span 1;
  grid-row: 4;
  font-size: 64px;


  }
  .item5{
    grid-column: 3/ span 1;
  grid-row: 4;
  font-size:14px;
  img{
    height:69px;
    width:auto;
  }
}
.item6{
  font-size:14px;
  height:40px;
  width: 59px;
}


}
.skills {
  padding-top: 6px;
  padding-bottom: 5px;
  color: white;
  text-align:center;
  margin:1px 2px 7px 3px;
  display:inline;
}

.frameworks { padding:1px 5px 3px 5px;background-color: #04AA6D;
 border-radius:20px ;
   box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;}
.Tech {padding:1px 5px 3px 5px; background-color: #2196F3; border-radius:20px ;
   box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;
  margin-top:2px}
#1css{
    display: block;max-width: 112px;margin-top: 12px;
  }
.lang {margin-left:2px;padding:1px 5px 3px 5px; background-color: #f44336; border-radius:20px ;
   box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;}
.libs { padding:1px 5px 3px 5px;background-color: #dc7a47; border-radius:20px ;
   box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;}



    @media screen and (max-width: 700px){
      margin-top:35px;
      flex-direction:column;
      .Tech {
        display: inline-grid;
    margin-top: 7px;
      }
      .libs {
        
          display: inline-grid;
    margin-top: 13px;
        
      }

      .main2{
        .item3{
          font-size:50px;
        }
        .item2{
          font-size:50px;
        }
        .item4{background:inherit;
          img{
            height:90px;
        width:auto;
          }
      }
      .item5{
        img{
          height:60px;
           width:auto;
        }
    }

    }
}
`

export default Home;

