import React from "react";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <b><p className="navbar-brand">الأذكار</p></b>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/athkar-sabah">أذكار الصباح</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/athkar-masaa">أذكار المساء</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/athkar-nawm">أذكار النوم</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="athkar-salat">أذكار الصلاة</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
          <Outlet />
          </>

)

export default Navbar;
