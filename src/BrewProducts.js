import React, { useState } from 'react';
import './BrewProducts.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BrewProducts = () => {

    const [url, setUrl] = useState([
        {
            urlName : 'https://asset.menu.starbucks.co.jp/public/sku_images/4524785584440/4524785584440_1_s.jpg',
            content : "[新商品情報] ルビー ショコラ シンフォニー フラペチーノ®\n\n2025.01.24"
        },
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/23fall2_seasonal_wb.jpg',
            content:'季節のおすすめ商品はこちら。',
        },
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_porter_wb.jpg',
            content:'弾。2つのクラフトマンシップが再び出会い、こだわり溢れるアイテムが登場します。',
        },
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_egift_wb.jpg',
            content:"[Enjoy Valentines Days eGift バレンタインまでの毎日、大切な人にeGiftを贈って楽しみませんか。",
        }, 
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_cafe_wb.jpg',
            content:'[新商品情報] クラシック ショコラ シンフォニー フラペチーノ®',
        }, 
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_gift_wb.jpg',
            content:'[バレンタインギフト特集] 選ぶ時間も渡す瞬間もずっとワクワクが続く、スターバックスのバレンタインギフトをお楽しみください。',
        }, 
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_name-engraving_wb.jpg',
            content:'あなたの気持ちを刻印メッセージで届ける、オンリーワンのバレンタインデーギフトを贈りませんか。',
        }, 
        {
            urlName:'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_hellocoffee_wb.jpg',
            content:'コアコーヒー4種類に100gサイズのコーヒー(粉)が登場',
        }, 
    ])

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        // centerMode: true, // 슬라이더 카드 간 여백 활성화
        startPadding: "10px", // 카드 간 간격 설정
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
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
            <Slider {...settings} className='brew-slider-wrap'>
                {
                    url.map((url,i)=>{
                        return(
                            <div className="card" key={i} >
                                <img src={url.urlName} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{url.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </Slider>   
            <div className='brew-banner-div'>
                <div>
                    <img src='https://www.starbucks.co.jp/top/images/info/img-bottom-1.jpg' alt='mini-banner1'/>
                    <div>いつもの一杯を、キャッシュレスで</div>
                </div>
                <div>
                    <img src='https://www.starbucks.co.jp/top/images/info/img-bottom-4.jpg' alt='mini-banner2'/>
                    <div>[アルバイト情報] あなたもバリスタとして働いてみませんか</div>
                </div>
            </div>             
            </div>
    );
};

export default BrewProducts;