// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveAreaBump } from '@nivo/bump';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let myData = [
  {
    id: 'JavaScript',
    data: [
      {
        x: 2000,
        y: 20,
      },
      {
        x: 2001,
        y: 18,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 25,
      },
      {
        x: 2004,
        y: 29,
      },
      {
        x: 2005,
        y: 24,
      },
    ],
  },
  {
    id: 'ReasonML',
    data: [
      {
        x: 2000,
        y: 30,
      },
      {
        x: 2001,
        y: 19,
      },
      {
        x: 2002,
        y: 30,
      },
      {
        x: 2003,
        y: 23,
      },
      {
        x: 2004,
        y: 19,
      },
      {
        x: 2005,
        y: 26,
      },
    ],
  },
  {
    id: 'TypeScript',
    data: [
      {
        x: 2000,
        y: 25,
      },
      {
        x: 2001,
        y: 29,
      },
      {
        x: 2002,
        y: 10,
      },
      {
        x: 2003,
        y: 11,
      },
      {
        x: 2004,
        y: 22,
      },
      {
        x: 2005,
        y: 10,
      },
    ],
  },
  {
    id: 'Elm',
    data: [
      {
        x: 2000,
        y: 22,
      },
      {
        x: 2001,
        y: 20,
      },
      {
        x: 2002,
        y: 14,
      },
      {
        x: 2003,
        y: 14,
      },
      {
        x: 2004,
        y: 29,
      },
      {
        x: 2005,
        y: 26,
      },
    ],
  },
  {
    id: 'CoffeeScript',
    data: [
      {
        x: 2000,
        y: 29,
      },
      {
        x: 2001,
        y: 13,
      },
      {
        x: 2002,
        y: 21,
      },
      {
        x: 2003,
        y: 29,
      },
      {
        x: 2004,
        y: 22,
      },
      {
        x: 2005,
        y: 17,
      },
    ],
  },
];
const MyResponsiveChoropleth = () => {
  return (
    <div
      className={
        '   border dark:border-gray-800 border-gray-300 rounded-md p-6'
      }
    >
      <ResponsiveAreaBump
        data={myData}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode='normal'
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
              id: 'CoffeeScript',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'TypeScript',
            },
            id: 'lines',
          },
        ]}
        startLabel='id'
        endLabel='id'
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
      />
    </div>
  );
};
export default MyResponsiveChoropleth;
