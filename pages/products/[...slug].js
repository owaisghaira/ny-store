import { useEffect, useState } from 'react';
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
    const [category, setCategory] = useState({ meta_title: '', meta_keyword: '', name: '' });
    const [keyword, setKeywords] = useState('')
    const [brands, setBrands] = useState([])
    const [subcategories, setSubcategories] = useState([])
    const [products, setProducts] = useState([])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [slug, setSlug] = useState('');

    const setItems = (row) => {
        let { keyword, brands, subcategories, products, min, max, slug, category } = row
        setCategory(category)
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

        const response = await ajaxService.get(`products/` + slug + '?' + queryString);

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
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ marginTop: '50px' }}>
                    <Empty />
                </Col>
            )
        }
    }


    return (
        <main>
            <Head>
                <title>{category.meta_title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content={category.meta_keyword} />
            </Head>
            <div className='py-3' >
                <Row className='p-3 border rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">{category.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className='my-3' gutter={20} >
                    <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                        <div className="border p-3 mb-3" size="small" direction='vertical' >
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
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <InputNumber min={min} max={max} style={{ width: '40%' }} placeholder={'Min ' + min} onChange={(value) => setMinPrice(value)} />

                                <InputNumber min={min} max={max} style={{ width: '40%' }} placeholder={'Max ' + max} onChange={(value) => setMaxPrice(value)} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between',marginTop :'10px' }}>
                                <Button type="primary" danger onClick={applyFilters}>Apply Filters</Button>
                                <Button type="primary" danger onClick={resetFilters}>Reset Filters</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={17} xs={24} sm={24}>
                        <div >
                            <h2 className='text-center'>{category.name}</h2>
                            <div className={classes.scroll} >
                                <Space size={15}>
                                    {
                                        subcategories.map((subcategory, index) => {
                                            return (
                                                <div key={'subcat-img-' + index}>
                                                    <Link href={'/products/' + slug + '/' + subcategory.slug} >
                                                       <><Image width={100} height={100} src={subcategory.image} className="circle-image border" /></>
                                                    </Link>
                                                    <br />
                                                    <div style={{ textAlign: 'center' }}>{subcategory.name}</div>
                                                </div>
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

export const getStaticPaths = async () => {

    const categories = await ajaxService.get(`category`);

    let paths = [];

    categories.map(category => {

        paths.push({ params: { slug: [category.slug] } });

        if (category.categories.length > 0) {
            category.categories.map(sub => {
                if (sub.categories.length > 0) {
                    sub.categories.map(child => {
                        paths.push({ params: { slug: [category.slug, sub.slug, child.slug] } });
                    })
                } else {
                    paths.push({ params: { slug: [category.slug, sub.slug] } });
                }
            })
        }
    });

    return {
        paths,
        fallback: 'blocking'
    }
}



export const getStaticProps = async ({ params: { slug } }) => {

    let data = {
        slug: '',
        subcategories: [],
        products: [],
        min: 0,
        max: 0,
        brands: [],
        category: {
            meta_title: '',
            meta_keyword: '',
            name: '',
            id: 0
        }
    };

    const response = await ajaxService.get(`products/` + slug.join('/'));

    if (response !== undefined && response !== null) {
        data = response;
        //data.key = data.category.id
    }

    return {
        props: { data, key: (data.category != null ? data.category.id : 0) },
        revalidate: 3600
    }
}