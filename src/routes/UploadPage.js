import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Table, Tag, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const columns = [
        {
            title: '组件名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: '组件版本',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '组件地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '上传时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'UpButton',
            age: 1,
            address: 'http://123.345.456:11000/UpComponent/UpButton/index.html',
            createTime: '2021-08-10',
        },
        {
            key: '2',
            name: 'UpAlert',
            age: 1.1,
            address: 'http://123.345.456:11000/UpComponent/UpAlert/index.html',
            createTime: '2021-08-10',
        },
        {
            key: '3',
            name: 'UpInput',
            age: 1,
            address: 'http://123.345.456:11000/UpComponent/UpInput/index.html',
            createTime: '2021-08-10',
        },
    ];



    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div>
            <h1>组件上传页面</h1>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}

                >
                    <Form.Item
                        label="组件名称"
                        name="username"
                        rules={[{ required: true, message: '请输入组件名称' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                        <Button type="primary" htmlType="submit">
                            查询
                    </Button>
                    </Form.Item>
                </Form>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}

                >
                    <Form.Item
                        label="组件上传"
                        name="component"
                    >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                        <Button type="primary" htmlType="submit">
                            上传组件
                    </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <h2>组件上传列表</h2>
                <Table columns={columns} dataSource={data} pagination={false}/>
            </div>
        </div>
    )
};

export default UploadPage;