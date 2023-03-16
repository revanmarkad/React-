import React, { useState } from "react";

function FacebookLogin() {

  const [show, setShow] = useState(true)
  function handleClick() {
    show ?
      setShow(false) : setShow(true)
  }
  return (
    <>
      {show ?

        <div className="allPage">


          <div className="welcome">
            <h1>Welcome!</h1>
            <h5>Log In your account</h5>
          </div>
          <div className="inputBox">
            <h5>Your Email ..</h5>
            <input id="InputBox" type="email" />
            <h5>Password ..</h5>
            <input id="InputBox" type="password" />
          </div>
          <div className="checkBox">
            <h7>

              <input type="checkbox" /> Remember me
            </h7>
            <h7 id="pass">forgot Password?</h7>
          </div>
          <br />
          <div>
            <button className="loginButton" >Login</button>
          </div>
          <br />
          <hr />
          <div id="menButton" onClick={handleClick} >{show ? "signUp?" : "login"} </div>
          <br />
          <div className="icon">
            <img
              id="iconImg"
              src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
              alt="googal"
            />

            <img
              id="iconImg"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
              alt="facebook"
            />
          </div>
        </div> :


                 
        //  signUp !!!
        <div className="allPage">
          <div className="welcome">
            <h1>Welcome!</h1>
            <h5>Create New account</h5>
          </div>
          <div className="inputBox">
            <h5>Frist Name ..</h5>
            <input id="InputBox" type="email" />
            <br />
            <h5>Last Name..</h5>
            <input id="InputBox" type="email" />
            <h5>Your Email ..</h5>
            <input id="InputBox" type=" text" />
            <br />
            <br />
            <h5>Password ..</h5>
            <input id="InputBox" type="password" />
          </div>
          <div className="checkBox">
            <h7>
              <input type="checkbox" /> Remember me
            </h7>
          </div>
          <br />
          <div>
            <button className="loginButton" > Create ..</button>
          </div>
          <br />
          <hr />
          <div id="menButton" onClick={handleClick} >{show ? "signUp?" : "login"} </div>
          <br />
          <div className="icon">
            <img
              id="iconImg"
              src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
              alt="googal"
            />
          </div>
        </div>
      }
    </>
  );
}
export default FacebookLogin;
