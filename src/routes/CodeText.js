import React, { useState, useEffect } from 'react';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import $ from 'jquery';

const CodeText = (props) => {

    const [codeState, setCodeState] = useState(false);

    const setHeight = (element) => {
        $(element).css({ 'height': 'auto', 'overflow-y': 'hidden' }).height(element.scrollHeight);
    }
    useEffect(() => {
        $('textarea').each(function () {
            setHeight(this);
        }).on('input', function () {
            setHeight(this);
        });

    }, [codeState]);
    return (
        <div>
            <div style={{ float: 'right' }}>
                {
                    !codeState ?
                        <PlusSquareOutlined title='展开代码' onClick={() => setCodeState(true)} /> :
                        <MinusSquareOutlined title='收起代码' onClick={() => setCodeState(false)} />
                }
            </div>
            <div>
                {codeState ?
                    <textarea value={props.text}></textarea> : ''
                }
            </div>

        </div>
    )
};

export default CodeText;