import React, {useState} from 'react';

function ContentWrapper(props) {

    return (
        <div className={props.isLeftMenuOpen ? ' dark:text-slate-400 dark:bg-gray-900 flex justify-center items-center col-start-2 col-end-3 row-start-2 row-end-3 bg-slate-200' : 'flex justify-center items-center col-start-1 col-end-3 row-start-2 row-end-3 bg-slate-200'}>
           <p> mian container</p>
        </div>
    );
}

export default ContentWrapper;