import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

let data = [
  {
    country: 'AD',
    'hot dog': 51,
    'hot dogColor': 'hsl(335, 70%, 50%)',
    burger: 178,
    burgerColor: 'hsl(327, 70%, 50%)',
    sandwich: 62,
    sandwichColor: 'hsl(262, 70%, 50%)',
    kebab: 102,
    kebabColor: 'hsl(110, 70%, 50%)',
    fries: 47,
    friesColor: 'hsl(184, 70%, 50%)',
    donut: 54,
    donutColor: 'hsl(12, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 37,
    'hot dogColor': 'hsl(228, 70%, 50%)',
    burger: 21,
    burgerColor: 'hsl(225, 70%, 50%)',
    sandwich: 135,
    sandwichColor: 'hsl(229, 70%, 50%)',
    kebab: 193,
    kebabColor: 'hsl(346, 70%, 50%)',
    fries: 94,
    friesColor: 'hsl(339, 70%, 50%)',
    donut: 40,
    donutColor: 'hsl(230, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 5,
    'hot dogColor': 'hsl(140, 70%, 50%)',
    burger: 90,
    burgerColor: 'hsl(126, 70%, 50%)',
    sandwich: 49,
    sandwichColor: 'hsl(60, 70%, 50%)',
    kebab: 15,
    kebabColor: 'hsl(158, 70%, 50%)',
    fries: 135,
    friesColor: 'hsl(4, 70%, 50%)',
    donut: 141,
    donutColor: 'hsl(338, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 22,
    'hot dogColor': 'hsl(170, 70%, 50%)',
    burger: 192,
    burgerColor: 'hsl(81, 70%, 50%)',
    sandwich: 132,
    sandwichColor: 'hsl(201, 70%, 50%)',
    kebab: 3,
    kebabColor: 'hsl(66, 70%, 50%)',
    fries: 97,
    friesColor: 'hsl(167, 70%, 50%)',
    donut: 6,
    donutColor: 'hsl(66, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 40,
    'hot dogColor': 'hsl(223, 70%, 50%)',
    burger: 114,
    burgerColor: 'hsl(354, 70%, 50%)',
    sandwich: 18,
    sandwichColor: 'hsl(46, 70%, 50%)',
    kebab: 38,
    kebabColor: 'hsl(352, 70%, 50%)',
    fries: 128,
    friesColor: 'hsl(282, 70%, 50%)',
    donut: 188,
    donutColor: 'hsl(177, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 9,
    'hot dogColor': 'hsl(355, 70%, 50%)',
    burger: 88,
    burgerColor: 'hsl(137, 70%, 50%)',
    sandwich: 59,
    sandwichColor: 'hsl(130, 70%, 50%)',
    kebab: 48,
    kebabColor: 'hsl(257, 70%, 50%)',
    fries: 93,
    friesColor: 'hsl(304, 70%, 50%)',
    donut: 18,
    donutColor: 'hsl(342, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 183,
    'hot dogColor': 'hsl(193, 70%, 50%)',
    burger: 104,
    burgerColor: 'hsl(242, 70%, 50%)',
    sandwich: 168,
    sandwichColor: 'hsl(341, 70%, 50%)',
    kebab: 56,
    kebabColor: 'hsl(70, 70%, 50%)',
    fries: 167,
    friesColor: 'hsl(55, 70%, 50%)',
    donut: 71,
    donutColor: 'hsl(278, 70%, 50%)',
  },
];
const BarChart = () => {
  return (
    <div className='border dark:border-gray-800 border-gray-300 rounded-md p-6'>
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy='country'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role='application'
        ariaLabel='Nivo bar chart demo'
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default BarChart;
