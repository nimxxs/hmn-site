import { React, useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/login');
  // }
  const goToHome = () => {
    navigate('/')
  }
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  }
  const resetValue = (event) => {
    event.target.value = "";
  }

  return (
    <div>
        <div>
            <div className="login-button" role="button" tabIndex="0">
                {authenticate ? (
                <div onClick={() => setAuthenticate(false)}>
                  <FontAwesomeIcon icon={faFaceSmile} className='login-icon'/>
                  <span>로그아웃</span>
                </div>
                  ) : (
                <div onClick={() => navigate("/login")}>
                  <FontAwesomeIcon icon={faFaceSmile} className='login-icon'/>
                  <span>로그인</span>
                </div>
                  )}
            </div>
        </div>
        <div className='logo' onClick={goToHome}>
            <img width={150} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>
        </div>
        <div className='menu-area'>
             <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
              {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
              ))}
            </ul>
            <div className='hamburger' onClick={() => {setMenuOpen(!menuOpen);}}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars}/>
            </div>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text'placeholder='검색' onClick={resetValue} onKeyDown={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar