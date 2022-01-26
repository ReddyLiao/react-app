import React from "react";
//引入需要用到的页面组件
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import System from "../src/pages/System";

//引入一些模块
import { Routes, Route } from "react-router-dom";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />}>
        <Route path="system" element={<System />} />
      </Route>
    </Routes>
  );
}

export default router;
