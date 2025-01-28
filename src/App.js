import logo from './logo.svg';
import './App.css';
import BrewProducts from './BrewProducts';
import OnlineStore from './OnlineStore';
import { useEffect, useState } from 'react';

function App() {
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
    updateImage(); // 처음 렌더링 시 이미지 업데이트
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage); // 리스너 제거
  }, []); // 빈 배열로 초기화 시 1회 실행


  return (
    <div className="App">
      <div className='header'>
        <span>
          <img url='/images/logo.svg' />
        </span>
        <div className='navi-bar'>
          <ul className='navi-bar-menu-wrap'>
            <li>
              <button>メニュー</button>
            </li>
            <li>
              <button>サービス</button>
            </li>
            <li>
              <button>リワード</button>
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
              <li><a>starbuck Stories</a></li>
              <li><a>starbuck reverse</a></li>
            </ul>
          </div>
        </div>
      </div>
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
      <div>Starbucks stories</div>
      <div>osirase</div>
      <div>footer</div>
    </div>
  );
}

export default App;
