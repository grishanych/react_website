import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
    PicCenterOutlined,
    CloseOutlined
  } from '@ant-design/icons';


function Navbar() {
        const [click, setClick] = useState(false);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? <PicCenterOutlined /> : <CloseOutlined />}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home 
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>

        </>
    )
}

export default Navbar;