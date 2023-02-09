import React, { useEffect, useState } from 'react';

import {
  RiSunLine,
  RiMoonFill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from 'react-icons/ri';

function TopMenu(props) {
  let [isdark, setIsDark] = useState(undefined);

  let changeThemeHandler = () => {
    setIsDark(!isdark);
  };

  useEffect(() => {
    if (isdark === true) {
      localStorage.setItem('isDark', 'true');
      document.documentElement.classList.add('dark');
    } else if (isdark === false) {
      localStorage.setItem('isDark', 'false');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(localStorage.getItem('isDark') === 'true');
    }
  }, [isdark]);

  return (
    <div className='dark:border-slate-800  dark:bg-gray-900 dark:text-slate-400 flex justify-between col-start-1 col-end-3 row-start-1 row-end-2 px-4 py-2 align-middle border-b-2 border-b-slate-100'>
      <div className='flex items-center justify-start text-xl font-bold'>
        <div
          onClick={props.topMenuIconClickHandler}
          className='mr-4 p-2 cursor-pointer  dark:text-teal-600 text-3xl rounded-full border border-gray-300 '
        >
          {props.toggleTopMenuIcon ? <RiArrowRightLine /> : <RiArrowLeftLine />}
        </div>
        <p className='text-slate-800 dark:text-teal-500'>
          ESG <span className='font-playfair italic text-1xl'>Advantage</span> .
        </p>
      </div>
      <div className='flex justify-end items-center gap-3'>
        <ul className='flex gap-3 '>
          <li className=''>
            <a
              className='px-3 py-2 rounded hover:bg-slate-200'
              href=''
            >
              Profile
            </a>
          </li>
          <li>
            <a
              className='px-3 py-2 rounded hover:bg-slate-200'
              href=''
            >
              About us
            </a>
          </li>
        </ul>
        <div
          onClick={changeThemeHandler}
          className='cursor-pointer border border-slate-300 dark:border-teal-600 dark:text-teal-500 p-2 rounded-full'
        >
          {isdark ? <RiSunLine /> : <RiMoonFill />}
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
