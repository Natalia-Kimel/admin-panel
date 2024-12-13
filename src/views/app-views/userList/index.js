import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

class UserList extends Component {
    state = {
        users: [],
        loading: true,
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, loading: false });
            })
            .catch(error => {
                message.error('Ошибка загрузки данных');
                this.setState({ loading: false });
            });
    }

    deleteUser = userId => {
        this.setState(prevState => ({
            users: prevState.users.filter(item => item.id !== userId),
        }));
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };

    editProfile = userId => {
        this.props.history.push(`${APP_PREFIX_PATH}/edit-profile/${userId}`); 
    };

    render() {
        const { users, loading } = this.state;

        const tableColumns = [
            {
                title: 'User ',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus name={record.name} subTitle={record.email} />
                    </div>
                ),
            },
            {
                title: 'Address',
                dataIndex: 'address',
                render: address => (
                    <span>{`${address.street}, ${address.suite}, ${address.city}`}</span>
                ),
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                render: phone => (
                    <span>{`${phone}`}</span>
                ),
            },
            {
                title: 'Actions',
                render: (_, record) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button
                                type="primary"
                                icon={<EyeOutlined />}
                                onClick={() => this.editProfile(record.id)}
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => this.deleteUser(record.id)}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <Card bodyStyle={{ padding: 0 }}>
                {loading ? (
                    <Spin />
                ) : (
                    <Table
                        columns={tableColumns}
                        dataSource={users}
                        rowKey="id"
                    />
                )}
            </Card>
        );
    }
}

export default withRouter(UserList);