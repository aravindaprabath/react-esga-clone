import React from 'react';

function DashboardChartGridWrapper(props) {
  return (
    <div className='grid grid-cols-dashboardChart-grid-3cols grid-rows-dashboardChart-grid-rows gap-6 '>
      {props.children}
    </div>
  );
}

export default DashboardChartGridWrapper;
