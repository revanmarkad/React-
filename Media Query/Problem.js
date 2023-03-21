import React from 'react'
import styles from "./Problm.module.css"

function Problem() {
  return (
    <div className={styles.FristDiv}>
       
      <div className={styles.navbar}>

        <div className={styles.leftNav}>
          <img src="https://www.deliveryhero.com/wp-content/uploads/2017/08/Foodonclick-logo-700x194.png" alt="" />
          <h5>Home</h5>
          <h5>Services</h5>
          <h5>Contact</h5>
          <h5>About Us</h5>
        </div>

        <div className={styles.righttNav}>
          <h5>Login</h5>
          <button>Sign Up</button>
        </div>
      </div>
      
      <div className={styles.impDiv}>
        <div className={styles.left}>
          <p>TOTALLY FREE</p>
          <h1>!  Let's bring your <br /> team together  <br /> in Onclick</h1>
          <p>We help you to manage all of your Work <br /> <br /> and daily task in office</p>
          <div className={styles.leftLast}>
            <div  >
              <button>Get Started</button>
            </div>

            <div>
              <button style={{ color: " rgb(253, 177, 36)", backgroundColor: "white" }}>&#9742;  How to use</button>
            </div>

          </div>
        </div>
        <div className={styles.right}>

          <img src="https://www.bdtask.com/sp/graphics/img/banner.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Problem