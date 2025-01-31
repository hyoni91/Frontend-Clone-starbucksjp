import React from 'react';
import './Notification.css';

interface NotificationItem {
    date: string;
    content: string;
    hasRegisterMark?: boolean;
}

const Notification: React.FC = () => {
    const notifications: NotificationItem[] = [
        {
            date: '25.01.27',
            content: 'スターバックス ジャパン公式モバイルアプリ 最新バージョン(5.4.5)へのアップデートのお願い'
        },
        {
            date: '25.01.27',
            content: 'スターバックス ジャパン公式モバイルアプリ 最新バージョン(5.4.5)へのアップデートのお願い'
        },
        {
            date: '25.01.27',
            content: 'スターバックス ジャパン公式モバイルアプリ 最新バージョン(5.4.5)へのアップデートのお願い'
        }
    ];

    const pressReleases: NotificationItem[] = [
        {
            date: '25.01.27',
            content: 'プリンチ人気の直焼きフォカッチャから本場イタリアの味わいにこだわった新商品が登場。初登場となるチーズがとろけるホットサンドやピッツァが2月1日より発売開始',
            hasRegisterMark: true
        },
        {
            date: '25.01.27',
            content: 'プリンチ人気の直焼きフォカッチャから本場イタリアの味わいにこだわった新商品が登場。初登場となるチーズがとろけるホットサンドやピッツァが2月1日より発売開始',
            hasRegisterMark: true
        },
        {
            date: '25.01.27',
            content: 'プリンチ人気の直焼きフォカッチャから本場イタリアの味わいにこだわった新商品が登場。初登場となるチーズがとろけるホットサンドやピッツァが2月1日より発売開始',
            hasRegisterMark: true
        }
    ];

    return (
        <div className='notificaion'>
            <div className='noti-div'>
                <h2>重要なお知らせ</h2>
                {notifications.map((item, index) => (
                    <a key={index} className='noti-a-tag'>
                        <div className='noti-div-flex'>
                            <div className='noti-flex-right'>{item.date}</div>
                            <div className='noti-flex-left'>{item.content}</div>
                        </div>
                    </a>
                ))}
                <div className='noti-link'>
                    <a className='noti-link-a-tag'>
                        一覧へ
                    </a>
                </div>
            </div>
            <div className='noti-div'>
                <h2>PRESS RELEASE</h2>
                {pressReleases.map((item, index) => (
                    <a key={index} className='noti-a-tag'>
                        <div className='noti-div-flex'>
                            <div className='noti-flex-right'>{item.date}</div>
                            <div className='noti-flex-left'>
                                {item.hasRegisterMark && <span id='r-icon'>®</span>}
                                {item.content}
                            </div>
                        </div>
                    </a>
                ))}
                <div className='noti-link'>
                    <a className='noti-link-a-tag'>
                        一覧へ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Notification; 