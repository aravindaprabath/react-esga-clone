import React from 'react';
import {ResponsiveRadialBar} from '@nivo/radial-bar';
import ChartWrapper from "../components/ChartWrapper.jsx";

const CustomSymbolShape = ({x, y, size, fill, borderWidth, borderColor}) => (
    <rect
        x={x}
        y={y}
        transform={`rotate(45 ${size / 2} ${size / 2})`}
        fill={fill}
        strokeWidth={borderWidth}
        stroke={borderColor}
        width={size}
        height={size}
        style={{pointerEvents: 'none'}}
    />
)


const MyResponsiveRadialBar = (props) => (
    <ChartWrapper>
        <ResponsiveRadialBar
            data={props.data}
            valueFormat='>-.2f'
            padding={0.4}
            cornerRadius={2}
            margin={{top: 40, right: 40, bottom: 90, left: 40}}
            radialAxisStart={{tickSize: 5, tickPadding: 5, tickRotation: 0}}
            circularAxisOuter={{tickSize: 5, tickPadding: 12, tickRotation: 0}}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 80,
                    translateY: 70,
                    itemsSpacing: 20,
                    itemDirection: 'left-to-right',
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    symbolSize: 18,
                    symbolShape: CustomSymbolShape,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                            },
                        },
                    ],
                },
            ]}
        />
    </ChartWrapper>

);

export default MyResponsiveRadialBar;
