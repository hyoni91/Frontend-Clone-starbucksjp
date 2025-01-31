// import React, { useState } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BrewProducts.css';

interface UrlItem {
    urlName: string;
    content: string;
}

const BrewProducts = () => {
    const [url] = useState<UrlItem[]>([
        {
            urlName: 'https://asset.menu.starbucks.co.jp/public/sku_images/4524785584440/4524785584440_1_s.jpg',
            content: "[新商品情報] ルビー ショコラ シンフォニー フラペチーノ®\n\n2025.01.24"
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/23fall2_seasonal_wb.jpg',
            content: '季節のおすすめ商品はこちら。',
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_porter_wb.jpg',
            content: '弾。2つのクラフトマンシップが再び出会い、こだわり溢れるアイテムが登場します。',
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_egift_wb.jpg',
            content: "[Enjoy Valentines Days eGift バレンタインまでの毎日、大切な人にeGiftを贈って楽しみませんか。",
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_cafe_wb.jpg',
            content: '[新商品情報] クラシック ショコラ シンフォニー フラペチーノ®',
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_gift_wb.jpg',
            content: '[バレンタインギフト特集] 選ぶ時間も渡す瞬間もずっとワクワクが続く、スターバックスのバレンタインギフトをお楽しみください。',
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_name-engraving_wb.jpg',
            content: 'あなたの気持ちを刻印メッセージで届ける、オンリーワンのバレンタインデーギフトを贈りませんか。',
        },
        {
            urlName: 'https://www.starbucks.co.jp/assets/images/web2/images/wb/images/25Winter2_hellocoffee_wb.jpg',
            content: 'コアコーヒー4種類に100gサイズのコーヒー(粉)が登場',
        },
    ]);

    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div className='brew-products'>
            <h2>WHAT'S BREWING</h2>
            <Slider {...settings} className='brew-slider-wrap'>
                {
                    url.map((urlItem, i) => (
                        <div className="card" key={i}>
                            <img src={urlItem.urlName} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{urlItem.content}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className='brew-banner-div'>
                <div>
                    <img src='https://www.starbucks.co.jp/top/images/info/img-bottom-1.jpg' alt='mini-banner1' />
                    <div>いつもの一杯を、キャッシュレスで</div>
                </div>
                <div>
                    <img src='https://www.starbucks.co.jp/top/images/info/img-bottom-4.jpg' alt='mini-banner2' />
                    <div>[アルバイト情報] あなたもバリスタとして働いてみませんか</div>
                </div>
            </div>
        </div>
    );
};

export default BrewProducts; 