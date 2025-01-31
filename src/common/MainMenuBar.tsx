import React, { useEffect, useState } from 'react';

interface MainMenuBarProps {
  handleMenuClick: (menu: string) => void;
}

const MainMenuBar: React.FC<MainMenuBarProps> = ({ handleMenuClick }) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = (): void => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {windowWidth <= 1023 ? (
                <div className='header'>
                    <span>
                        <img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo.svg' alt="logo" />
                    </span>
                    <div className='navi-bar'>
                        <ul className='navi-bar-menu-wrap'>
                        </ul>
                        <div className='navi-bar-right-wrap'>
                            <ul className='right-menu1'>
                                <li><button><i className="bi bi-search"></i></button></li>
                                <li><button><i className="bi bi-cart-fill"></i></button></li>
                                <li><button><i className="bi bi-list" /></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='header'>
                    <span>
                        <img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo.svg' alt="logo" />
                    </span>
                    <div className='navi-bar'>
                        <ul className='navi-bar-menu-wrap'>
                            <li>
                                <button type='button' onClick={() => handleMenuClick('menu')}>メニュー</button>
                            </li>
                            <li>
                                <button type='button' onClick={() => handleMenuClick('service')}>サービス</button>
                            </li>
                            <li>
                                <button type='button' onClick={() => handleMenuClick('reward')}>リワード</button>
                            </li>
                        </ul>
                        <div className='navi-bar-right-wrap'>
                            <ul className='right-menu1'>
                                <li><button type='button' onClick={() => handleMenuClick('search')}><i className="bi bi-search"></i></button></li>
                                <li><button><i className="bi bi-geo-alt-fill"></i></button></li>
                                <li><button><i className="bi bi-person-circle"></i></button></li>
                                <li><button><i className="bi bi-cart-fill"></i></button></li>
                            </ul>
                            <ul className='right-menu2'>
                                <li><a><img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo_stories.svg' alt="stories" /></a></li>
                                <li><a><img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo_reserve.svg' alt="reserve" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MainMenuBar; 