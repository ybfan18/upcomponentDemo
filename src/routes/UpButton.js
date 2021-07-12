import React from 'react';
import { Button } from 'antd';
import CodeText from './CodeText';
import styles from './UpAlert.css';

const UpButton = (props) => {
    const textInfo = `<Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>`;
    return (
        <div className={styles.alertList}>
            <h1>Button按钮</h1>
            <p>按钮用于开始一个即时操作。</p>
            <h2>何时使用</h2>
            <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
            在 Ant Design 中我们提供了五种按钮。</p>
            <ul>
                <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
                <li>默认按钮：用于没有主次之分的一组行动点。</li>
                <li>虚线按钮：常用于添加操作。</li>
                <li>文本按钮：用于最次级的行动点。</li>
                <li>链接按钮：用于作为外链的行动点。</li>
            </ul>
            <p>以及四种状态属性与上面配合使用。</p>
            <ul>
                <li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li>
                <li>幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</li>
                <li>禁用：行动点不可用的时候，一般需要文案解释。</li>
                <li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li>
            </ul>
            <h2>代码演示</h2>
            <div className={styles.component}>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <h4>按钮类型</h4>
                <p>
                    按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p>
                <CodeText text={textInfo} />
            </div>
            <div></div>
        </div>
    )
};

export default UpButton;