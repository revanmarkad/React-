 import React from 'react'
 import style from "./Horizontal_scroller.module.css"
 function Horizontal_scroller() {
   return (
     
     <div className={style.allback}>

     <h1>Know Your Mentors</h1>
     <p>Work with a mentor senior scientist form top companies Lorem ipsum <br /> dolor sit amet consectetur adipisicing  voluptatem quia commodi facilis, dicta praesentium, sit officiis?</p>
   <div className={style.horizontal_men}>
      <div className={style.scroll_men }>
        <div className={style.scroll1}> 
           <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1-change.jpg" alt="" />
           <h5>Revan Markad</h5>
           <p>web developer</p>
           <p id={style.exp}>1 yrs Exp</p> 
        </div>
        <div className={style.scroll1}> 
           <img src="https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
           <h5>Isha Gupta</h5>
           <p>FunctionUp Dev</p>
           <p id={style.exp}>7 yrs Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://us.123rf.com/450wm/kadettmann/kadettmann2011/kadettmann201100071/158824998-passport-photo-of-happy-laughing-latin-american-man-with-beard-on-isolated-white-background-for-cut.jpg?ver=6" alt="" />
           <h5>Ankush Rai</h5>
           <p>Flip Dev</p>
           <p id={style.exp}>9 yrs Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://imgv3.fotor.com/images/slider-image/a-woman-in-a-suit.png" alt="" />
           <h5>Gangubai  </h5>
           <p>SQL Dev</p>
           <p id={style.exp}>5 yrs Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://www.shutterstock.com/image-photo/man-poses-passport-photo-260nw-207377266.jpg" alt="" />
           <h5>Pankaj kark</h5>
           <p>Java Dev</p>
           <p id={style.exp}> 4 yrs Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQdD9ZLBLolim4-fCT3grgaItgmv1Dz7x-YGE_sBkYwbwRqGnIqEuwuGpOrFAqRQjKkjzGjNhhkM&usqp=CAU&ec=48600113" alt="" />
           <h5>Neha Balkr</h5>
           <p>Css Dev</p>
           <p id={style.exp}> 7 yes Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=612x612&w=0&k=20&c=-zsWSzc9Q_WgSZB79-EsSomGHD-RIC4KiOZ6o0CTx24=" alt="" />
           <h5>Sai Markad</h5>
           <p>Infy Dev</p>
           <p id={style.exp}> 4 yrs Exp</p>
        </div>
        <div className={style.scroll1}> 
           <img src="https://media.licdn.com/dms/image/C5103AQF7O9KlatjWHw/profile-displayphoto-shrink_800_800/0/1552623834108?e=2147483647&v=beta&t=w9L61kug7Dv2d9inGbH44Vs8AACPHPwaZfue49GFci4" alt="" />
           <h5>Grima sen</h5>
           <p>SSBT Dev</p>
           <p id={style.exp}>2 yrs Dev</p>
        </div>
         
      </div>
    </div>
     

     </div>
     
     
     
 
   )
 }
 
 export default Horizontal_scroller