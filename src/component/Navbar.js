import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }
  const goToHome = () => {
    navigate('/')
  }

  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin} role="button" tabIndex="0">
                <FontAwesomeIcon icon={faFaceSmile} className='login-icon'/>
                <div>로그인</div>
            </div>
        </div>
        <div className='logo' onClick={goToHome}>
            <img width={150} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>
        </div>
        <div className='menu-area'>
              <ul className='menu-list'>
                {menuList.map(menu => <li>{menu}</li>)}
              </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text'placeholder='검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar