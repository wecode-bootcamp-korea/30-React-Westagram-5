import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginHeesoo from './pages/heesooLee/Login/Login';
import MainHeesoo from './pages/heesooLee/Main/Main';

import LoginYunsook from './pages/yunsookShin/Login/Login';
import MainYunsook from './pages/yunsookShin/Main/Main';

import LoginYoojung from './pages/yoojungNoh/Login/Login';
import MainYoojung from './pages/yoojungNoh/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-heesoo" element={<LoginHeesoo />} />
        <Route path="/main-heesoo" element={<MainHeesoo />} />
        <Route path="/login-yunsook" element={<LoginYunsook />} />
        <Route path="/main-yunsook" element={<MainYunsook />} />
        <Route path="/login-yoojung" element={<LoginYoojung />} />
        <Route path="/main-yoojung" element={<MainYoojung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
