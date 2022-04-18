import React,{useEffect} from 'react'
import classes from './drawer.module.css'
import { Divider, Space, Button, Row, Col } from 'antd'
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useLayout } from '../../providers/layout-provider'
import Link from 'next/link';
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, addToCart, subtractQuantity } from '../../redux/actions/cartAction';

export default function CartDrawer({ handleCartBar }) {

    const cartItems = useSelector(state => state.cart)
    const [isMobileScreen] = useLayout()
    const dispatch = useDispatch();

    let total = 0;

    cartItems.map(item => {
        total += item.Quantity * item.selling_price;
    });
 
    return (
        <>
            <div style={isMobileScreen ? { width: '300px' } : { width: '370px' }} className={classes.cartdrawer}>
                <h5 className='p-3 text-center shadow'>Shopping Cart</h5>
                {cartItems?.map((val) => {

                    return (
                        <Row className='p-3'>
                            <Col span={8}>
                                {val.image &&
                                    <Image width='100' height='100' style={{ objectFit: 'cover' }} src={val.image} alt='pic' />
                                }
                            </Col>
                            <Col span={16}>
                                <div className='p-2'>
                                    <p style={{ marginBottom: 0 }}>{val.name}</p>
                                    <strong style={{ marginBottom: 0 }}>{val.selling_price}</strong>
                                    <Row>
                                        <Col span={16}>
                                            <div className={classes.anticon} style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', border: '2px solid black', borderRadius: '20px', height: '32px' }}>
                                                <p onClick={() => val.Quantity > 1 && dispatch(subtractQuantity(val))}><MinusOutlined /></p>
                                                <p>{val.Quantity}</p>
                                                <p onClick={() => { dispatch(addToCart(val)) }} ><PlusOutlined /></p>
                                            </div>
                                        </Col>
                                        <Col span={6}><DeleteOutlined onClick={() => { dispatch(removeItem(val)) }} className={classes.deleteicon} /></Col>
                                    </Row>
                                </div>
                            </Col>
                            < Divider style={{ margin: '0' }} />
                        </Row>
                    )
                })}
                <div style={{ position: 'fixed', bottom: 0, width: isMobileScreen ? '300px' : '370px', zIndex: 10, padding: '10px', background: 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h5>SubTotal</h5>
                        <p>Rs. {total}</p>
                    </div>
                    <Link href='/checkout' >
                        <a onClick={() => handleCartBar()} className='btn btn-danger' style={{ width: '100%' }} >Checkout</a >
                    </Link>
                </div>
            </div>


        </>

    )
}