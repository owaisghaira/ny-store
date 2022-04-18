import React, { useEffect } from "react";
import { Row, Col, Space, Menu, Divider } from 'antd';
import FooterLogo from '../public/images/Logo1.png'
import Logo from '../public/images/Logo1.png'
import Image from 'next/image';
import { useLayout } from "../providers/layout-provider";
import { FacebookOutlined, WhatsAppOutlined, InstagramOutlined, DownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import classes from '../styles/Header.module.css'
import Link from 'next/link';

function Footer({ categories = [] }) {
    const [isMobileScreen] = useLayout()

    useEffect(() => {
        // console.log("window.innerWidth", window.innerWidth);
    }, []);
    return (
        <>
            <div style={isMobileScreen ? { padding: '10px' } : { padding: '45px' }} >
                <Divider/>
                {isMobileScreen ?
                    <Row gutter={[16, 16]} >
                        <Col className='text-center' xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Link href="/">
                                <Image src={FooterLogo} height={120} width={150} />
                            </Link>
                            <div >
                                <Space size='large'>
                                    <a className="text-dark" href="https://www.facebook.com/nystore.pk" target="_blank">
                                        <FacebookOutlined />
                                    </a>
                                    <a className="text-dark" href="https://www.instagram.com/nystorekhi" target="_blank">
                                        <InstagramOutlined />
                                    </a>
                                    <a className="text-dark" href="tel:+923133636336">
                                        <WhatsAppOutlined />
                                    </a>
                                </Space>
                            </div>
                        </Col>
                    </Row> :

                    <Row gutter={[16, 16]} >
                        <Col className='text-center' xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Link href="/">
                                <Image src={FooterLogo} alt='logo' height={150} width={200} />
                            </Link>
                            <div className={classes.iconantd} >
                                <Space size='large'>
                                    <a className="text-dark" href="https://www.facebook.com/nystore.pk" target="_blank">
                                        <FacebookOutlined />
                                    </a>
                                    <a className="text-dark" href="https://www.instagram.com/nystorekhi" target="_blank">
                                        <InstagramOutlined />
                                    </a>
                                    <a className="text-dark" href="tel:+923133636336">
                                        <WhatsAppOutlined />
                                    </a>
                                </Space>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>CUSTOMER SERVICES</h5>
                            <ul style={{ textDecoration: 'none' }}>
                                <li className='bottom-link'  >
                                    <Link href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className='bottom-link'>
                                    <Link href="/terms-and-conditions">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li className='bottom-link'>
                                    <Link href="/return-policy">
                                        Return Policy
                                    </Link>
                                </li>
                                <li className='bottom-link'>
                                    <Link href="/about-us">
                                        About Us
                                    </Link>
                                </li>
                                <li className='bottom-link'  >
                                    <Link href={"/contact"}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>PRODUCT CATEGORIES</h5>
                            <ul style={{ textDecoration: 'none' }}>
                                {
                                    categories.map((category, index) => {
                                        return (
                                            <li className='bottom-link' key={'cats-' + index} >
                                                <Link href={"/products/" + category.slug}>
                                                    {category.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>OUR MISSION</h5>
                            <p>Our Mission is to fulfill Customers Shopping needs with Imported products through NY Store Online Shopping in Pakistan,<br /><br />
                                Retail, Corporate Network & We are always looking to improve our service to customers and this means listening to what our customers want.</p>
                        </Col>

                    </Row>
                }
                {/* <Divider />

                <Row gutter={8} className="text-center">
                    <Col span={8} >
                        <Image src={Genuine} width={80} height={80} />
                        <p>Genuine Products</p>
                    </Col>
                    <Col span={8} >
                        <Image src={safe} width={80} height={80} />
                        <p>Safe & Secure Payment</p>
                    </Col>
                    <Col span={8} >
                        <Image src={Return} width={80} height={80} />
                        <p>Free & Easy Return</p>
                    </Col>
                </Row> */}
                {/* <Divider style={{ padding: '0px', margin: '0px' }} /> */}
                {/* {!isMobileScreen &&

                    <div className="p-3">
                        <h2>Online Shopping Pakistan</h2>
                        <p>In today's modern world, Household Shopping can be an extreme sport when you are making a list to grab things from physical stores therefore we have brought you an online shopping Pakistan to save you from the endeavor of completing the shopping list.</p>
                        <p>Online shopping stores have become a necessity of our busy lives and we understand that when shopping for household stuff, the number of categories is as vast as the ocean and you have to walk a lot to grab different things from different stores, therefore, we have made that ocean available online for our customers to dive in and get their hands on their desired products! </p>
                        <p>We have all the quality household items available on our online shopping Pakistan store, from kitchen needs, self-care, mobile accessories, travel accessories, electronic kitchen gadgets to baby care products; everything ready to be delivered at your doorstep. We are one of the best online shopping store providing quality products at reasonable prices with cash on delivery options available.</p>
                    </div>
                } */}

            </div>
            <Row className="text-center pt-3 bg-light">
                <Col md={12} xs={24} > <p><small>Copyright © 2022 Ny Store. All Rights Reserved</small></p></Col>
                <Col md={12} xs={24} > <p><small>Design & Developed By <a href="https://www.ohadtech.com/"> OhadTech</a> </small></p></Col>
            </Row>
        </>
    )
}

export default Footer;
