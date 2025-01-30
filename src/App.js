import logo from './logo.svg';
import './App.css';
import BrewProducts from './BrewProducts';
import OnlineStore from './OnlineStore';
import { useEffect, useState } from 'react';
import Dropdown from './common/Dropdown';
import Stories from './Stories';
import Notification from './Notification';
import Footer from './Footer';
import MainMenuBar from './common/MainMenuBar';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); //메뉴 활성화 또는 비활성화
  };


  const [mainImgUrl, setMainImgUrl] = useState([
    {
      lgUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250124_0600_a_pc.jpg",
      smUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250124_0600_a_sp.jpg",
      currentUrl: null, // 현재 이미지 URL 저장
    },
    {
      lgUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250115_0600_b_pc.jpg",
      smUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250115_0600_b_sp.jpg",
      currentUrl: null,
    },
    {
      lgUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250115_0600_c_pc.jpg",
      smUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250115_0600_c_sp.jpg",
      currentUrl: null,
    },
  ]);

  const updateImage = () => {
    const width = window.innerWidth;
    const updatedUrls = mainImgUrl.map((img) => ({
      ...img,
      currentUrl: width <= 1023 ? img.smUrl : img.lgUrl,
    }));

    setMainImgUrl(updatedUrls); 
  };

  useEffect(() => {
    updateImage(); 
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage); // 리스너 제거
  }, []); // 빈 배열로 초기화 시 1회 실행


  return (
    <div className="App">
      <MainMenuBar handleMenuClick={handleMenuClick}/>
      {/* <div className='header'>
        <span>
          <img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo.svg' />
        </span>
        <div className='navi-bar'>
          <ul className='navi-bar-menu-wrap'>
            <li>
              <button type='button' onClick={()=>{handleMenuClick('menu')}}>メニュー</button>
            </li>
            <li>
              <button type='button' onClick={()=>{handleMenuClick('service')}}>サービス</button>
            </li>
            <li>
              <button type='button' onClick={()=>{handleMenuClick('reward')}}>リワード</button>
            </li>
          </ul>
          <div className='navi-bar-right-wrap'>
            <ul className='right-menu1'>
              <li><button><i className="bi bi-search"></i></button></li>
              <li><button><i className="bi bi-geo-alt-fill"></i></button></li>
              <li><button><i className="bi bi-person-circle"></i></button></li>
              <li><button><i className="bi bi-cart-fill"></i></button></li>
            </ul>
            <ul className='right-menu2'>
              <li><a><img src='https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo_stories.svg'/></a></li>
              <li><a><img src='	https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo_reserve.svg'/></a></li>
            </ul>
          </div>
        </div>
      </div> */}
         <Dropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <div className='banner'>
        {
          mainImgUrl.map((image, i)=>{
            return(
              <a key={i} className={`banner-img${i+1}`}>
                <img src={image.currentUrl} alt={`banner-img${i+1}`} />
              </a>
            )
          })
        }
      </div>
      <BrewProducts />
      <div className='line-grey' />
      <OnlineStore />
      <div className='line-grey' />
      <Stories />
      <div className='line-grey' />
      <Notification />
      <div className='line-grey' />
      <Footer />
    </div>
  );
}

export default App;
