import React from "react";
import styled from 'styled-components';


function Project(){
    return(
    <Contain>
        <Container>
          
                  <div class="card one" id="#projs">
                    <img src="https://github.com/ShivamS2201/WEB-DEV/raw/main/DRUM-KIT/drum-SS.JPG"  />
                    <h1 class="hone">Novation Launcpad</h1>
                    <p class="price">HTML, CSS, Javascript</p>
                    <p>A Coded implementation of a Novation's Launchpad with Vanilla JS.</p>
                    <p><a href="https://youtu.be/UsNCpCf6CAc" target="_blank"><button>VIEW</button></a></p>
                  </div>	
          <div class="card two">
              <img src="https://github.com/ShivamS2201/Disney-Clone-_With-Firebase/raw/main/public/images/disney+.JPG?raw=true"  />
              <h1>Disney+ Clone </h1>
              <p class="price">ReactJS, HTML, CSS</p>
              <p>A Disney+ Clone made using React JS and styled components .</p>
              <p><a href="https://dinsey-clone-app.herokuapp.com/" target="_blank"><button>VIEW</button></a></p>
        </div>


        <div class="card three">
          <img src="data:image/png;base64,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"  />
          
          <h1 class="mlproj">Machine Learning Models</h1>
          <p class="price">Python 3, Jupyter</p>
          <p>Machine Learning Models.</p>
          <p><a href="https://github.com/ShivamS2201/Classification" target="_blank"><button>VIEW</button></a></p>
        </div>  
                </Container>
            <Extra id="#extra">
            <h3 class="videos"> BLOGS</h3>
              <div class="blogs">
                
                <a class="card" href="https://medium.com/caffeine2code/getting-started-with-computation-784a723914d3" target="_blank" >
              <div>
        <h1>Getting Started with Computation</h1>
        <p>I see you are curious to learn a thing about computation.... </p>
        <div class="date">Jun 5, 2020 · 2 min read</div>
        <div class="tags">
          <div class="tag">Python</div>
           <div class="tag">Computation</div>
           <div class="tag">Mathematics</div>
        </div>
      </div>
    </a>
                </div>

                <h3 class="videos">VIDEOS</h3>
                <div class="blogs">
                
                                <a class="card2" href="https://medium.com/caffeine2code/getting-started-with-computation-784a723914d3" target="_blank" >
              <div>
        <h1>Intro to Public Speaking</h1>
        <p>The interactive session includes -
• Discussion on Introvert Nature
• Importance of Being Confident </p>
        <div class="tags">
          <div class="tag">Motivation</div>
           <div class="tag">Orator</div>
           <div class="tag">Public Speaking</div>
        </div>
      </div>
    </a>
    <a class="card3" href="https://www.youtube.com/watch?v=5fjSBJOH3jE&list=PLXeiBgja1M0wnMwwBaDu2iglMt9Gk3v2i&index=9" target="_blank" >
              <div>
        <h1>Open Mic</h1>
        <p>An Open mic session on varoius National and International Topics. </p>
        <div class="tags">
          <div class="tag">Open Mic</div>
           <div class="tag">Fun</div>
           <div class="tag">Public Speaking</div>
        </div>
      </div>
    </a></div>              
            </Extra>
            </Contain>
    )
}

const Container = styled.div`
transition: all 250ms;
transition-timing-function: ease-in-out;
margin-top:80px;
margin-bottom:30px;
min-height:50vh;

display: flex;
&:div{
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
.card {
  border-radius:30px;
  text-decoration:none;
  img{border-radius:23px;
    height:200px;
    width:100%;
  }
  box-shadow: -13px 20px 12px 12px rgb(0 0 0 / 20%);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  .one .two{height: 410px;
    font-size:30px;
  }

  .mlproj{
    font-size:25px;
  }
  .three{
    
  }
}
.one{
  img{
    height: 200px;
    width:96%;
  }
  
  .hone{
    font-size:26px;
  }
}
.price {
  color: grey;
  font-size: 22px;
}
.card:hover{
  transform:scale(1.1);
}
.card button {
  text-decoration:none;
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 50%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
@media screen and (max-width: 700px){
  flex-direction: column;
  margin-bottom:10px;
  .card{
    margin-top:32px;
  }
  .card button {
    border: none;
    outline: 0;
    padding: 9px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 41%;
    font-size: 15px;
  }
  
  


}
`
const Extra = styled.div`
margin-top:60px;
.videos{
  margin-left:30px;
}
.blogs{
  padding:0 calc(3.5vw + 5px);
display:flex;
  margin-left:12px;
  margin-top:30px;
}
.card {
  font-family: 'Heebo';
  --bg-filter-opacity: 0.6;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
  height:200px;
  width: 15em;
  font-size: 20px;
  color: white;
  border-radius: 1em;
  padding: 1em;
   display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  position: relative;
  border: 10px solid #fff;
  text-decoration: none;
  --bg-img: url(https://miro.medium.com/max/669/1*OM4AIDMDcOYjXajYBzn2Cw.png);
  margin-left: 18px;

}
.card:hover {
  transform: scale(1.06);
  --bg-filter-opacity: 0.58;

}

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card .tags {
  display: flex;
}

.card .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}

.card2 {
  margin-left:19px;
  font-family: 'Helvetica';
  --bg-filter-opacity: 0.6;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-imgs);
  height:200px;
  width: 15em;
  font-size: 20px;
  color: white;
  border-radius: 1em;
  padding: 1em;
   display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  position: relative;
  border: 10px solid #fff;
  text-decoration: none;
  --bg-imgs: url(http://i3.ytimg.com/vi/yxlxyOJEak4/maxresdefault.jpg);

}
.card2:hover {
  transform: scale(1.06);
  --bg-filter-opacity: 0.58;

}

.card2 h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card2 p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card2 .tags {
  display: flex;
}

.card2 .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card2:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card2 .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}
.card3 {
  margin-left:19px;
  font-family: 'Helvetica';
  --bg-filter-opacity: 0.6;
  background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-imgss);
  height:200px;
  width: 15em;
  font-size: 20px;
  color: white;
  border-radius: 1em;
  padding: 1em;
   display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  position: relative;
  border: 10px solid #fff;
  text-decoration: none;
  --bg-imgss: url(http://i3.ytimg.com/vi/5fjSBJOH3jE/maxresdefault.jpg);

}
.card3:hover {
  transform: scale(1.06);
  --bg-filter-opacity: 0.58;

}

.card3 h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card3 p {
  font-size: 0.75em;
  font-family: 'Open Sans';
  margin-top: 0.5em;
  line-height: 2em;
}

.card3 .tags {
  display: flex;
}

.card3 .tags .tag {
  font-size: 0.75em;
  background: rgba(255,255,255,0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card3:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card3 .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: .8;
}
@media screen and (max-width: 700px){
  .blogs{
    flex-direction:column;
    margin-left:2px;

  }
  .card{
    margin-left:12px;
  }
  .card2{
    margin-left:12px;

  }
  .card3{
    margin-top:20px;
    margin-left:12px;
  }
}
`;
const Contain = styled.div`
margin-bottom:30px`;


//http://i3.ytimg.com/vi/5fjSBJOH3jE/maxresdefault.jpg
export default Project
//<!--<img src="https://github.com/ShivamS2201/Disney-Clone-_With-Firebase/raw/main/public/images/disney+3.JPG?raw=true" alt="Denim Jeans"  />               <img src="https://github.com/ShivamS2201/Disney-Clone-_With-Firebase/raw/main/public/images/disney+3.JPG?raw=true" alt="Denim Jeans"  />
