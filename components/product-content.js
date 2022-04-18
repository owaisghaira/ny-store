import { Row, Col } from 'antd';
import Card from '../components/card'

function ProductContent({ products = [] }) {

    return (
        <Row gutter={[16, 16]} >
            {
                products.map((product, index) => {
                    return (
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} key={'product-' + index + Math.random()} >
                            <Card product={product} />
                        </Col>
                    )
                })
            }
        </Row >
    )
}

export default ProductContent;