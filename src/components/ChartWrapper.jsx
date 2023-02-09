import React from 'react';

function ChartWrapper(props) {
  return (
    <div className='border dark:border-gray-800 border-gray-300 rounded-md h-auto p-10 justify-between '>
      <div className='border-b-2   mb-4 pb-4'>
        <div className={'font-bold text-xl mb-2 text-gray-800'}>Title</div>
        <div>
          <p className={'text-gray-500'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummyen book.{' '}
          </p>
        </div>
      </div>

      <div className={'h-[400px]'}>{props.children}</div>
    </div>
  );
}

export default ChartWrapper;
