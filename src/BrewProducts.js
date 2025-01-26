import React, { useState } from 'react';
import './BrewProducts.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BrewProducts = () => {
    // const [display, setDisplay] = useState(true);
    // const [width, setWidth] = useState(1250);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        
        <div className='brew-products'>
            <h2>WHAT'S BREWING</h2>
            <Slider {...settings}>
                <div className="card" style={{width: '13rem'}}>
                    <img src='https://asset.menu.starbucks.co.jp/public/sku_images/4524785584440/4524785584440_1_s.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_gift_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            <div className="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/23fall2_seasonal_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                
                <div classna="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_name-engraving_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_hellocoffee_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter1_Win2MD_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Win2_OSLIVE.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{width: '13rem'}}>
                    <img src='https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter1_reserveWB_wb.jpg' class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>              
            </Slider>
            

                        
 
                
                
            </div>
    );
};

export default BrewProducts;