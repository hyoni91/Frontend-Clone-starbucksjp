import React from 'react';

interface DropdownProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ activeMenu }) => {
    return (
        <div>
            {activeMenu === 'menu' && (
                <div className='dropDown'>
                    <h2>menu</h2>
                </div>
            )}
            {activeMenu === 'service' && (
                <div className='dropDown'>
                    <h2>service</h2>
                </div>
            )}
            {activeMenu === 'reward' && (
                <div className='dropDown'>
                    <h2>reward</h2>
                </div>
            )}
            {activeMenu === 'search' && (
                <div className='dropDown'>
                    <h2>search</h2>
                </div>
            )}
        </div>
    );
};

export default Dropdown; 