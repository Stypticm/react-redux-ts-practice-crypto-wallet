//router
import { NavLink, useLocation } from 'react-router-dom';

//icons
import { GrTransaction, GrLineChart, GrBitcoin, GrSettingsOption } from 'react-icons/gr';

const Menu = () => {
  const baseStyle = 'rounded-md p-4 bg-gray-300 flex justify-center';
  const activeStyle = 'rounded-md p-4 bg-gray-400';
  const hoverStyle = 'hover:bg-gray-400';

  let location = useLocation();

  return (
    <>
      <nav className={`flex flex-col justify-start gap-5 pt-10`}>
        <NavLink to='charts'>
          <div
            className={`${
              location.pathname === '/charts'
                ? `${activeStyle} ${hoverStyle}`
                : `${baseStyle} ${hoverStyle}`
            }`}
          >
            <GrLineChart />
          </div>
        </NavLink>
        <NavLink className='' to='crypts'>
          <div
            className={`${
              location.pathname === '/crypts'
                ? `${activeStyle} ${hoverStyle}`
                : `${baseStyle} ${hoverStyle}`
            }`}
          >
            <GrBitcoin />
          </div>
        </NavLink>
        <NavLink className='' to='orders'>
          <div
            className={`${
              location.pathname === '/orders'
                ? `${activeStyle} ${hoverStyle}`
                : `${baseStyle} ${hoverStyle}`
            }`}
          >
            <GrTransaction />
          </div>
        </NavLink>
        <NavLink className='' to='settings'>
          <div
            className={`${
              location.pathname === '/settings'
                ? `${activeStyle} ${hoverStyle}`
                : `${baseStyle} ${hoverStyle}`
            }`}
          >
            <GrSettingsOption />
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
