import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper teal darken-2 px1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Tasks</NavLink></li>
                <li><NavLink to="/about">Information</NavLink></li>
            </ul>
        </div>
    </nav>
)