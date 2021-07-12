import React, { useState } from 'react';
import { Alert } from 'antd';
import styles from './UpAlert.css';
import CodeText from './CodeText';

const UpAlert = (props) => {

    const textInfo = ` <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />`;

    return (
        <div className={styles.alertList}>
            <h1>Alert警告提示</h1>
            <p>警告提示，展现需要关注的信息。</p>
            <h2>何时使用</h2>
            <ul>
                <li>当某个页面需要向用户显示警告的信息时。</li>
                <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
            </ul>
            <div className={styles.component}>
                <Alert message="Success Text" className={styles.alertMar} type="success" />
                <Alert message="Info Text" className={styles.alertMar} type="info" />
                <Alert message="Warning Text" className={styles.alertMar} type="warning" />
                <Alert message="Error Text" className={styles.alertMar} type="error" />
                <h4>基本</h4>
                <p>最简单的用法，适用于简短的警告提示。</p>
                <p>共有四种样式 success、info、warning、error。</p>
                <CodeText text={textInfo} />
            </div>
        </div>
    )
};

export default UpAlert;