import React, { useState } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';import './Homepage.css';
import Overview from '../overview/Overview';
import QRCodes from '../QRcodes/QRCodes';
import Uploadmenus from '../uploadmenus/Uploadmenus';


const Homepage = () => {
    const [selectedHeader, setSelectedHeader] = useState(null);
    // const [selectedSubmenuItem, setSelectedSubmenuItem] = useState(null);

    // Menu items for different headers
    const submenuItems = {
        'Online Menus': ['Overview', 'QR Codes', 'Upload Menus'],
        'Orders': ['Tracking Orders', 'Order Tracking App', 'Alert Call'],
        'DIY Designs': ['Traditional Menus', 'Digital Menus', 'Table Rent', 'Takeout Menu', 'Half Page Menu', 'Flyer', 'Kids Menu', 'Postcard', 'Business Card'],
        'Display App': ['App 1', 'App 2', 'App 3'],
        'Restaurant Basics': ['Name & Address', 'Location', 'Restaurant Website', 'Cuisine Selector', 'Account Confirmation'],
        'Clover POS': ['POS 1', 'POS 2', 'POS 3'],
        'Services': ['Service 1', 'Service 2', 'Service 3'],
        'Settings': ['Setting 1', 'Setting 2', 'Setting 3'],
    };
    const navigate = useNavigate();
    const handleSubmenuClick = (submenuItem) => {

        if (submenuItem === 'Overview') {
            navigate('/Overview');
        } else if (submenuItem === 'QR Codes') {
            navigate('/QRCodes');
        } else if (submenuItem === 'Upload Menus') {
            navigate('/Uploadmenus');
        }
    };

    return (
        <div>
            <div className="dashboard-container">
                <div className="dashboard-header">

                    {Object.keys(submenuItems).map((headerItem) => (
                        <p
                            key={headerItem}
                            className="header-text"
                            onClick={() => setSelectedHeader(headerItem)}
                        >
                            {headerItem}
                        </p>
                    ))}
                </div>

                <div className="dashboard">
                    <div className="dashboard-sidebar">
                        <div className="sidebar-box">

                            {selectedHeader && (
                                <ul>
                                    {submenuItems[selectedHeader].map((submenuItem) => (
                                        <li
                                            key={submenuItem}
                                            onClick={() => handleSubmenuClick(submenuItem)}

                                        >
                                            {submenuItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="dashboard-content">

                        <Routes>
                            <Route path="/Overview" element={<Overview/>} />
                            <Route path="/QRCodes" element={<QRCodes/>} />
                            <Route path="/Uploadmenus" element={<Uploadmenus />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
