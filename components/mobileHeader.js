import classes from '../styles/Header.module.css'
import { ShoppingCartOutlined, SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Link from 'next/link';
import {Input, Space,Badge} from 'antd';
import Image from 'next/image';
import Logo from '../public/images/appLogo.jpeg'
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

export default function MobileHeader({ handleSideBar, handleCartBar }) {
    const [inputBar, setInputBar] = React.useState(false)
    const router = useRouter();
    const cartItems = useSelector(state => state.cart);

    let totalItems = 0;

    cartItems.map(item => {
        totalItems += item.Quantity;
    })
    const handleKeyword = ({ target }) => {

        if (target.value.length > 0) {
            router.push({
                pathname: '/search/' + target.value,
            });
        } else {
            notification.open({
                message: 'Keyword Required',
                description:
                    'Enter keyword to search.',
                onClick: () => {
                    //console.log('Notification Clicked!');
                }
            })
        }
    }
    return (
        <header className='sticky-top bg-white '  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'end' }}>
                <div onClick={() => handleSideBar()} >
                    <MenuOutlined style={{ marginBottom: '5px' }} className={classes.iconantd} />
                </div>
                <div style={{ margin: 'auto' }}>
                    <Image src={Logo} alt="Idealancy" width="130" height="43" />
                </div>
                <div >
                    <Space >
                        <div data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                            <SearchOutlined onClick={() => setInputBar(!inputBar)} style={{ marginBottom: '5px' }} className={classes.iconantd} />
                        </div>
                        <div onClick={() => handleCartBar()}>
                            <Badge count={totalItems}>
                                <ShoppingCartOutlined style={{ marginBottom: '5px' }} className={classes.iconantd} />
                            </Badge>
                        </div>
                    </Space>
                </div>
            </div>
            {inputBar &&

                <Input onPressEnter={handleKeyword} placeholder='Search for anything' suffix={<CloseOutlined onClick={() => setInputBar(false)} />} size="large" prefix={<SearchOutlined />} />
            }

        </header>
    )
}

