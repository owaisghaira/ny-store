import Head from 'next/head'
import { Typography, Row, Breadcrumb } from 'antd';

const { Title, Text } = Typography;

function ReturnPolicy() {

    return (
        <main>
            <Head>
                <title>Return and Replacement Policy</title>
            </Head>
            <div className='py-3'>
                <Row className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Return and Replacement Policy</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='bg-white mt-3 p-3' >
                    <Title>Return and Replacement Policy</Title>
                    <Text>
                        Within 7 days of the product purchase date you may return products purchased at the nystore.pk for a full refund of your purchase price. Products must be returned in their original condition and packaging with all included parts. You are responsible for the cost of the return shipment.
                        Product exchanges are only available for products that you received in a defective or damaged condition or when a different product than what you ordered was incorrectly sent to you.
                    </Text>
                </div>
            </div>
        </main>
    )
}
export default ReturnPolicy