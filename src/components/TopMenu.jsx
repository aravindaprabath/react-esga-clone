import React, { useEffect, useState } from 'react';

import {
  RiAlignJustify,
  RiBankLine,
  RiSunLine,
  RiMoonFill,
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
    <div className='dark:bg-slate-900 dark:text-white flex justify-between col-start-1 col-end-3 row-start-1 row-end-2 px-4 py-2 align-middle border-b-2 border-b-slate-100'>
      <div className='flex items-center justify-start text-xl font-bold'>
        <div
          onClick={props.topMenuIconClickHandler}
          className='mr-4 hover:bg-orange-50 p-2 cursor-pointer rounded dark:text-teal-600 text-orange-600 border dark:border-teal-600 border-orange-300'
        >
          {props.toggleTopMenuIcon ? <RiBankLine /> : <RiAlignJustify />}
        </div>
        <p className='text-slate-800 dark:text-teal-500'>ESGA.</p>
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
