import {createContext , useContext}from 'react';
import classnames from 'classnames';
import './ToggleSide.css';

export const ToggleSideContext = createContext(null);

function ToggleSide() {
    const {toggleActive, activeTab}= useContext(ToggleSideContext);
    return (
        <ul className="toggle-side pagination">
            <li onClick={() => toggleActive("1") } className={"page-link " + classnames({active : activeTab ==="1"})}>All</li>
            <li onClick={() => toggleActive("2") } className={"page-link " + classnames({active : activeTab ==="2"})}>LightSide</li>
            <li onClick={() => toggleActive("3") } className={"page-link " + classnames({active : activeTab ==="3"})}>DarkSide</li>
        </ul>
    )
}

export default ToggleSide
