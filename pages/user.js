import { Divider, Space, Row, Col, Input, Typography, Card, Tabs, Button, Table, Form, Collapse, Breadcrumb, Select, List } from "antd"
import { Router } from "next/router"
import ajaxService from "../services/ajax-service"
import classes from '../styles/App.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { cityData } from "../components/cityData";
import { useLayout } from "../providers/layout-provider";
const { TabPane } = Tabs
const { Title } = Typography
const { Panel } = Collapse
const { Option } = Select

export default function User() {
    const [orders, setOrders] = useState([]);
    const [activeTab, setActiveTab] = useState('2');
    const [userForm] = Form.useForm();
    const [addressForm] = Form.useForm();
    const [changePassForm] = Form.useForm();
    const auth = useSelector(state => state.auth);
    const [isMobileScreen] = useLayout();
    const router = useRouter();

    useEffect(() => {
        if (auth.token !== null) {
            let getUser = async () => {
                let response = await ajaxService.get('user');
                userForm.setFieldsValue({ ...response });
                addressForm.setFieldsValue({ ...response });
            }
            getUser();

            let getOrders = async () => {
                let response = await ajaxService.get('orders');
                setOrders([...response]);
            }
            getOrders();

        } else {
            router.push({ pathname: '/' })
        }
    }, [])

    const columns = [

        {   
            title: 'Order Number',
            dataIndex: 'order_number',
            key: 'order_number',
        },
        {
            title: 'Placed On',
            dataIndex: 'date',
            key: 'date',

        },
        {
            title: 'Customer',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <>
                    <span>{record.name}</span><br />
                    <span>{record.email}</span><br />
                    <span>{record.phone}</span>
                </>
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',


        },
        {
            title: 'Shipping Address',
            dataIndex: 'shipping_address',
            key: 'shipping_address',
        },
        {
            title: 'Payment Method',
            dataIndex: 'payment_method',
            key: 'payment_method',
        },
        
    ];
    const orderColumns = [
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',

        },
        {
            title: 'Selling Price',
            dataIndex: 'selling_price',
            key: 'selling_price',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',

        }

    ];

    const openNotification = message => {
        notification.info({
            message: `Success`,
            description: message,
            placement: 'bottomCenter'
        });
    };

    const onUserFinish = async (values) => {
        //console.log(values)
    }
    const onAddressFinish = async (values) => {
        //console.log(values)
    }
    const onPassChange = async (values) => {
        //console.log(values)
    }
    const renderAcountDetail = () => {
        return (
            <div className=" px-3 bg-white">

                <Title level={4}>User Details</Title>
                <Divider />
                <Form
                    layout='vertical'
                    form={userForm}
                    name="control-hooks"
                    onFinish={onUserFinish}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} lg={12}>
                            <Form.Item label='Name' name='name' rules={[
                                {
                                    required: true,
                                    message: 'Name field is required',
                                },
                            ]} >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item label='Email' name='email' >
                                <Input disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className={classes.name} gutter={[16, 16]}>
                        <Col xs={24} lg={12}>
                            <Form.Item label='Phone' name='phone' rules={[
                                {
                                    required: true,
                                    message: 'Phone field is required',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} lg={12}>
                            <Form.Item label='City' name='city' rules={[
                                {
                                    required: true,
                                    message: 'City field is required',
                                },
                            ]}>
                                <Select>
                                    {
                                        cityData.map(city => <Option value={city.value}>{city.Title}</Option>)
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item className="p-2">
                        <Button style={{ float: 'right', margin: '10px 0px' }} danger htmlType="submit" type="primary">Update</Button>
                    </Form.Item>
                </Form>
                <Divider />
                <Form
                    layout='vertical'
                    form={addressForm}
                    name="control-hooks"
                    onFinish={onAddressFinish}
                >
                    <Title level={4}>Address Book</Title>
                    <Divider />
                    <Row className={classes.name} gutter={[16, 16]}>
                        <Col span={24}>
                            <Form.Item label='Billing Address' name='billing_address' rules={[
                                {
                                    required: true,
                                    message: 'Billing Address field is required',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label='Delivery Address' name='shipping_address' rules={[
                                {
                                    required: true,
                                    message: 'Delivery Address field is required',
                                },
                            ]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button style={{ float: 'right', margin: '10px 0px' }}  danger htmlType="submit" type="primary">Change Address</Button>
                    <Divider />
                </Form>
                <Form
                    layout='vertical'
                    form={changePassForm}
                    name="control-hooks"
                    onFinish={onPassChange}
                // onFinishFailed={onLoginFinishFailed}
                >
                    <Title level={4}>Change Password</Title>
                    <Divider />
                    <Row className={classes.name} gutter={[16, 16]}>
                        <Col xs={24} lg={8}>
                            <Form.Item label='Old Password' name='old_password' rules={[
                                {
                                    required: true,
                                    message: 'Old password field is required',
                                },
                            ]}>
                                <Input type="password" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>

                            <Form.Item label='New Password' name='new_password' rules={[
                                {
                                    required: true,
                                    message: 'New Password field is required',
                                },
                            ]}>
                                <Input type="password" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Form.Item label='Confirm Password' name='new_password_confirmation' rules={[
                                {
                                    required: true,
                                    message: 'Confirm Password field is required',
                                },
                            ]}>
                                <Input type="password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button style={{ float: 'right', margin: '10px 0px' }}  danger
                     htmlType="submit" type="primary">Change My Password</Button>
                    <Divider />
                </Form>

            </div >
        )
    }
    //     const isMobileOrder = () => {
    //         return (

    //         )
    // }


    return (
        <main>
            <div className="py-3">
                <div className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">User</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='bg-white mt-3 py-3' >

                    <Tabs tabPosition={!isMobileScreen ? 'left' : 'top'} centered size="large">
                        <TabPane tab="Account Detail" key="1">
                            {renderAcountDetail()}
                        </TabPane>
                        <TabPane tab="My Order" key="2" forceRender={true}>
                            <div className="py-1 px-3 bg-white">
                                {isMobileScreen
                                    ?
                                    <>
                                        {orders.map(order => {
                                            return (
                                                <div className="mb-4">
                                                    <Card >
                                                        <List >
                                                            <List.Item className="p-2">
                                                                <div>Order Number</div>
                                                                <div>{order.order_number}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>Placed On</div>
                                                                <div>{order.date}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>Customer</div>
                                                                <div>{order.name}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>Status</div>
                                                                <div>{order.status}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>Shipping Address</div>
                                                                <div>{order.shipping_address}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>payment Method</div>
                                                                <div>{order.payment_method}</div>
                                                            </List.Item>
                                                            <List.Item className="p-2">
                                                                <div>Total</div>
                                                                <div>{order.total}</div>
                                                            </List.Item>

                                                        </List>
                                                    </Card>
                                                    <Collapse defaultActiveKey={['0']} >
                                                        <Panel header="View Order Details" key="1">
                                                            {order.order_items.map(item => {
                                                                return (
                                                                    <Card className="my-3" >
                                                                        <List >
                                                                            <List.Item className="p-2">
                                                                                <div>Item</div>
                                                                                <div>{item.product_name} </div>
                                                                            </List.Item>
                                                                            <List.Item className="p-2">
                                                                                <div>Price</div>
                                                                                <div>{item.selling_price}</div>
                                                                            </List.Item>
                                                                            <List.Item className="p-2">
                                                                                <div>Qty</div>
                                                                                <div>{item.quantity}</div>
                                                                            </List.Item>
                                                                            <List.Item className="p-2">
                                                                                <div>Total</div>
                                                                                <div>{item.total}</div>
                                                                            </List.Item>

                                                                        </List>
                                                                    </Card>
                                                                )
                                                            })}
                                                        </Panel>
                                                    </Collapse>
                                                    <Divider />
                                                </div>

                                            )
                                        })}
                                    </>
                                    :
                                    <Table
                                        columns={columns}
                                        expandable={{
                                            expandedRowRender: items =>
                                                <div>
                                                    <Table
                                                        columns={orderColumns}
                                                        dataSource={items.order_items}
                                                    />
                                                </div>
                                        }}
                                        dataSource={orders}
                                    />
                                }
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </main>
    )
}
