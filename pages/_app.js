import React, { useEffect, useState } from 'react';
import '../styles/globals.css'
import Head from "next/head";
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux';
import Layout from '../components/layout'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import { LayoutProvider } from '../providers/layout-provider'
import ajaxService from '../services/ajax-service'

function MyApp({ Component, pageProps }) {
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [categories, setCategories] = useState([])
  // const categories = [{"id":22,"name":"Electronics","slug":"electronics","description":"Electronics","meta_title":"Electronics","meta_keywords":"Electronics","parent_id":0,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[{"id":23,"name":"Home Appliences","slug":"home-appliences","description":"Home Appliences","meta_title":"Home Appliences","meta_keywords":"Home Appliences","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[]},{"id":24,"name":"Kitchen Accessories","slug":"kitchen-accessories","description":"Kitchen Accessories","meta_title":"Kitchen Accessories","meta_keywords":"Kitchen Accessories","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[]},{"id":25,"name":"Laptops","slug":"laptops","description":"Laptops","meta_title":"Laptops","meta_keywords":"Laptops","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[{"id":26,"name":"Mobiles","slug":"mobiles","description":"Mobiles","meta_title":"Mobiles","meta_keywords":"Mobiles","parent_id":25,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1}]}],"children":[{"id":23,"name":"Home Appliences","slug":"home-appliences","description":"Home Appliences","meta_title":"Home Appliences","meta_keywords":"Home Appliences","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[]},{"id":24,"name":"Kitchen Accessories","slug":"kitchen-accessories","description":"Kitchen Accessories","meta_title":"Kitchen Accessories","meta_keywords":"Kitchen Accessories","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[]},{"id":25,"name":"Laptops","slug":"laptops","description":"Laptops","meta_title":"Laptops","meta_keywords":"Laptops","parent_id":22,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1,"categories":[{"id":26,"name":"Mobiles","slug":"mobiles","description":"Mobiles","meta_title":"Mobiles","meta_keywords":"Mobiles","parent_id":25,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":1}]}]},{"id":27,"name":"Sports","slug":"sports","description":"Sports","meta_title":"Sports","meta_keywords":"Sports","parent_id":0,"image":"https:\/\/live.eazyshop.net\/Uploads\/7d41f13d-1676-4263-b9da-3b6817a87c68.jpg","active":null,"categories":[],"children":[]}]

  useEffect(() => {

    const getCommonData = async () => {
      const response = await ajaxService.get(`category`);
      setCategories(response)
    }

    getCommonData();
  }, [])

  useEffect(() => {
    const handleWidth = () => {
      const width = document.body.clientWidth
      return (width <= 768)
    }

    setIsMobileScreen(handleWidth())
  })

  return (
    <>
      <Provider store={store} >
        <LayoutProvider>
          <Layout categories={categories} >
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              {/* <base href="https://new.nystore.pk" /> */}
            </Head>
            <div style={{ height: '100%', padding: '0px', paddingLeft: (isMobileScreen ? '10px' : '80px'), paddingRight: (isMobileScreen ? '10px' : '80px'), backgroundColor: '#fff' }}>
              <Component {...pageProps} />
            </div>
          </Layout>
        </LayoutProvider>
      </Provider>
    </>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp);

