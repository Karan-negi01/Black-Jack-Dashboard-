import React, { useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  
  const [selectedHeader, setSelectedHeader] = useState(null);

  
  const submenuItems = {
    'Online Menus': ['QR Codes','Upload Menus'],
    'Orders': ['Tracking Orders','Order Tracking App','Alert Call'],
    'DIY Designs': ['Traditional Menus','Digital Menus','Table Rent','Takeout Menu','Half Page Menu','Flyer','Kids Menu','Postcard','Buisness Card'],
    'Display App': ['App 1', 'App 2', 'App 3'],
    'Restaurant Basics': ['Name & Address','Location','Restaurant Website','Cuisine Selector','Account Confirmation'],
    'Clover POS': ['POS 1', 'POS 2', 'POS 3'],
    'Services': ['Service 1', 'Service 2', 'Service 3'],
    'Settings': ['Setting 1', 'Setting 2', 'Setting 3'],
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
           
           
              {selectedHeader && (
                <ul>
                  {submenuItems[selectedHeader].map((submenuItem) => (
                    <li key={submenuItem}>{submenuItem}</li>
                  ))}
                </ul>
              )}
            
          </div>

          <div className="dashboard-content">
         
            <p>Selected Header: {selectedHeader}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
