import { Row, Col, Breadcrumb, Form, Input, Button } from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import FormItemInput from 'antd/lib/form/FormItemInput';

function Reset() {
    return (
        <main>
            <div className='py-4' >
                <Row className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Reset Password</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Form
                    layout='vertical'>
                    <Row>
                        <Col xs={0} md={8} lg={8} />
                        <Col xs={24} md={8} lg={8} >
                            <Form.Item >
                                <Input className='my-3' placeholder='New Password' />
                            </Form.Item>
                            <Form.Item >
                                <Input placeholder='Re-Type Password' />
                            </Form.Item>
                            <Form.Item>
                                <Button className='my-3' type='primary' danger>Reset</Button>
                            </Form.Item>
                        </Col>
                        <Col xs={0} md={8} lg={8} />
                    </Row>
                </Form>
            </div>
        </main>
    )
}
export default Reset;