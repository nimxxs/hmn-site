import { React, useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

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
  const toggleMenu = () => {
    setShowMenu(!showMenu); 
  };
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleMobile = () => {
      setIsMobile(window.innerWidth < 768);
    }

    handleMobile();
    window.addEventListener('resize', handleMobile);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleMobile);
      document.addEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
            <div ref={menuRef}>
              <ul className={`menu-list ${showMenu && isMobile ? 'show' : ''}`}>
                {menuList.map((menu, index) => (
                  <li key={index}>{menu}</li>
                ))}
              </ul>
            </div>
          {isMobile && (
            <div className='hamburger' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} style={{ display: showMenu ? 'none' : 'block' }}/>
            </div>
          )}
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text'placeholder='검색' onClick={resetValue} onKeyDown={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar