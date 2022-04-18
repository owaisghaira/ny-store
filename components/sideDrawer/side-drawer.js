import classes from './drawer.module.css'
import { SearchOutlined, RightOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react';
import { Input, Tabs, Menu, Button, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { removeToken } from '../../redux/actions/authAction';

const { SubMenu } = Menu;
const { TabPane } = Tabs;
const { Text } = Typography;

export default function SideDrawer({ categories, handleSideBar }) {
    const auth = useSelector(state => state.auth);
    const [isAuth, setIsAuth] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    function callback(key) {
        //   console.log(key);
    }
    const navigate = (slug) => {
        router.push({ pathname: '/products/' + slug });
    };
    const handleCategory = (slug) => {
        navigate(slug);
        handleSideBar();
    }
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
    const renderCategories = (categories) => {

        if (categories.length > 0) {
            return categories.map((category) => {
                if (category.categories != undefined && category.categories.length > 0) {
                    return (
                        <SubMenu key={'cats-' + category.id} title={<Text onClick={() => handleCategory(category.slug)}>{category.name}</Text>} style={{ background: '#fff' }}>
                            <Menu.ItemGroup style={{ background: '#fff' }} key={'sub-' + category.id}>
                                {renderCategories(category.categories)}
                            </Menu.ItemGroup>
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={'cats-' + category.id}>
                            <Link href={'/products/' + category.slug} >
                                <><Text onClick={() => handleSideBar()} > {category.name}</Text></>
                            </Link>
                        </Menu.Item>
                    )
                }
            })
        }
    }
    const logoutUser = () => {
        dispatch(removeToken());
        router.push('/')
    }
    useEffect(() => {
        if (auth.token !== null) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [auth.token]);
    return (

        <div className={classes.drawer}>
            <Input onPressEnter={handleKeyword} size="large" placeholder="search for products..." style={{ width: '100%' }} prefix={<SearchOutlined />} />

            <Tabs centered defaultActiveKey="1" onChange={callback}>
                <TabPane tab="CATEGORIES" key="1">
                    <Menu
                        style={{ width: '100%' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        {renderCategories(categories)}
                    </Menu>
                </TabPane>
                <TabPane tab="MENU" key="2">
                    <Menu>
                        <Menu.Item key="m1" ><Link href="/">
                            Home</Link></Menu.Item>
                        <Menu.Item  key="m2" ><Link href="about">About Us</Link></Menu.Item>
                        {isAuth ? <Menu.Item  key="m3"><Link href="/user">My Account</Link></Menu.Item> : <Menu.Item key="m3"><Link href="/login">Login/Register</Link></Menu.Item>}
                        <Menu.Item key="m4"><Link href="return-policy">Return Policy</Link></Menu.Item>
                        <Menu.Item key="m5"><Link href="terms-and-conditions">Term & Condition</Link></Menu.Item>
                        <Menu.Item key="m6"><Link href="contact">Contact Us</Link></Menu.Item>
                        {isAuth && <Menu.Item key="m6">
                            <Button type="primary" block danger onClick={() => logoutUser()}>
                                LOGOUT
                            </Button>
                        </Menu.Item>}
                    </Menu>
                </TabPane>
            </Tabs >
        </div >
    )
}