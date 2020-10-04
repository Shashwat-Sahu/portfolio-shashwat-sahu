import React from 'react'
import M from 'materialize-css'
import { Carousel } from 'react-materialize'
import Chart from 'chart.js';
setInterval(() => {
  var elem = document.getElementById('Carousel2')
  var instance = M.Carousel.getInstance(elem)
  instance.next()
  
  var elem2 = document.getElementById('Carousel-2')
  var instances = M.Carousel.getInstance(elem2)
  instances.next()

  var elem3 = document.getElementById('Carousel3')
  var instance3 = M.Carousel.getInstance(elem3)
  instance3.next()
  var elem4 = document.getElementById('Carousel4')
  var instance4 = M.Carousel.getInstance(elem4)
  instance4.next()

  var elem5 = document.getElementById('Carousel5')
  var instance5 = M.Carousel.getInstance(elem5)
  instance5.next()
}, 5000);


window.onscroll = function(){

  var canva1 = document.getElementById('myChart1');
  var canva2 = document.getElementById('myChart2');
 

  var top1 = canva1.getBoundingClientRect();
  var top2 = canva2.getBoundingClientRect();
  
  console.log(Math.floor(top1.top-window.scrollY))
  if(Math.floor(top1.top-window.scrollY)<=-50&&Math.floor(top1.top-window.scrollY)>=-300)
  {
    var ctx =canva1.getContext('2d')
    var chart = new Chart(ctx, {
        type: 'doughnut',
    
        data: {
            labels: ['React.js', 'Node.js', 'MongoDB', 'MySql','Android', 'HTML5', 'CSS','C++','JAVA','Python', 'Adobe Photoshop'],
            datasets: [{
                label: 'Skill %',
                data: [9, 10, 8, 9, 4, 10, 10,11,10,9,11],
                backgroundColor: [
                  'rgb(236, 239, 241,0.8)',
                  'rgb(158, 158, 158,0.8)',
                  'rgba(200, 200, 200, 0.8)',
                  'rgba(175, 175, 175, 0.8)',
                  'rgba(125, 125, 125, 0.8)',
                  'rgba(100, 100, 100, 0.8)',
                  'rgba(75, 75, 75, 0.8)',
                  'rgba(65, 65, 65, 0.8)',
                  'rgba(45, 45, 45, 0.8)',
                  'rgba(25, 25, 25, 0.8)'
              ],
              // borderColor: [
              //     'rgba(255, 99, 132, 1)',
              //     'rgba(54, 162, 235, 1)',
              //     'rgba(255, 206, 86, 1)',
              //     'rgba(75, 192, 192, 1)',
              //     'rgba(153, 102, 255, 1)',
              //     'rgba(255, 159, 64, 1)'
              // ],
              // borderWidth: 1
            }]
        },
    
        // Configuration options go here
        options: {}
    });
  }

  if(Math.floor(top2.top-window.scrollY)<=-50&&Math.floor(top2.top-window.scrollY)>=-300)
  {
    var ctx =canva2.getContext('2d')
    var chart = new Chart(ctx, {
        type: 'bar',
    
        data: {
            labels: ['React.js', 'Node.js', 'MongoDB', 'MySql','Android', 'HTML5', 'CSS','C++','JAVA','Python', 'Adobe Photoshop'],
            datasets: [{
                label: 'Projects:',
                minBarLength: 2,
                data: [9, 10, 8, 9, 4, 10, 10,11,10,9,11],
                backgroundColor: [
                  'rgb(236, 239, 241,0.8)',
                  'rgb(158, 158, 158,0.8)',
                  'rgba(200, 200, 200, 0.8)',
                  'rgba(175, 175, 175, 0.8)',
                  'rgba(125, 125, 125, 0.8)',
                  'rgba(100, 100, 100, 0.8)',
                  'rgba(75, 75, 75, 0.8)',
                  'rgba(65, 65, 65, 0.8)',
                  'rgba(45, 45, 45, 0.8)',
                  'rgba(25, 25, 25, 0.8)',
                  'rgba(20,20,20,0.8)'
              ],
            }]
        },
    
        // Configuration options go here
        options: {
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        }
    });
  }
}



const Home = () => {
  return (<><div id="header" ><Carousel
    carouselId="Carousel2"
    className="white-text"
    options={{
      fullWidth: true,
      indicators: true
    }}
  >
    <div className="title_box ">
      <div className="container">
      <div className="row">
        <div className="col s8">
        <h1>
        Web Developer
          </h1>
      <p>
        Started with an amazing path
       
      </p>
        </div>
        <div className="col s4">
        <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FUntitled-1.png?v=1601561524408" />
        </div>
      </div>
      </div>
      
    </div>
    <div className="title_box">
    <div className="container">
    <div className="row">
        <div className="col s8">
      <h1>
        Automation Engineer
          </h1>
      <p>
        Automating to the ease
            <div className="decp"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
        </svg></div>
      </p>
      </div>
      </div>
      </div>
    </div>
    <div className="title_box">
      <h1>
        Graphic Designer
          </h1>
      <p>
        Designing of effective and infomative posters / social media posts
          </p>
    </div>
    <div className="title_box">
      <h1>
        Sketch Artist
          </h1>
      <p>
        Heart to sketching
          </p>
    </div>
  </Carousel>
  <div className="container">
    <div className="row">
      <div className="col m6 offset-m3 center"  style={{color:"white"}}>
     <quote> "True education must correspond to the surrounding circumstances or it is not a healthy growth."-Mahatma Gandhi</quote>
     <br/><a href="https://www.instagram.com/shashwat_xprose/" target="_blank"><i class="fab fa-instagram-square"></i></a>
     <a href="https://www.linkedin.com/in/shashwat-sahu-1427501aa/" target="_blank"><i class="fab fa-linkedin"></i></a>
     <a href="https://github.com/Shashwat-Sahu" target="_blank">
       <i class="fab fa-github-square"></i>
       </a>
      </div>
    </div>
  </div>
    <div></div>
    
  </div>
  <div className="container" id="about">
    <div className="row"><h1>About Me</h1></div>
  <div class="row ">
    <div class="col m4 s12 "  >
      <div class="card hoverable"  data-aos="fade-right" data-aos-duration="4000" >
        <div class="card-image ">
          <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Fdhd.jpg?v=1601796245955"/>
          
        </div>
        <div class="card-content">
          <p>Shashwat Sahu</p>
        </div>
        
      </div>
    </div>
    <div class="col m8 s12">
      <div className="container">
      <div className="row">
      <div class="card hoverable "   data-aos="fade-left" data-aos-duration="4000">
        <div class="card-title">
        How would I describe myself?
        </div>
        <div class="card-content">
          <p>Currently I am a Sophomore at National Institute of Technology, Kurukshetra pursueing B.tech in Information Technology</p><br/>
          <p>“I am passionate about my work. Because I love what I do, I have
             a steady source of motivation that drives me to do my best. In my college life, this passion led me to
              challenge myself daily and learn new skills that helped me to do better work. 
            For example, I taught myself how to use Photoshop to improve the quality of our 
            photos and graphics. I soon became the go-to person for any design needs.”</p>
            <br/>
            
        </div>
        </div>
      </div>
      <div className="row " data-aos="fade-right" data-aos-duration="4000">
      <Carousel 
  carouselId="Carousel-2"
  
  options={{
    dist: -100,
    duration: 200,
    fullWidth: false,
    indicators: true,
    noWrap: false,
    numVisible: 5,
    onCycleTo: null,
    padding: 0,
    shift: 0
  }}
>
<a target="_blank" href="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20200531_164015.jpg?v=1601796247459">
    <img style={{height:"350px"}} src='https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20200531_164015.jpg?v=1601796247459'/>
    </a>
    <a target="_blank" href="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG20191002212808-edited.jpg?v=1601796249360">
<img src= 'https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG20191002212808-edited.jpg?v=1601796249360'/>
</a>
<a target="_blank" href="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20190923_075520%20(1).jpg?v=1601796247002">
   <img src='https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20190923_075520%20(1).jpg?v=1601796247002'/>
   </a>
   <a target="_blank" href="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20201003_151324.jpg?v=1601796247354">
<img src='https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FIMG_20201003_151324.jpg?v=1601796247354'/>
</a>


</Carousel>
      </div>
      </div>
    </div>
  </div>
  </div>
  <div  id="header">
  <div className="container" id="skills"> 
   <div className="row" >
    <h1 className="right">My Skills</h1>
  </div>
  
  <div className="row">
    <div className="col m6 s12 " data-aos="fade-left" data-aos-duration="4000">
      <h3>Skill Distribution</h3><br/>
      <div className="center">
      <span>Expert <i class="fas fa-greater-than-equal"></i> 10 </span>
      <span>Intermediate <i class="fas fa-greater-than-equal"></i> 5 </span>
      <span> Beginner <i class="fas fa-less-than"></i> 5 </span><br/>
      <span>(Touch each portion for information)</span>
      </div>
<canvas id="myChart1"></canvas>
  </div>
  <div className="col m6 s12 " data-aos="fade-right" data-aos-duration="4000">
  <h3>Projects in each field</h3><br/>
      <div className="center">
<canvas id="myChart2"></canvas>
</div>
  </div>
  </div>
  </div>
  </div>
  <div>
    <div style={{background:"url('https://i2.wp.com/files.123freevectors.com/wp-content/original/109010-light-mosaic-tile.jpg?w=800&q=95')"}}>
    <div className="container project" id="project" >
      <div className="row">
      <h1 style={{textShadow:"0 0 20px gray"}}>Projects</h1>
      </div>
      <div className="row">
        <h3  style={{textShadow:"0 0 15px gray"}}>Web Development</h3>
        <Carousel
  carouselId="Carousel3"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
  className="z-depth-4"
>
  <a href="https://instaclone-shashwat.herokuapp.com/">
  
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Ff13c8033-167f-4a8d-adf0-95259f53d556.image.png?v=1601727606544"/>
  
  
  </a>
  
  <a href="https://covid-19-shashwat.herokuapp.com/">
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2F96bc0bfa-6b3f-42af-bbb2-8da344bf76b8.image.png?v=1601727223667"/>
  </a>
  

  
  <a href="https://internship-shashwat.glitch.me/">
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Ff2654fec-7d89-4d13-a1ff-385e3bea827e.image.png?v=1601728619254"/>
  </a>
  
  <a href="https://instaclone-shashwat.herokuapp.com/">
  
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2F0cc40e55-aba8-4671-a168-87ea979c7713.image.png?v=1601732858661"/>
  
  
  </a>
</Carousel>
      </div>
      
    </div>
    <div className="container">
        <h3 className="right" style={{textShadow:"0 0 15px gray"}}>Graphic Designing</h3></div>
      <div className="row">
        
        <Carousel
  carouselId="Carousel4"
  className="white-text center photoshop"
  options={{
    fullWidth: false,
    indicators: true
  }}
  style={{width:"300px"}}
  
>
  <a href="https://www.instagram.com/p/CE4TLxZp2ax/" target="_blank">
  
  <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2F1601734198913.png?v=1601734217632"/>
  
  </a>
  
  <a href="https://www.instagram.com/p/B_JlH8pJcMR/" target="_blank">
  
  <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Fpost1.jpg?v=1601734394219"/>
  
  </a>

  <a href="https://www.instagram.com/p/B97NvWTJqos/" target="_blank">
  
  <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FPOST1.jpg?v=1601734351004"/>
  
  </a>
  
  <a href="https://www.instagram.com/p/CD5WIubJK6W/" target="_blank">
  
  <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Findependence_without_hindi.png?v=1601734357200"/>
  
  </a>
  
  <a href="https://www.instagram.com/p/CAAoRu5J-w1/" target="_blank">
  
  <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FMOTHERS%20DAY.jpg?v=1601734415723"/>
  
  </a>
  <a href="https://www.instagram.com/p/CBdTMqrpcTB/" target="_blank">
    <img className="z-depth-4" src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Fsushant.png?v=1601742460906"/>
  </a>
</Carousel>
      </div>
      
    </div>
    <div id="header">
      <div className="container"  id="aspire">
        <h1 className="row"  data-aos="fade-right" data-aos-duration="4000">What I aspire to be !</h1>
    <div className="row">
      <div className="col m2 s12"  data-aos="fade-left" data-aos-duration="4000">
        <h4>Front-end Engineer</h4>
        <p>Looking for opportunity in improvising front end components in a corporate.</p>
      </div>
      <div className="col m2 s12"  data-aos="fade-left" data-aos-duration="4000">
        <h4>Back-end Engineer</h4>
        <p>Want to simulate backend properties of server and would like to increase its efficiency too</p>
      </div>
      <div className="col m3 s12" data-aos="fade-left" data-aos-duration="4000">
        <h4>Automation Engineer</h4>
        <p>Automating tasks reduces human efforts to the lowest.From mail generating to accessing files and manipulating them, I am ready for it</p>
      </div>
      <div className="col m2 s12" data-aos="fade-left" data-aos-duration="4000">
        <h4>Full Stack Developer</h4>
        <p>Ready to group both front-end and back-end under one hood.</p>
      </div>
      <div className="col m2 s12" data-aos="fade-left" data-aos-duration="4000">
        <h4>Software Developer</h4>
        <p>Having proficiency in C++, Java and Python;<br/>I can work in software development too.</p>
      </div>
    </div>
      </div>
    </div>
    <div className="container" id="inspire">
      <div className="row"><h1>Inspiration</h1></div>
    <div className="row">
        <div className="col m6 offset-m3 s12">
      <Carousel
  carouselId="Carousel5"
  className="center"
  options={{
    fullWidth: true,
    indicators: false
  }}

>
<div>

          <blockquote>“Our finest moments are most likely to occur 
            when we are feeling deeply uncomfortable, unhappy, or unfulfilled. For it is only in such moments, propelled by our discomfort, 
            that we are likely to step out of our ruts and start searching for different ways or truer answers.” — M. Scott Peck</blockquote>
        
        
      </div>
      
<div>

<blockquote>“There is no passion to be found in playing small — 
  in settling for a life that is less than you are capable of living.” 
  — Nelson Mandela</blockquote>

  </div>
  
<div>
<blockquote>“When everything seems to be going against you, 
  remember that the airplane takes off against the wind, not with it.” — Henry Ford</blockquote>
  </div>
</Carousel>
      </div>
      </div>
      <div className="row center">
        <h4 style={{fontStyle:"italic"}}>My family will always be my inspiration</h4>
      </div>
    
    </div>
    <div id="header">
      <div className="container center"  id="foot">
      <a href="https://www.instagram.com/shashwat_xprose/" target="_blank"><i class="fab fa-instagram-square"></i></a>
     <a href="https://www.linkedin.com/in/shashwat-sahu-1427501aa/" target="_blank"><i class="fab fa-linkedin"></i></a>
     <a href="https://github.com/Shashwat-Sahu" target="_blank">
       <i class="fab fa-github-square"></i>
       </a>
       <h5>Dveloped By Shashwat</h5>
      </div>
    </div>
  </div>
  </>)
}

export default Home;