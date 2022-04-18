import React, { useEffect, useState, lazy } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'antd'
import CarouselSlid from '../components/carosel'
import ProductContent from '../components/product-content';
import ajaxService from '../services/ajax-service'
import initPushNotifications from '../services/push-notifications';

export default function Home({ data }) {

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setPageData(data.data);
    initPushNotifications();
  }, [])

  const renderProductSection = ({ title, products, index }) => {
    return (
      <div className={styles.mainContainer} key={'product-section-' + index + Math.random()} >
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <ProductContent products={products} />
      </div>
    )
  }

  const renderCategoryBanners = ({ category, categories }, index) => {

    return (
      <div className={styles.mainContainer} key={'section-' + index} >
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12} md={12}>
            <Link href={'/products/' + category.slug}>
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <Image src={category.image} width={680} height={680} />
                <h5 style={{ position: 'absolute', bottom: '8px', left: '16px' }}>{category.name}</h5>
              </div>

            </Link>
          </Col>
          <Col xs={24} lg={12} md={12}>
            <Row gutter={[16, 16]}>
              {
                categories.map((category, index) => {
                  return (
                    <Col xs={12} lg={12} md={12} key={'cate-' + index}  >
                      <Link href={'/products/' + category.slug}>
                        <div style={{ position: 'relative', cursor: 'pointer' }} >
                          <Image src={category.image} width={600} height={600} />
                          <h5 style={{ position: 'absolute', bottom: '8px', left: '16px' }}>{category.name}</h5>
                        </div>

                      </Link>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <CarouselSlid banners={data.banners} />
      {
        pageData.map((item, index) => {

          if (item.type === 1) {
            return renderProductSection(item, index);
          } else if (item.type === 2) {
            return renderProductSection(item, index);
          } else if (item.type === 3) {
            return renderCategoryBanners(item, index);
          } else {
            return renderProductSection(item, index);
          }
        })
      }
    </div>
  )
}

/*
export async function getStaticProps() {

  let data = {
    banners: [],
    data: []
  };

  const response = await ajaxService.get(`home`);

  if (response !== undefined && response !== null) {
    data = response;
  }

  return { props: { data } }
}
*/

export const getServerSideProps = async () => {

  let data = {
    banners: [],
    data: []
  };

  const response = await ajaxService.get(`home`);

  if (response !== undefined && response !== null) {
    data = response;
  }

  return { props: { data } }
}