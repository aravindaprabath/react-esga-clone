import React, {useEffect, useState} from 'react';
import LeftMenuLevelOne from '../components/LeftMenuLevelOne';
import TopMenu from '../components/TopMenu';
import ContentWrapper from '../components/ContentWrapper.jsx';
import MyResponsiveBump from '../charts/MyResponsiveBump.jsx';
import DashboardChartGridWrapper from '../components/DashboardChartGridWrapper';
import MyResponsiveChoropleth from '../charts/MyResponsiveChoropleth.jsx';
import PieChart from '../charts/PieChart.jsx';
import BarChart from '../charts/BarChart';
import {RadialBar} from '@nivo/radial-bar';
import MyResponsiveRadialBar from "../charts/MyResponsiveRadialBar.jsx";

let data = [{
    id: 'Supermarket', data: [{
        x: 'Vegetables', y: 161,
    }, {
        x: 'Fruits', y: 49,
    }, {
        x: 'Meat', y: 48,
    },],
}, {
    id: 'Combini', data: [{
        x: 'Vegetables', y: 47,
    }, {
        x: 'Fruits', y: 146,
    }, {
        x: 'Meat', y: 205,
    },],
}, {
    id: 'Online', data: [{
        x: 'Vegetables', y: 199,
    }, {
        x: 'Fruits', y: 189,
    }, {
        x: 'Meat', y: 65,
    },],
}, {
    id: 'Marché', data: [{
        x: 'Vegetables', y: 215,
    }, {
        x: 'Fruits', y: 149,
    }, {
        x: 'Meat', y: 252,
    },],
},];

export default function LandingPage() {
    let [toggleTopMenuIcon, setToggleTopMenuIcon] = useState(false);
    let [isLeftMenuOpen, setisLeftMenuOpen] = useState(true);

    let topMenuIconClickHandler = () => {
        setisLeftMenuOpen(!isLeftMenuOpen);
        setToggleTopMenuIcon(!toggleTopMenuIcon);
    };
    useEffect(() => {
    }, [isLeftMenuOpen]);

    return (<div className='grid-cols-homepage-grid-cols grid-rows-homepage-grid-rows min-h-screen grid h-'>
        <TopMenu
            topMenuIconClickHandler={topMenuIconClickHandler}
            toggleTopMenuIcon={toggleTopMenuIcon}
        />
        {isLeftMenuOpen && <LeftMenuLevelOne/>}
        <ContentWrapper isLeftMenuOpen={isLeftMenuOpen}>

            <DashboardChartGridWrapper>
                <BarChart/>
                <PieChart/>
                <MyResponsiveBump/>
                <MyResponsiveRadialBar
                    data={data}
                />
            </DashboardChartGridWrapper>

            <DashboardChartGridWrapper>
                <MyResponsiveBump/>
                <PieChart/>
            </DashboardChartGridWrapper>

            <DashboardChartGridWrapper>
                <MyResponsiveChoropleth/>
                <MyResponsiveChoropleth/>
                <MyResponsiveChoropleth/>
            </DashboardChartGridWrapper>
        </ContentWrapper>
    </div>);
}
