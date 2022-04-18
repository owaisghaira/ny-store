
import { Row, Col } from 'antd';
import { Card } from './card';
import Link from 'next/link';

export default function CardContent() {
    return (

        <Row gutter={[16, 16]} >
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <div ><Card /></div>
            </Col>
        </Row>

    )
}
