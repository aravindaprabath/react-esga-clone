import React, {useState} from 'react';
import LeftMenuLevelOne from '../components/LeftMenuLevelOne';
import TopMenu from '../components/TopMenu';
import ContentWrapper from "../components/ContentWrapper.jsx";

export default function LandingPage() {
    let [toggleTopMenuIcon, setToggleTopMenuIcon] = useState(false);
    let [isLeftMenuOpen, setisLeftMenuOpen] = useState(true);

    let topMenuIconClickHandler = () => {
        setisLeftMenuOpen(!isLeftMenuOpen);
        setToggleTopMenuIcon(!toggleTopMenuIcon);
    };



    return (
        <div className='grid-cols-homepage-grid-cols grid-rows-homepage-grid-rows min-h-screen grid'>
            <TopMenu
                topMenuIconClickHandler={topMenuIconClickHandler}
                toggleTopMenuIcon={toggleTopMenuIcon}

            />
            {isLeftMenuOpen && <LeftMenuLevelOne/>}
            <ContentWrapper isLeftMenuOpen={isLeftMenuOpen}/>
        </div>
    );
}
