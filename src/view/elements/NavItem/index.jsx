import React from 'react'
import { Link } from 'react-router-dom'

export function NavItem({ item }){
    return (
        <Link to={item?.href}>
            <li className='nav-item'>
                {item?.name}
            </li>       
        </Link>
    )
}



