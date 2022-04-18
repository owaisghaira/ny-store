import React, { useState } from 'react';
import classes from '../styles/Checkout.module.css'
import { Breadcrumb, Button, Col, Divider, Row, Input, Space, Select, Radio, Table, notification, Form } from 'antd';
import Image from 'next/image';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, subtractQuantity, removeAllCartItems } from '../redux/actions/cartAction'
import { cityData } from '../components/cityData';
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import ajaxService from '../services/ajax-service'
const { Option } = Select;
const { TextArea } = Input

function Checkout({ data }) {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(state => state.auth);
    let { user } = auth;
    const [form] = Form.useForm();
    const [chargesWithin, setChargesWithin] = useState();
    const [chargesOutof, setChargesOutof] = useState();
    const [shipping, setShipping] = useState(0);


    let initialValues = {
        name: '',
        email: '',
        phone: '',
        city: '',
        billing_address: '',
        shipping_address: '',
        notes: '',
        shipping: shipping,
        payment_method: 'Cash On Delivery',
        cart: []
    };

    if (user !== null) {
        initialValues = { ...initialValues, ...user }
    }

    let subtotal = 0;
    let total = 0;

    cartItems.map(item => {
        subtotal += item.Quantity * item.selling_price
        total = subtotal + shipping
    });
    const discardCart = () => {
        dispatch(removeAllCartItems());
    }

    const onFinish = async (values) => {
        values.shipping = shipping
        values.cart = [...cartItems]

        let response = await ajaxService.post('checkout', values);

        // if (response !== undefined) {

        if (response) {
            discardCart();
            router.push({ pathname: '/thankyou', query: { order_number: response.order_number } })
        }
        // }

    };

    useEffect(() => {
        if (cartItems.length === 0) {
            // notification.open({
            //     message: 'Cart Removed',
            //     description: 'Your cart has been removed',
            //     placement: 'bottomCenter'
            // });
            router.push({ pathname: '/' })
        }
        if (data.shipping !== undefined) {
            setChargesWithin(data.shipping[0].charges_within);
            setChargesOutof(data.shipping[0].charges_outof);
        }
    }, [cartItems.length])

    return (
        <main>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className='py-3' >
                <Row className='p-3 border rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Checkout</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='border mt-3 p-3' >
                    <Form
                        layout={'vertical'}
                        form={form}
                        name="control-hooks"
                        initialValues={initialValues}
                        onFinish={onFinish}
                    //onFinishFailed={onLoginFinishFailed}
                    >
                        <Row gutter={[32, 32]}>
                            <Col className={classes.name} xs={24} md={8}>
                                <div style={{ borderRight: '1px solid lightGray', paddingRight: '15px', background: '#fff' }} >
                                    <h5>Billing / Shipping Address</h5>
                                    <Divider />
                                    <Form.Item name="name" label="Name" rules={[
                                        {
                                            required: true,
                                            message: 'Name field is required',
                                        },
                                    ]}>
                                        <Input placeholder='Name' />
                                    </Form.Item>
                                    <Form.Item name="email" label="Email" rules={[
                                        {
                                            required: false,
                                            type: 'email',
                                            message: 'Email field is required',
                                        },
                                    ]}>
                                        <Input placeholder='Email' />
                                    </Form.Item>
                                    <Row gutter={16}>
                                        <Col span={14}>
                                            <Form.Item name="phone" label="Phone" rules={[
                                                {
                                                    required: true,
                                                    message: 'Phone field is required',
                                                },
                                            ]}>
                                                <Input placeholder='Mobile Number' />
                                            </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                            <Form.Item name="city" label="City" rules={[
                                                {
                                                    required: true,
                                                    message: 'City is required',
                                                },
                                            ]}>
                                                <Select
                                                    onChange={(v) => v == 'KARACHI' ? setShipping(chargesWithin) : setShipping(chargesOutof)}>
                                                    {
                                                        cityData.map((city, key) => <Option key={key} value={city.Title}>{city.Title}</Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    {/* <Divider /> */}
                                    {/* <Form.Item name="billing_address" label="Billing Address" rules={[
                                        {
                                            required: true,
                                            message: 'Billing Address field is required',
                                        },
                                    ]}>
                                        <TextArea rows={4} placeholder='Address' />
                                    </Form.Item> */}
                                    <Form.Item name="shipping_address" label="Address" rules={[
                                        {
                                            required: true,
                                            message: 'Address field is required',
                                        },
                                    ]}>
                                        <TextArea rows={4} placeholder='Address' />
                                    </Form.Item>
                                    {/* <Form.Item name="shipping_charges" label="Shipping Charges" rules={[
                                        {
                                            required: true,
                                            message: 'Shipping Charges field is required',
                                        },
                                    ]}>
                                        <Select
                                            allowClear
                                            placeholder="Select City"
                                            optionFilterProp="children"
                                            onChange={(v) => setShipping(v)}
                                        >
                                            <Option value={chargesWithin}  >Karachi</Option>
                                            <Option value={chargesOutof}  >Out Of Karachi</Option>
                                        </Select>
                                    </Form.Item> */}
                                    <Form.Item name="notes" label="Other Instructions" >
                                        <TextArea rows={4} placeholder='Other instructions' />
                                    </Form.Item>
                                    <Divider />
                                    <h5>Payment Method</h5>
                                    <Form.Item name="payment_method" >
                                        <Radio.Group name="payment_method" defaultValue={'Cash On Delivery'}>
                                            <Space direction='vertical'>
                                                <Radio value='Cash On Delivery' >Cash On Delivery</Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>

                            </Col>
                            <Col xs={24} md={16}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <h5>REVIEW YOUR ORDER</h5>
                                    <Button style={{ float: 'right' }} danger type='primary' onClick={() => discardCart()}>Empty My Cart</Button>
                                </div>
                                <div style={{ border: '1px solid lightGray', padding: '15px', borderRadius: '5px', background: '#fff' }} >
                                    {cartItems?.map((val) => {

                                        return (
                                            <>
                                                <Row gutter={16}>
                                                    <Col md={4} xs={4} >
                                                        <Image width='100' height='100' style={{ objectFit: 'cover' }} src={val.image} alt='pic' />
                                                    </Col>
                                                    <Col md={8} xs={12}>
                                                        <p>{val.name}&nbsp; ( <strong >PKR:{val.selling_price}</strong>)</p>
                                                        <div className={classes.anticon} style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', border: '2px solid black', borderRadius: '20px', height: '32px', margin: 'auto' }}>
                                                            <p onClick={() => val.Quantity > 1 && dispatch(subtractQuantity(val))}><MinusOutlined /></p>
                                                            <p>{val.Quantity}</p>
                                                            <p onClick={() => { dispatch(addToCart(val)) }} ><PlusOutlined /></p>
                                                        </div>

                                                    </Col>
                                                    <Col md={8} xs={0}>

                                                    </Col>

                                                    <Col md={4} xs={8}  >
                                                        <strong style={{ float: 'right' }}>PKR:{val.selling_price * val.Quantity}</strong>
                                                    </Col>
                                                </Row>
                                                < Divider />
                                            </>

                                        )
                                    })}

                                    <div className={classes.flex}>
                                        <p>SubTotal</p>
                                        <p>{subtotal}</p>
                                    </div>
                                    <div className={classes.flex}>
                                        <p>Shipping Charges</p>
                                        <div>{shipping}</div>
                                    </div>
                                    <Divider style={{ margin: '5px' }} />
                                    <div className={classes.flex}>
                                        <p>Total</p>
                                        <p>{total}</p>
                                    </div>

                                </div>
                                <Button type='primary' htmlType="submit" size='large' danger style={{ float: 'right', margin: '15px 0' }}>Place Order</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </main>
    )
}
export default Checkout
export async function getStaticProps() {

    let data = {
        shipping: []
    };

    const response = await ajaxService.get(`home`);

    if (response !== undefined && response !== null) {
        data = response;
    }

    return { props: { data } }
}