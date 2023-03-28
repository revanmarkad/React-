import React from 'react'
import { NavLink } from 'react-router-dom'
 

function Navbar() {
    return (
        <nav>
            <div >
                UI/UX design
            </div>
         <div>
            <ul  >

                <NavLink to={"/"}>
                    <li>
                        <a   >
                            <span>Home</span>
                        </a>
                    </li>
                </NavLink>

                <NavLink to={"/login"}>
                    <li>
                        <a  >
                            <div   >Login</div>
                        </a>
                    </li>
                </NavLink>


                <NavLink to={"/about"}>
                    <li>
                        <a   >
                            <span>About</span>
                        </a>
                    </li>
                </NavLink>

            </ul>
            </div>
        </nav>
    )
}

export default Navbar