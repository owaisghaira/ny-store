import { useState, useEffect } from 'react';
import { Breadcrumb, Checkbox, Space, Row, Col, InputNumber, Select, Button, Empty } from "antd"
import Image from "next/image"
import { Card } from '../../components'
import ajaxService from '../../services/ajax-service'
import Link from 'next/link'
import Head from 'next/head'
import classes from '../../styles/ProductDetail.module.css'

const { Option } = Select;

export default function Products({ data }) {

    const [sort, setSort] = useState(0);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const [keyword, setKeywords] = useState('')
    const [brands, setBrands] = useState([])
    const [subcategories, setSubcategories] = useState([])
    const [products, setProducts] = useState([])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [slug, setSlug] = useState('');

    const setItems = (row) => {
        let { keyword, brands, subcategories, products, min, max, slug } = row

        setKeywords(keyword)
        setBrands(brands)
        setSubcategories(subcategories)
        setProducts(products)
        setMin(min)
        setMax(max)
        setSlug(slug)
    }

    useEffect(() => {
        setItems(data)
    }, [])

    const applyFilters = async () => {
        let query = {};

        if (selectedBrands.length > 0) {
            query.brands = selectedBrands.join(',')
        }

        if (minPrice > 0 && maxPrice > 0) {
            query.min = minPrice;
            query.max = maxPrice;
        }

        if (sort > 0) {
            query.sort = sort;
        }

        const queryString = new URLSearchParams(query).toString();

        const response = await ajaxService.get(`search/` + keyword + '?' + queryString);

        if (response !== undefined && response !== null) {
            setItems(response)
        }
    }

    const resetFilters = () => {
        setSort(0)
        setSelectedBrands([])
        setMinPrice(null)
        setMaxPrice(null)
    }

    const renderBrands = () => {
        if (brands != undefined && brands.length > 0) {
            return (
                <>
                    <h5>BRANDS</h5>
                    <Space direction='vertical'>
                        <Checkbox.Group options={brands.map(brand => ({ label: brand.name, value: brand.id }))} defaultValue={[]} onChange={(value) => setSelectedBrands(value)} />
                    </Space>
                </>
            );
        }
    }

    const renderProducts = () => {
        if (products.length > 0) {

            return products.map((product, index) => {
                return (
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} key={'product-' + index + Math.random()} >
                        <Card product={product} />
                    </Col>
                )
            })

        } else {
            return (
                <Col xs={12} sm={12} md={24} lg={24} xl={24} style={{ marginTop: '50px' }}>
                    <Empty />
                </Col>
            )
        }
    }


    return (
        <main>

            <Head>
                <title>{keyword}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content={keyword} />
            </Head>
            <div className='py-3' >
                <Row className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">{keyword}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>

                <Row className='my-3' gutter={20} >
                    <Col lg={7} >
                        <Space className="bg-white p-3" size="small" direction='vertical' >
                            <>
                                <h5>SORT BY</h5>
                                <Select style={{ width: '100%', marginBottom: '10px' }} onChange={(value) => setSort(value)} defaultValue="0" >
                                    <Option value="0">Select</Option>
                                    <Option value="1">Price (Low - High)</Option>
                                    <Option value="2">Price (High - Low)</Option>
                                    <Option value="3">Alphabetical (A - Z)</Option>
                                    <Option value="4">Alphabetical (Z - A)</Option>
                                    <Option value="5">Discount % (Low - High)</Option>
                                    <Option value="6">Discount % (High - Low)</Option>
                                </Select>
                            </>
                            {renderBrands()}
                            <h5>PRICE</h5>
                            <Row>
                                <Col span={12}>
                                    <InputNumber min={min} max={max} style={{ width: '95%' }} placeholder={'Min ' + min} onChange={(value) => setMinPrice(value)} />
                                </Col>
                                <Col span={12}>
                                    <InputNumber min={min} max={max} style={{ width: '95%' }} placeholder={'Max ' + max} onChange={(value) => setMaxPrice(value)} />
                                </Col>
                            </Row>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button type="primary" danger onClick={applyFilters}>Apply Filters</Button>
                                <Button type="primary" danger onClick={resetFilters}>Reset Filters</Button>
                            </div>
                        </Space>
                    </Col>
                    <Col lg={17} >
                        <div >
                            <h2 className='text-center'>{keyword}</h2>
                            <div className={classes.scroll} >
                                <Space size={15}>
                                    {
                                        subcategories.map((subcategory, index) => {
                                            return (
                                                <Link href={'/products/' + slug + '/' + subcategory.slug} key={'subcat-img-' + index} >
                                                    <Image width={100} height={100} src={subcategory.image} className="circle-image" />
                                                </Link>
                                            )

                                        })
                                    }
                                </Space>
                            </div>
                            <Row gutter={[16, 16]} >
                                {renderProducts()}
                            </Row >
                        </div>
                    </Col>
                </Row>
            </div>
        </main>
    )
}


export const getServerSideProps = async (context) => {

    const slug = context.params.slug || 'all';

    let data = {
        keyword: '',
        subcategories: [],
        products: [],
        min: 0,
        max: 0,
        brands: [],
    };

    const response = await ajaxService.get(`search/` + slug);

    if (response !== undefined && response !== null) {
        data = response;
    }

    return {
        props: { data, key: slug }
    }
}