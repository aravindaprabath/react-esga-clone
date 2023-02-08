import React, { useState } from 'react';

function ContentWrapper(props) {
  let classList = [
    'dark:text-slate-400 dark:bg-gray-900 dark:text-white bg-slate-50 border border-rad-100 p-6',
  ];

  return (
    <div
      className={
        props.isLeftMenuOpen
          ? classList + ' col-start-2 col-end-3 row-start-2 row-end-3 '
          : classList + ' col-start-1 col-end-3 row-start-2 row-end-3 '
      }
    >
      {props.children}
    </div>
  );
}

export default ContentWrapper;
