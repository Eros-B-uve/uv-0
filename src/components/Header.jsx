import { Navigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
    return (
      <header className="bg-white text-black p-4">
        <div className='flex items-center  border-b-2  justify-between h-5/6'>
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className='h-12 ml-20 p-1'/>
            </Link>
          </div>
          <div>
            <button 
            onClick={() => navigate('/mails')} 
            className="font-thin text-xl p-3 mr-20">Contactanos</button>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;