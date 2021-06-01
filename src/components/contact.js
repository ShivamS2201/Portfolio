import React from "react";
import styled from 'styled-components';

function Contact(){
    return(
        <Connect> 
            <h1>Contact Me</h1>
<form class="cf" action="mailto:shivamsharmau60@gmail.com" method="get" enctype="text/plain">
  <div class="half left cf">
    <input type="text" id="input-name" placeholder="Name" />
    <input type="email" id="input-email" placeholder="Email address" />
    <input type="text" id="input-subject" placeholder="Subject" />
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <center>
  <input href="mailto:shivamsharmau60@gmail.com"type="submit" value="Submit" id="input-submit" />
        <input type="reset" name="reset" value="Clear Form" id="input-clear"  />
    </center>
</form> 
        </Connect>
    )
}
const Connect = styled.div`

background-color:#f1f1f1;
h1 {
    text-align: center;
    color: #f010101;}
    
    form {
        width:620px;
        max-width: 620px;
        text-align: center;
        margin: 20px auto;
       textarea{margin-left:30px;}
       input, textarea {
          border:0;
          margin-bottom:12px;
          outline:0;
          padding: 1em;
          border-radius:30px;
          display: block;
          width: 100%;
          margin-top: 1em;
          font-family: 'Merriweather', sans-serif;
          @include box-shadow(0 1px 1px rgba(black, 0.1));
          resize: none;
         
         &:focus {
        box-shadow: 0 0px 2px   ;
         }
       }
       
       #input-submit {
          color: white; 
          background: red;
          cursor: pointer;
          transform:translateX(24px);

         
         &:hover {
        box-shadow:0 1px 1px 1px ; 
         }
       }
       #input-clear {
        transform:translateX(24px);


        color: white; 
        background: blue;
        cursor: pointer;
       
       &:hover {
      box-shadow:0 1px 1px 1px ; 
       }
     }
       
       textarea {
           height: 126px;
           
       }
     }
     
     
     .half {
       float: left;
       width: 48%;
       margin-bottom: 1em;
     }
     
     .right { width: 50%; }
     
     .left {
          margin-right: 2%; 
     }
     
     
     @media screen and (max-width: 700px) {
        
         width:100%;
         textarea{
            transform: translateX(-30px);

         }
         form{width:310px;
            
            #input-submit {
                transform:translateX(12px);
             }
             #input-clear {
                transform:translateX(12px);
             }
        }
        
       .half {
          width: 100%; 
          float: none;
          margin-bottom: 0; 
       }
     }
     
     
     .cf:before,
     .cf:after {
         content: " "; /* 1 */
         display: table; /* 2 */
     }
     
     .cf:after {
         clear: both;
     }        
    `

export default Contact; 
