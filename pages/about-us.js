import Head from 'next/head'
import { Typography, Row, Breadcrumb } from 'antd';

const { Title, Text } = Typography;

function AboutUs() {

    return (
        <main>
            <Head>
                <title>About Us</title>
            </Head>
            <div className='py-3' >
                <Row className='p-3 border rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>About Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='border mt-3 p-3' >
                    <Title>About Us</Title>
                    <Text>
                        NY Store is the Online Retail Shopping Store in Pakistan. We deals in Fancy & Unique Kitchen Items, Household items, Electronics, Travel accessories, Baby Products & many more. In order to retain customer pleasure as a top priority, we offer not only the best goods on the market, but also the most efficient service and astonishingly low pricing.
                        NY Store has established an E-Commerce online shopping website to improve the consumer experience. This is intended to create a user-friendly and easily accessible platform for customers on the go, as well as to make buying easier by bringing internet shopping into the home. We believe in not only providing high-quality products to our clients, but also entirely rethinking the pre- and post-sale experience so that they may enjoy safe and convenient purchasing.
                        Our mission has always been to assist our customers in saving both time and money. The faith that our customers, associates, agents, and service providers have in us is extremely important to us. This is why we've invested in developing an e-commerce platform that allows you to order the product you want while also ensuring that personal information is handled in accordance with our fundamental value of individual respect.
                    </Text>
                </div>
            </div>
        </main>
    )
}
export default AboutUs