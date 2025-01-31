import './App.css';
import BrewProducts from './BrewProducts';
import OnlineStore from './OnlineStore';
import { useEffect, useState } from 'react';
import Dropdown from './common/Dropdown';
import Stories from './Stories';
import Notification from './Notification';
import Footer from './Footer';
import MainMenuBar from './common/MainMenuBar';

interface MainImage {
  lgUrl: string;
  smUrl: string;
  currentUrl: string | null;
}

function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const handleMenuClick = (menu: string): void => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const [mainImgUrl, setMainImgUrl] = useState<MainImage[]>([
    {
      lgUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250124_0600_a_pc.jpg",
      smUrl: "https://www.starbucks.co.jp/resource/kv/images/kv_250124_0600_a_sp.jpg",
      currentUrl: null,
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

  const updateImage = (): void => {
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
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="App">
      <MainMenuBar handleMenuClick={handleMenuClick}/>
      <Dropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <div className='banner'>
        {mainImgUrl.map((image, i) => (
          <a key={i} className={`banner-img${i+1}`}>
            <img src={image.currentUrl || ""} alt={`banner-img${i+1}`} />
          </a>
        ))}
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