import React, { useState } from 'react';
import './OnlineStore.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OnlineStore = () => {
    const [onlineContent, setOnlineContent] = useState([
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785573376/4524785573376_1_s.jpg',
            content:"バレンタイン2025ステンレスボトル473ml",
            price:5450
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785492615/4524785492615_1_s.jpg',
            content:"カフェ ベロナ®",
            price:1440

        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785583542/4524785583542_1_s.jpg',
            content:"バレンタイン2025ベアリスタメッセージギフト",
            price:1650

        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785574410/4524785574410_1_s.jpg',
            content:"バレンタイン2025マグハート355ml",
            price:3050
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785575103/4524785575103_1_s.jpg',
            content:"スターバックス ライトノート ブレンド® (100g / 粉)",
            price:670
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785583559/4524785583559_1_s.jpg',
            content:"バレンタイン2025ビバレッジカードキャット",
            price:750
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785574335/4524785574335_1_s.jpg',
            content:"ステンレスロゴボトルグラデーションブルーピンク473ml",
            price:5450
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785575110/4524785575110_1_s.jpg',
            content:"パイクプレイス® ロースト (100g / 粉)",
            price:670
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785584808/4524785584808_1_s.jpg',
            content:"ビバレッジギフトミニカードHappy Birthday",
            price:550
        },
        {
            url:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785572355/4524785572355_1_s.jpg',
            content:"コップ付ボトルオコジョ500ml",
            price:3350
        },
        
    ])

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        // centerMode: true, 
        // centerPadding: "2px", 
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 9,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className='online-store'>
            <div className='online-store-head'>
                <h2>ONLINE STORE</h2>
                <h4> 5,000円（税抜）以上お買い上げで送料無料 </h4>
            </div>
            <div className='online-store-content'>
                <Slider {...settings}>
                    {
                        onlineContent.map((content,i)=>{
                            return(
                                <div key={i} className="card" >
                                    <img src={content.url} className="card-img-top" alt={content.content} />
                                    <div className="card-body">
                                        <p className="card-text">{content.content}</p>
                                        <p className='card-price'>￥{content.price.toLocaleString()}</p>
                                        <button className='online-store-btn' >カートに入れる</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default OnlineStore;