import classes from '../styles/Checkout.module.css'
import { Breadcrumb, Button, Col, Divider, Row, Input, Space, Select, Radio, Table, notification, Typography } from 'antd';
import Image from 'next/image';
import { SmileOutlined } from '@ant-design/icons'

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import ajaxService from '../services/ajax-service'

const { Text } = Typography

function Thankyou({ order_number }) {
    const router = useRouter();

    return (
        <main>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className='py-3' >
                <Row className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Order</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='bg-white mt-3 p-3' >
                    <Row gutter={[32, 32]}>
                        <Col xs={0} md={8}></Col>
                        <Col className={classes.name} xs={24} md={8}>
                            <div style={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height : '250px' }} >
                                <SmileOutlined style={{ fontSize: 128 }} />
                                <Text>Your order has been placed</Text>
                                <Button type="primary" danger onClick={() => router.push({ pathname: '/' })}>Start Over</Button>


                            </div>
                        </Col>
                        <Col xs={0} md={8}></Col>
                    </Row>
                </div>
            </div>
        </main>
    )
}
export default Thankyou


Thankyou.getInitialProps = ({ query: { order_number } }) => {
    return { order_number }
}