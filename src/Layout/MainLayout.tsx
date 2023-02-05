import React from 'react';
import Menu from '../pages/MainPage/menu/Menu';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={`w-screen h-screen overflow-x-hidden`}>
      <div className={`flex h-full`}>
        <div className={`flex flex-col`}>
          <div>
            <div
              className={`bg-purple-900 text-slate-50 text-2xl rounded-md p-2 m-3`}
            >
              wbc
            </div>
          </div>
          <div className={`flex h-5/6 justify-around`}>
            <Menu />
          </div>
        </div>
        <div className={`flex w-full`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
