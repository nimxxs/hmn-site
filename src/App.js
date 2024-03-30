import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, Navigate } from 'react';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 누름 -> 비로그인 시 로그인 페이지가 나온다.
// 5. 로그인이 되어 있을 경우에만 상품 상세 페이지를 볼 수 있음.
// 6. 로그아웃 버튼 클릭 시 로그아웃.
function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate])

  return (<div>
    <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
    <Routes>
      <Route path="/" element={<ProductAll/>} />
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
    </Routes>
      
    </div>
  );
}

export default App;
