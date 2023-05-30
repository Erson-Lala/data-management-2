import React from 'react'
import { Link } from 'react-router-dom'
import './Header.sass'
import SchoolLogo from '../../Assets/SchoolLogo.png'

function Header() {
  return (
    <header className='top-header'>
      <nav className=' mx-10 flex justify-between'>
        <Link to='/' className='w-16 my-2'><img src={SchoolLogo} alt='SchoolLogo'/></Link>
        <ul className='flex items-center justify-between w-1/3 text-zinc-'>
          <li><Link to="/indentifikohu">Indentifikohu</Link></li>
          <li><Link to="/regjistrohu">Regjistrohu</Link></li>
          <li><Link to="/studentet">Studentet</Link></li>
          <li><Link to="/detajetestudenteve">Detajet e Studenteve</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header