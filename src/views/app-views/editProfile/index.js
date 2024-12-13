import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export class EditProfile extends Component {
    state = {
        name: '',
        email: '',
        userName: '',
        phoneNumber: '',
        website: '',
        address: '',
        city: '',
        avatarUrl: '',
        loading: true,
    };

    componentDidMount() {
        const { match } = this.props;
        const { userId } = match.params;

		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    name: data.name,
                    email: data.email,
                    userName: data.username,
                    phoneNumber: data.phone,
                    website: data.website,
                    address: data.address.street,
                    city: data.address.city,
                    loading: false,
                });
            })
            .catch(error => {
                message.error('Ошибка загрузки данных пользователя');
                this.setState({ loading: false });
            });
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

	handleSaveChanges = values => {
        const key = 'updatable';
        message.loading({ content: 'Saving changes...', key });

        setTimeout(() => {
            message.success({ content: 'Changes saved!', key, duration: 2 });

            this.props.history.push(`${APP_PREFIX_PATH}/users/user-list`);
        }, 2000);
    };

    render() {
		const { loading, name, email, userName, phoneNumber, website, address, city, avatarUrl } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onUploadAvatar = info => {
            const key = 'updatable';
            if (info.file.status === 'uploading') {
                message.loading({ content: 'Uploading...', key, duration: 1000 });
                return;
            }
            if (info.file.status === 'done') {
                this.getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        avatarUrl: imageUrl,
                    }),
                );
                message.success({ content: 'Uploaded!', key, duration: 1.5 });
            }
        };

        const onRemoveAvatar = () => {
            this.setState({
                avatarUrl: ''
            });
        };

        return (
            <>
                <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
                    <div className="ml-md-3 mt-md-0 mt-3">
                        <Upload onChange={onUploadAvatar} showUploadList={false}>
                            <Button type="primary">Change Avatar</Button>
                        </Upload>
                        <Button className="ml-2" onClick={onRemoveAvatar}>Remove</Button>
                    </div>
                </Flex>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={{
                            name: name,
                            email: email,
                            username: userName,
                            phoneNumber: phoneNumber,
                            website: website,
                            address: address,
                            city: city,
                        }}
                        onFinish={this.handleSaveChanges}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[{ required: true, message: 'Please input your name!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{ 
                                                required: true,
                                                type: 'email',
												message: 'Please enter a valid email!' 
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Address"
                                            name="address"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="City"
                                            name="city"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Changes
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        );
    }
}

export default EditProfile;