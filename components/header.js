import { useEffect, useState } from 'react';
import classes from '../styles/Header.module.css'
import { FacebookOutlined, WhatsAppOutlined, InstagramOutlined, DownOutlined, ShoppingCartOutlined, SearchOutlined, AlignLeftOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { Dropdown, Popover, Input, Space, Divider, Alert, Menu, Button, List, notification, Badge } from 'antd';
import Image from 'next/image';
import Logo from '../public/images/appLogo.jpeg'
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../redux/actions/authAction';

const { Search } = Input;
const { SubMenu } = Menu;

const renderCategories = (mainCategory, categories) => {

    const router = useRouter();

    const navigate = (slug) => {
        router.push({ pathname: '/products/' + slug });
    };

    if (categories.length > 0) {
        return categories.map((category) => {

            if (mainCategory === null) {
                if (category.categories != undefined && category.categories.length > 0) {
                    return (
                        <SubMenu key={'cats-' + category.id} title={category.name} onTitleClick={() => navigate(category.slug)} style={{ width: '300px', textDecoration: 'none' }}>
                            {renderCategories(category, category.categories)}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={'cats-' + category.id}>
                            <Link href={'/products/' + category.slug} style={{ textDecoration: 'none' }} >
                                {category.name}
                            </Link>
                        </Menu.Item>
                    )
                }
            } else {
                if (category.categories != undefined && category.categories.length > 0) {
                    return (
                        <SubMenu key={'cats-' + category.id} title={category.name} onTitleClick={() => navigate(category.slug)} style={{ width: '300px', textDecoration: 'none' }}>
                            {renderCategories(category, category.categories)}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={'cats-' + category.id}>
                            <Link href={'/products/' + mainCategory.slug + '/' + category.slug} style={{ textDecoration: 'none' }} >
                                {category.name}
                            </Link>
                        </Menu.Item>
                    )
                }
            }
        })
    }
}

const CategoriesMenu = ({ categories }) => {
    return (
        <Menu mode="vertical">
            {renderCategories(null, categories)}
        </Menu>
    );
}

const LoggedIn = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const logoutUser = () => {
        dispatch(removeToken());
        router.push('/')
    }

    return (
        <Menu mode="vertical">
            <Menu.Item>
                <Link href="/user">
                    ACCOUNT
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Button type="danger" block onClick={() => logoutUser()}>
                    LOGOUT
                </Button>
            </Menu.Item>
        </Menu>
    )
}

{/* <div style={{ margin: 'auto' }}>
    <Image src={Logo} alt="NY Store" width="130" height="43" />
</div> */}


const LoggedOut = () => {
    return (
        <Menu mode="vertical">
            <Menu.Item>
                WELCOME
            </Menu.Item>
            <Menu.Item>
                <Button type="danger" block >
                    <Link href="/login">
                        LOGIN
                    </Link>
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">
                    NEW CUSTOMER? SIGN UP
                </Link>
            </Menu.Item>
        </Menu>
    )
}

const AuthDropdown = () => {

    const auth = useSelector(state => state.auth);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (auth.token !== null) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [auth.token]);

    const renderDropdown = () => {
        if (isAuth) {
            return (
                <Dropdown overlay={<LoggedIn />} placement="bottomCenter" arrow   >
                    <span className="auth-link" >
                        <Link href="/">MY ACCOUNT</Link>
                    </span>
                </Dropdown>
            );
        } else {
            return (
                <Dropdown overlay={<LoggedOut />} placement="bottomCenter" arrow   >
                    <span className="auth-link" >
                        <Link href="/">LOGIN / REGISTER</Link>
                    </span>
                </Dropdown>
            );
        }
    }

    return renderDropdown()
}


function Header({ handleCartBar, categories }) {

    const router = useRouter();

    const text = <span>Title</span>;

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
        <>
            {/* <header>
                <div className={classes.container}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0px 0px' }}>
                        <div> <Alert style={{ backgroundColor: 'black', width: '70%' }}
                            banner
                            message={
                                <Marquee style={{ color: '#fff' }} pauseOnHover gradient={false}>
                                    CHECK OUR CLEARANCE SALE PRODUCTS
                                </Marquee>
                            }
                        />
                        </div>
                        <div className={classes.iconantd} style={{ display: 'flex', justifyContent: 'space-between', width: '25%' }}>
                            <Space direction='horizontal' size='small'>
                                <Space size='small' className="top-social">
                                    <a href="https://www.facebook.com/nystore.pk" target="_blank">
                                        <FacebookOutlined />
                                    </a>
                                    <a href="https://www.instagram.com/nystorekhi" target="_blank">
                                        <InstagramOutlined />
                                    </a>
                                    <a href="tel:+923133636336">
                                        <WhatsAppOutlined />
                                    </a>
                                </Space>
                                <span className='top-link'>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </span>
                                <span className='top-link'>
                                    <Link href="/about-us" >
                                        About Us
                                    </Link>
                                </span>
                                <span className='top-link'  >
                                    <Link href={"/contact"}>
                                        Contact Us
                                    </Link>
                                </span>
                            </Space>
                        </div>
                    </div>
                </div>
            </header> */}

            <div className='sticky-top bg-white' >
                <div className='navbar' style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 55px' }}>
                    <div className='' style={{ width: '25%', textAlign: 'center' }}>
                        <Link href={"/"}>
                            <Image src={Logo} alt='logo' width={250} height={80} />
                        </Link>
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <Input onPressEnter={handleKeyword} size="large" placeholder="search for products" style={{ width: '38em', borderRadius: '8px' }} prefix={<SearchOutlined />} />
                    </div>
                    <div style={{ display: 'flex', margin: 'auto' }}>
                        <Space >
                            <AuthDropdown />
                            <Badge count={totalItems}>
                                <ShoppingCartOutlined onClick={() => handleCartBar()} className={classes.iconantd} />
                            </Badge>
                        </Space>
                    </div>
                </div>
            </div>
            <Divider style={{ margin: '0px', padding: '0px' }} />
            <div style={{ margin: '0px 25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 55px' }}>
                    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>

                        <Dropdown overlay={<CategoriesMenu categories={categories} />}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ textDecoration: 'none', borderRadius: '7px', width: '50%', alignItems: 'center', backgroundColor: '#dd4a45', color: '#fff', display: 'flex', justifyContent: 'space-between', padding: '10px' }} >
                                <AlignLeftOutlined /> <span>BROWSE CATEGORIES</span> <DownOutlined />
                            </a>

                        </Dropdown>
                        <Menu mode="horizontal" style={{ width: '55%', fontWeight: '500' }}>
                            <Menu.Item key="1" ><Link href={'/'}>
                                Home
                            </Link> </Menu.Item>
                            <Menu.Item key="2" ><Link href="/about-us">
                                About Us

                            </Link> </Menu.Item>
                            <Menu.Item key="3" ><Link href="/contact">
                                Contact Us

                            </Link> </Menu.Item>
                            {/* <Menu.Item key="3" >Contact Us</Menu.Item> */}
                        </Menu>
                    </div>
                    <div style={{ marginTop: '16px', marginBottom: '16px' }} >
                        <h6 style={{ margin: 'auto' }} > <a href="tel:+923133636336" style={{ textDecoration: 'none', color: '#dd4a45' }}>CALL US(+92-313-3636336) </a> </h6>
                    </div>
                </div>
            </div>


            <Divider style={{ margin: '0px', padding: '0px' }} />
        </>
    )
}
export default Header;
