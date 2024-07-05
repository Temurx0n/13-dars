import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to='/Home' className='logo'>Products</Link>
        <div className="header_link">
          <Link to='/' className='links'>Course</Link>
          <Link to='/' className='links'>Animals</Link>
          <Link to='/' className='links'>Fruits</Link>
          <Link to='/' className='links'>Cars</Link>
          <Link to='/' className='links'>Login</Link>
          <Link to='/' className='links'>Register</Link>
          <Link to='/' className='links'>LogOut</Link>
        </div>
      </header>



    </>
  )
}

export default Header