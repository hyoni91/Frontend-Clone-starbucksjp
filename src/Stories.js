import React, { useState } from 'react';
import './Stories.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Stories = () => {
    const [url, setUrl] = useState([
        {
            urlName : 'https://www.starbucks.co.jp/top/images/stories/biomass-straw.jpg',
            content : "スターバックスの緑のストローが帰ってきた。飲み心地が良く、地球にもポジティブに。"
        },
        {
            urlName:'	https://www.starbucks.co.jp/top/images/stories/tumbler_slogan3.jpg',
            content:"合言葉は「タンブる」。スターバックスのタンブラー部のスローガンです。",
        },
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/hitachinakacoffeefestival2024.jpg',
            content:"コーヒーを通じて広がる地域とのあたたかな絆。ひたちなかで見つけた新たな役割",
        },
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/be_a_santa_donation_report_3.jpg',
            content:"一人ひとりが、誰かのサンタ。地域の笑顔が集う「Be a Santa ドネーション」プログラムのご報告",
        }, 
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/family_friendly_store.jpg',
            content:"「子どもも家族も楽しい」を叶える、スターバックスの新しいかたち。HIROBA -ひろば-の魅力とは？",
        }, 
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/tumbler_summit.png',
            content:"タンブラー部「学生サミット」！使い捨てない未来を考えてみた！",
        }, 
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/store_design_and_careers.jpeg',
            content:"地域に溶け込むスターバックスの店舗づくり。東急歌舞伎町タワー店ができ上がるまで。",
        }, 
        {
            urlName:'https://www.starbucks.co.jp/top/images/stories/kawachinagano202411.jpg',
            content:"店舗の植栽を“小さなまちの森”に…。鎮守の森から譲り受けた実生苗",
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
        <div className='stories'>
            <div className='stories-header'>
                <img src='https://www.starbucks.co.jp/top/images/STORIES%20logo.png' alt='stories.logo'/>
                <a className='stories-link'>
                一覧へ <span> <i className="bi bi-box-arrow-up-right" /></span>
                </a>
            </div>
            <Slider {...settings} className='stories-slider-wrap'>
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
        </div>
    );
};

export default Stories;