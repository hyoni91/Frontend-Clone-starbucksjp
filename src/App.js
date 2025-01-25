import logo from './logo.svg';
import './App.css';
import BrewProducts from './BrewProducts';

function App() {
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
              <li><button><i class="bi bi-search"></i></button></li>
              <li><button><i class="bi bi-geo-alt-fill"></i></button></li>
              <li><button><i class="bi bi-person-circle"></i></button></li>
              <li><button><i class="bi bi-cart-fill"></i></button></li>
            </ul>
            <ul className='right-menu2'>
              <li><a>starbuck Stories</a></li>
              <li><a>starbuck reverse</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='banner'>
        <a className='banner-img1'><img></img></a>
        <a className='banner-img2'><img></img></a>
        <a className='banner-img3'><img></img></a>
      </div>
      <BrewProducts />
      <div>ONLINE STORE</div>
      <div>Starbucks stories</div>
      <div>osirase</div>
      <div>footer</div>
    </div>
  );
}

export default App;
