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
        type: 'horizontalBar',
    
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
            xAxes: [{
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
     <br/><i class="fab fa-instagram-square"></i><i class="fab fa-linkedin"></i><i class="fab fa-github-square"></i>
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
          <img src="https://lh3.googleusercontent.com/UoYmaTlbvsHj0jrTO1pVDppTKTGvBJ1yIVCqPOmsZYGnMGGSmsCSz-I9OukSJC7s0Po3gY3KSy6c8cuesfrCQuMl5larBqwi09CkBkwf1VIAeiy4VJG0rgsU-bI2Yx56GBVXNrLvfyDl-yt4HPYdSnIco3f8c9YlOGAFztJXV4bC_aXTO8p6kjhrxmJ_n8Zf6L_s3LhQS6slTrGbJySC1ZS75qzWwPM3OV3KzxytJrfNGtQiVGM9TE4Niz-HUNqmlYfY_sfLxg-RenMOp9-xNyIKOjfmWmf1nDZUfEwqgi5zEXq4eBWPMq8d-_JW4qJ8Ik3NzUpleoES7ce0MSdrl-HvBNoAN7og1aF4UGl4wa6kxjV838P-eNzlDuEGx-qfWsBjr6cTdW4PtlSqySCdNLZesGQOw1AaXm-Mz42cK2wnJgj92i-zUmdkvbwy2JIr5SHnZ7EDfSdp4Gxz6Gp0yJo2LI034WVZVr9spNAA50McCBegrxcy4dCcn4t6YUTYauNEtu8hIN75DK-7oib7ysBfrQ9_WQ9l5rbFImCr9z4iH30lBFBqv3VVwMDZg3xGFYh6ZQON15OHDefPopgw5i4ji4ddFlGx1Z_9JfVMp9VncwnHS6w_67NBHVIRgwt9_NHTv63gJCmlzOG84sgGGh2Oqhczdt4oDBBtuk92o1r0xogVBJorKolHMa0C=w300-h360-no?authuser=0"/>
          
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
<a target="_blank" href="https://lh3.googleusercontent.com/Vm3ThvIhWvZjPhD8zhdZimiVHUJqWwk2EbWKQHetW9q3mWottGulVKrdCtlLXsLokwHX5LQc3W5eKfhcArM-647mVBbQglj7P9pZ5XbsibQEULcqjvTMh6Led5-9FSADCAP2wnskkmjTo3T_UgV_WcpZ9rdGKsjoUraoI2plXp6KdqmH0HHHFM8QjOBjP5yyneLg7dJEr3YOuyIWCf3uhUAsa32gY6Xnj00uDeJJz8S3CobwzyIMkD8osPP5lQVk1GV44H8cmIoUtyEa2LzZN0llXEadBZnroL6MORan3WkKAayuxxlx9ph34Gh15fDXIQaoN0qFhuspSQ63PC4Gj-yas9G9cHEbhofzgRFEfd8-rhRXcvC3lesUhv8dyWXPdLvjwq54OoUTFJHQ0hbwSRcoN92rGaBnnkNmqyrNt2dPnVTFPNoJTldAMT3qHtL19tfAav_Wi4tCB9TJzetXouOJZGf6VYIXSd-3Lji3Dxu3U1aBui_4_NSRkq0P4J3jRBK_sTB5Qfpo3OuRM2hcLfxGL-WIqKFzeqkF_uzjh46b1Y11vmJKNYqLoNGu5Q3PNmBN4hV15XfTX1Mh_agb-Hd7_oTfNqWRLcLvdB1RLJqKSCYCjiPret3WbY4WNyDydAY8nwOjKSQ6j1YHvcTRI3n__tlb4bTaFcuNdXUdMycvDQt77DocYyRrVT_3=w533-h943-no?authuser=0">
    <img style={{height:"350px"}} src='https://lh3.googleusercontent.com/Vm3ThvIhWvZjPhD8zhdZimiVHUJqWwk2EbWKQHetW9q3mWottGulVKrdCtlLXsLokwHX5LQc3W5eKfhcArM-647mVBbQglj7P9pZ5XbsibQEULcqjvTMh6Led5-9FSADCAP2wnskkmjTo3T_UgV_WcpZ9rdGKsjoUraoI2plXp6KdqmH0HHHFM8QjOBjP5yyneLg7dJEr3YOuyIWCf3uhUAsa32gY6Xnj00uDeJJz8S3CobwzyIMkD8osPP5lQVk1GV44H8cmIoUtyEa2LzZN0llXEadBZnroL6MORan3WkKAayuxxlx9ph34Gh15fDXIQaoN0qFhuspSQ63PC4Gj-yas9G9cHEbhofzgRFEfd8-rhRXcvC3lesUhv8dyWXPdLvjwq54OoUTFJHQ0hbwSRcoN92rGaBnnkNmqyrNt2dPnVTFPNoJTldAMT3qHtL19tfAav_Wi4tCB9TJzetXouOJZGf6VYIXSd-3Lji3Dxu3U1aBui_4_NSRkq0P4J3jRBK_sTB5Qfpo3OuRM2hcLfxGL-WIqKFzeqkF_uzjh46b1Y11vmJKNYqLoNGu5Q3PNmBN4hV15XfTX1Mh_agb-Hd7_oTfNqWRLcLvdB1RLJqKSCYCjiPret3WbY4WNyDydAY8nwOjKSQ6j1YHvcTRI3n__tlb4bTaFcuNdXUdMycvDQt77DocYyRrVT_3=w533-h943-no?authuser=0'/>
    </a>
    <a target="_blank" href="https://lh3.googleusercontent.com/T8Fn29EmtUv8kq9e0vnRhbu6-axAp_SwZwV28Ct2Jozp3ocSJ4znZHFfI8oZdFVn-UL3rb1PP_2fZrMIHA67f1u_YmRO_LdYpWjH6xGy10h8bji8RwIkgW6A1hZsfkjBQlvuviNVam0nA4ydUXtq2LnYufV8Xuk6h2YJ9n3MKbHJEFMmZnvftBh8RtmdSX75_KIzTFImyO1WUpth6vsU9rRccOKl-SPLmkGGS1_UjPGjy2rDvA2nFZRq366kr28jHmwrRMV2xKhiX7YkmcL2FKd2rwF_LtZZtL7VBvO-uaJj-opTdgXyElwUC3WDJGNURstWjlfelu4U3rPpah5s3VM5xTHbW5w4353i6I3TQkQxqkkQcTJQJ6yNyxe3JJfRzr-fcYc_6ylNkQcYQDQPlkh7Y2_hO47h87HwxySKTjbVLdQ-Cj0-S5Cp6eNSLCcHgLC0rJtIYwMf3wYvYSBTlGmIaZ0gmLdk9XHZilczrTJynV6OSWS-rgtUTASRJDlgsdGFEJEed6hzlLimw69VXK2Q0NexDOv6e4gTbW4VYiHMTyKd1tttdy0i2Y2tB8lCFzPsSGLszI_hx6UE7dlqZrJE9sQgJQqN3pjSDjn9EySFQ-lSILZF-O8BZImrmI_Ce_rdxYWTM4h8q6fV4ryMnpKMk-LiS7_lPN0vGvgvi4cZWaelaiMbk-CcvLRE=w1258-h944-no?authuser=0">
<img src= 'https://lh3.googleusercontent.com/T8Fn29EmtUv8kq9e0vnRhbu6-axAp_SwZwV28Ct2Jozp3ocSJ4znZHFfI8oZdFVn-UL3rb1PP_2fZrMIHA67f1u_YmRO_LdYpWjH6xGy10h8bji8RwIkgW6A1hZsfkjBQlvuviNVam0nA4ydUXtq2LnYufV8Xuk6h2YJ9n3MKbHJEFMmZnvftBh8RtmdSX75_KIzTFImyO1WUpth6vsU9rRccOKl-SPLmkGGS1_UjPGjy2rDvA2nFZRq366kr28jHmwrRMV2xKhiX7YkmcL2FKd2rwF_LtZZtL7VBvO-uaJj-opTdgXyElwUC3WDJGNURstWjlfelu4U3rPpah5s3VM5xTHbW5w4353i6I3TQkQxqkkQcTJQJ6yNyxe3JJfRzr-fcYc_6ylNkQcYQDQPlkh7Y2_hO47h87HwxySKTjbVLdQ-Cj0-S5Cp6eNSLCcHgLC0rJtIYwMf3wYvYSBTlGmIaZ0gmLdk9XHZilczrTJynV6OSWS-rgtUTASRJDlgsdGFEJEed6hzlLimw69VXK2Q0NexDOv6e4gTbW4VYiHMTyKd1tttdy0i2Y2tB8lCFzPsSGLszI_hx6UE7dlqZrJE9sQgJQqN3pjSDjn9EySFQ-lSILZF-O8BZImrmI_Ce_rdxYWTM4h8q6fV4ryMnpKMk-LiS7_lPN0vGvgvi4cZWaelaiMbk-CcvLRE=w1258-h944-no?authuser=0'/>
</a>
<a target="_blank" href="https://lh3.googleusercontent.com/1rvv2fb-IzqHQZMcuCC0PXp2n4ipZMLyfASeZTI_skQWLLJNdJP8NmTI9-1fiZecyBZhAS71Nk9WegtX8OJZyjh916Tcx2QW9kpl8UIXrkxyPElxI4yQQpLxSw1I3ID2gGSgN5rM-bdbaRkxuYBYvtimh9_8DdT2L_R-tfOfmV0wgbavxCL6PA22L1lOGQOKgxgNrcF7JP06dqzV6NLrpsnFTIXpwiSC2ou96kh9ynYJuonivFz_B3GdFynnJRJ6K7E5nBVWuqS-yAFBwiYEHi-JTDjaDj5wWKvp1YK_u7558s4OI6s2AjhOBFAili7QM_MkCl1VBT6l_NkwKh6gQznhSowyIqS5EEMlQzhWnjR9foH7hkJSgZP-5UEfnloR97rWITLyf8CPiJ360oLff9EEKvpbayKPdNJSrwf4KBV2JiwTrkdDGoEa5wqtEAs_6J7AzcX6eo53QFuYQDtml8_2I_4PITCzIpesIIpfQS8ibK51OECkW9k1vvz_hO2cRtqjxD37eQ0pbyBO08gaEh4AiZXGApv3Qs6ema6wwqOQRKMD5kxjVzXrdRbo_Pe5lLbewxk7K2PUYT6EqrVGu6_uD6G0L06PDRapgK8_FScAMfL8EEmrcmA9Imp1qWYN0wQuxe6y1LlvL_Uh-zMT9bSwea9D_LN3WB_78smEUxcduUZsN9kgzzbfx5C8=w1258-h944-no?authuser=0">
   <img src='https://lh3.googleusercontent.com/1rvv2fb-IzqHQZMcuCC0PXp2n4ipZMLyfASeZTI_skQWLLJNdJP8NmTI9-1fiZecyBZhAS71Nk9WegtX8OJZyjh916Tcx2QW9kpl8UIXrkxyPElxI4yQQpLxSw1I3ID2gGSgN5rM-bdbaRkxuYBYvtimh9_8DdT2L_R-tfOfmV0wgbavxCL6PA22L1lOGQOKgxgNrcF7JP06dqzV6NLrpsnFTIXpwiSC2ou96kh9ynYJuonivFz_B3GdFynnJRJ6K7E5nBVWuqS-yAFBwiYEHi-JTDjaDj5wWKvp1YK_u7558s4OI6s2AjhOBFAili7QM_MkCl1VBT6l_NkwKh6gQznhSowyIqS5EEMlQzhWnjR9foH7hkJSgZP-5UEfnloR97rWITLyf8CPiJ360oLff9EEKvpbayKPdNJSrwf4KBV2JiwTrkdDGoEa5wqtEAs_6J7AzcX6eo53QFuYQDtml8_2I_4PITCzIpesIIpfQS8ibK51OECkW9k1vvz_hO2cRtqjxD37eQ0pbyBO08gaEh4AiZXGApv3Qs6ema6wwqOQRKMD5kxjVzXrdRbo_Pe5lLbewxk7K2PUYT6EqrVGu6_uD6G0L06PDRapgK8_FScAMfL8EEmrcmA9Imp1qWYN0wQuxe6y1LlvL_Uh-zMT9bSwea9D_LN3WB_78smEUxcduUZsN9kgzzbfx5C8=w1258-h944-no?authuser=0'/>
   </a>
   <a target="_blank" href="https://lh3.googleusercontent.com/S_s6S_urc2SXSIWCBV-wXS7THlg8_An1rEMWaqNdPi232wI6xl6cYCgs1SCYnBWufNtE41EoZ0hOuwzhSL5c12CbPYtwbXYBHtikylmy1tsbiPadMjZK4fSXIHnWVam_H46Fyzpat0JIMJ6pK3u4n3grOF2I0_XgV9zy0bNdhyaR4psBhaIpL4OF_r6ZsCp4SA3e75AF4iR5VBVEPAkk1Dt2ZTQ7Ppy8vDgDzrxEwm0Ts-HDcCqux43_ZEftBfBm4dE3LcC68IFpIFsfPSsWxob5FhkJt1-eHmC5OAGO6PHUCmRc3YuUyuR-O5Z5lXiBvJpgTKM8G6HyGJpRoqcUKKpHDXRW3H1_d4BSXcHIH_auR-dMNBC1Ybsx5lW3vLlDLSErR5oWXq8E8pfyoLRLhgqagJLT0ZHD7Rm_SIv1BYwMQwpL2UTVCsj59qMUOSmaP9hM_W78SjQyMcmFASiPEFvsrVthQw4LWwR73y3XaYCC5w_gSsfH2d9OmUUJWpEzlEm7kbYWbcsZoMg5rEXvZtjbJjuIM1DZKIfxbA8dM6msL1ZkLzcEU3yQ4BJMD3o5sHmj6EFg78-9SHZ45Ubq7NN2fAXrJVE8QtcqnabZKIWH0UJT74b82Aw2fCuaFlh1dxjYx-bSnpud4IkMTiwMjKtpUoKw7T68x_y5j85gaTT30OX03QbmVviEWuc1=w1415-h943-no?authuser=0">
<img src='https://lh3.googleusercontent.com/S_s6S_urc2SXSIWCBV-wXS7THlg8_An1rEMWaqNdPi232wI6xl6cYCgs1SCYnBWufNtE41EoZ0hOuwzhSL5c12CbPYtwbXYBHtikylmy1tsbiPadMjZK4fSXIHnWVam_H46Fyzpat0JIMJ6pK3u4n3grOF2I0_XgV9zy0bNdhyaR4psBhaIpL4OF_r6ZsCp4SA3e75AF4iR5VBVEPAkk1Dt2ZTQ7Ppy8vDgDzrxEwm0Ts-HDcCqux43_ZEftBfBm4dE3LcC68IFpIFsfPSsWxob5FhkJt1-eHmC5OAGO6PHUCmRc3YuUyuR-O5Z5lXiBvJpgTKM8G6HyGJpRoqcUKKpHDXRW3H1_d4BSXcHIH_auR-dMNBC1Ybsx5lW3vLlDLSErR5oWXq8E8pfyoLRLhgqagJLT0ZHD7Rm_SIv1BYwMQwpL2UTVCsj59qMUOSmaP9hM_W78SjQyMcmFASiPEFvsrVthQw4LWwR73y3XaYCC5w_gSsfH2d9OmUUJWpEzlEm7kbYWbcsZoMg5rEXvZtjbJjuIM1DZKIfxbA8dM6msL1ZkLzcEU3yQ4BJMD3o5sHmj6EFg78-9SHZ45Ubq7NN2fAXrJVE8QtcqnabZKIWH0UJT74b82Aw2fCuaFlh1dxjYx-bSnpud4IkMTiwMjKtpUoKw7T68x_y5j85gaTT30OX03QbmVviEWuc1=w1415-h943-no?authuser=0'/>
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
    <div className="container project" >
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
      <div className="row">
        
        <h3 className="right">Photoshop</h3>
        <Carousel
  carouselId="Carousel3"
  className="white-text center photoshop"
  options={{
    fullWidth: false,
    indicators: true
  }}
  style={{width:"300px"}}
>
  <div>
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2F1601734198913.png?v=1601734217632"/>
  
  </div>
  
  <div>
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2Fpost1.jpg?v=1601734394219"/>
  
  </div>

  <div>
  
  <img src="https://cdn.glitch.com/20457a5a-d27c-489c-a282-348e43dc34e6%2FPOST1.jpg?v=1601734351004"/>
  
  </div>
</Carousel>
      </div>
      
    </div>
  </div>
  </>)
}

export default Home;