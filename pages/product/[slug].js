import { useEffect, useState, useRef } from 'react';
import { Breadcrumb, Button, Col, Divider, Row, Typography, List, Radio, Space, Carousel, message } from 'antd';
import classes from '../../styles/ProductDetail.module.css'
import Image from 'next/image';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useLayout } from '../../providers/layout-provider'
import ajaxService from '../../services/ajax-service'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import ProductContent from '../../components/product-content';
import { removeItem, addToCart, subtractQuantity, setToCart } from '../../redux/actions/cartAction';
import parse from 'html-react-parser';

const { Title, Text } = Typography

function ProductDetail({ data }) {
    const [width, setWidth] = useState(0)
    const [variant, setvariant] = useState();
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isMobileScreen] = useLayout();
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const ref = useRef();

    const { product, variants } = data;
    let { original_price, discount, offer, selling_price } = product
    const goTo = (slide) => {
        ref.current.goTo(slide, false);
    };
    const handleAddToCart = () => {
        let item = cartItems.find(item => item.id === product.id);
        if (!item) {
            let productcart = { ...product }
            productcart.Quantity = quantity
            productcart.selling_price = renderOrignalPrice()
            dispatch(addToCart(productcart))
        } else {
            message.info('Product Added On Your Cart.')
        }
    }
    const handleVariant = () => {
        if (variant !== undefined) {
            let item = cartItems.find(item => item.id === variant.id);
            if (!item) {
                let productcart = { ...variant }
                productcart.Quantity = quantity
                productcart.selling_price = renderOrignalPrice()
                dispatch(addToCart(productcart))
            } else {
                message.info('Product Added On Your Cart.')
            }
        } else {
            message.error('plz select product variant.')
        }
    }

    useEffect(() => {
        const getCommonData = async () => {
            const response = await ajaxService.get(`products/` + product.category.slug);

            setRelatedProduct(response.products)
        }

        getCommonData();
        setWidth(document.body.clientWidth)
    }, [])

    const renderOffer = () => {
        if (offer) {
            return (
                <div>
                    <span className={classes.percentofflabel}><del>Rs.{selling_price}</del></span>
                    <span className={classes.percentofflabel}>-{discount}%</span>
                </div>
            );
        }
    }
    const renderOrignalPrice = () => {
        if (offer) {
            let original_price = selling_price - (selling_price / 100 * discount)
            return original_price

        } else {
            return selling_price
        }
    }

    const renderOverview = () => {
        if (product.description != null) {
            return (
                <Row>
                    <Col span={24} className='m-3'>
                        <Title level={4}>OVERVIEW</Title>
                        <Divider />
                        {parse(product.description)}
                    </Col >
                </Row>
            );
        }
    }

    return (

        <main>
            <Head>
                <title>{data.product.meta_title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content={data.product.meta_keywords} />
            </Head>
            <div className='py-3' >
                <Row className='p-3 border rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href={'/products/' + data.product.category.slug}>{data.product.category.name}</Breadcrumb.Item>
                        <Breadcrumb.Item>{data.product.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row gutter={[20, 20]} className='py-3 ' >

                    <Col xs={24} md={8}>
                        <Carousel ref={ref} dots={true}>
                            {product.images.map((v, k) => (
                                <Image className=' border' key={k} src={v.url} width={width} height={width} />
                            ))}
                        </Carousel>
                        <div className={classes.horizontal_slider}>
                            <div className={classes.slider_container}>
                                {product.images.map((v, k) => (
                                    <div className={classes.item}>
                                        <Image className=' border' key={k} onClick={() => goTo(k)} src={v.url} width={80} height={80} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {product.stock > 0 && <div className='border text-center p-2'>In Stock</div>}
                    </Col>
                    <Col xs={24} md={16} >
                        <Title level={2}>{product.name}</Title>
                        <Text >{product.short_description}</Text>
                        {product.has_variant
                            ?
                            <>
                                <Radio.Group style={{ width: '60%' }} onChange={(e) => { setvariant(e.target.value) }}>
                                    {
                                        variants.map(item => {
                                            return (
                                                <List direction="vertical">
                                                    <List.Item style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3 my-2 border">
                                                        <Radio value={item} >
                                                            <Space size='large'>
                                                                <span>{item.attribute1_value}</span>
                                                                <span>{item.attribute2_value}</span>
                                                                <span>{item.attribute3_value}</span>
                                                            </Space>

                                                        </Radio>
                                                        <div className='my-2'>
                                                            <Title level={4} style={{ color: ' #9ccb3c' }} >Rs.{renderOrignalPrice()}</Title>
                                                            {renderOffer()}
                                                        </div>
                                                    </List.Item>
                                                </List>
                                            )
                                        })
                                    }
                                </Radio.Group><br />
                                <Row>
                                    <Col md={4} xs={8}>
                                        <div className={classes.anticon} style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', border: '2px solid black', borderRadius: '20px', height: '32px' }}>
                                            <p onClick={() => quantity > 1 && setQuantity(quantity - 1)}><MinusOutlined /></p>
                                            <p>{quantity}</p>
                                            <p onClick={() => setQuantity(quantity + 1)} ><PlusOutlined /></p>
                                        </div>
                                    </Col>
                                </Row>
                                <Button onClick={handleVariant} className={isMobileScreen ? classes.btn_add_tocart : 'my-3'} type='primary' danger size='large'>Add To Cart</Button>
                            </>
                            :
                            <>
                                <div className='my-2'>
                                    <Title level={4} style={{ color: ' #9ccb3c' }} >Rs.{renderOrignalPrice()}</Title>
                                    {renderOffer()}
                                </div>
                                <Row>
                                    <Col md={4} xs={8}>
                                        <div className={classes.anticon} style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', border: '2px solid black', borderRadius: '20px', height: '32px' }}>
                                            <p onClick={() => quantity > 1 && setQuantity(quantity - 1)}><MinusOutlined /></p>
                                            <p>{quantity}</p>
                                            <p onClick={() => setQuantity(quantity + 1)} ><PlusOutlined /></p>
                                        </div>
                                    </Col>
                                </Row>
                                <Button onClick={handleAddToCart} className={isMobileScreen ? classes.btn_add_tocart : 'my-3'} type='primary' danger size='large'>Add To Cart</Button><br />
                            </>
                        }
                    </Col>
                    {renderOverview()}
                </Row>
                <Divider />
                <Row>
                    <Col span={24} >
                        <Title level={2}> Related Products</Title>
                        <ProductContent products={relatedProduct} />
                    </Col>

                </Row>

            </div>
        </main >
    )
}

export default ProductDetail;


export const getStaticPaths = async () => {

    const response = await ajaxService.get(`product`);

    const paths = response.map(product => {

        if (product == undefined) {
            console.log('------------------');
            //console.log(product.slug);
        }

        return {
            params: { slug: product.slug }
        }
    });

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {


    let data = {
        product: '',
        variants: [],
        id: 0
    };

    if (context != undefined && context.params != undefined) {

        const slug = context.params.slug;

        const response = await ajaxService.get(`product/` + slug);

        if (response !== undefined && response !== null) {
            data = response;
        }
    }


    return {
        props: { data, key: data.product.id || 0 },
        revalidate: 3600
    }
}