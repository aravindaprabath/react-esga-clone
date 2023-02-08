import React, { useState } from 'react';

function ContentWrapper(props) {
  let classList = [
    'dark:text-slate-400 dark:bg-gray-900 dark:text-white bg-slate-50 overflow-y-auto  border-gray-800 dark:border-gray-200 p-6 min-w-full overflow-auto h-[calc(100vh-60px)] grid gap-6 jus',
  ];
  useState(() => {
    console.log('Hello');
  }, [props.isLeftMenuOpen]);
  return (
    <div
      className={
        props.isLeftMenuOpen
          ? classList +
            ' col-start-2 col-end-3 row-start-2 row-end-3 min-w-full'
          : classList + ' col-start-1 col-end-3 row-start-2 row-end-3  '
      }
    >
      {props.children}
    </div>
  );
}

export default ContentWrapper;
