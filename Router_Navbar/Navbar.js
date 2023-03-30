import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Nav.module.css"

function Navbar() {
    return (
       
           



                <nav >

                    <div className={styles.Navbar}>

                        <div  >
                            <img className={styles.logo} src="https://www.pngitem.com/pimgs/m/383-3835039_adidas-logo-transparent-background-transparent-adidas-logo-hd.png" alt="functionUp" />

                        </div>

                        <NavLink to={"/"}>

                            <p>
                                <span>Home</span>
                            </p>

                        </NavLink>

                        <NavLink to={"/login"}>

                            <p>
                                <div   >Login</div>
                            </p>

                        </NavLink>


                        <NavLink to={"/about"}> 

                            <p>
                                <span>About</span>
                            </p>

                        </NavLink>

                        <NavLink to={"/register"}>

                            <p>
                                <span>Register</span>
                            </p>

                        </NavLink>


                    </div>
                </nav>
            
        

    )
}

export default Navbar