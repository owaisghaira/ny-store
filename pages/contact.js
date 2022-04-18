import { Breadcrumb, Button, Col, Divider, Row, Input, List, Form, Typography, notification } from 'antd';
import Head from 'next/head';
import ajaxService from '../services/ajax-service'

const { TextArea } = Input

function Contact() {

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        let response = await ajaxService.post('contact', values);

        if (response) {
            form.resetFields();
            notification.success({
                message: `Email Sent`,
                description: 'Your email message has been sent',
                placement: 'bottomCenter'
            });
        } else {
            notification.error({
                message: `Error`,
                description: 'Unable to send email. Please contact support',
                placement: 'bottomCenter'
            });
        }
    };

    return (
        <>

            <main>
                <Head>
                    <title>Contact Us</title>
                </Head>
                <div className='py-3' >
                    <Row className='p-3 border rounded '>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="">Contact Us</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <div className='border mt-3 py-3' >
                        <Row style={{ margin: '15px 0px', backgroundColor: '#FFF' }} gutter={[26, 16]}>
                            <Col style={{  padding: '13px' }} xs={24} md={8}>
                                <h5>Contact Us</h5>
                                <Divider />
                                <Form
                                    layout={'vertical'}
                                    form={form}
                                    name="control-hooks"
                                    onFinish={onFinish}
                                >
                                    <Form.Item label="Name" name="name" rules={[
                                        {
                                            required: true,
                                            message: 'Name field is required',
                                        },
                                    ]}>
                                        <Input size='large' placeholder="Name" type="name" />
                                    </Form.Item>
                                    <Form.Item label="Email" name="email" rules={[
                                        {
                                            required: true,
                                            message: 'Email field is required',
                                        },
                                    ]}>
                                        <Input size='large' placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item label='Mobile No.' name="Phone" rules={[
                                        {
                                            required: true,
                                            message: 'Phone field is required',
                                        },
                                    ]}>
                                        <Input placeholder='Mobile No.' />
                                    </Form.Item>
                                    <Form.Item label='Message' name="message" rules={[
                                        {
                                            required: true,
                                            message: 'Message field is required',
                                        },
                                    ]}>
                                        <TextArea rows={4} placeholder='Comment' />
                                    </Form.Item>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button size='large' type='primary' danger htmlType="submit" >Submit  </Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col style={{ padding: '13px' }} xs={0} md={8}></Col>
                            <Col style={{ padding: '13px' }} xs={24} md={8}>
                                <div style={{ border: '1px solid lightGray', margin: '25px 0px', borderRadius: '5px', padding: '15px', background: "#fff" }} >
                                    <List >
                                        <List.Item>
                                            <Typography.Text mark>
                                                <h5>SMS/Whatsapp:</h5>
                                                <p><a href="tel:+923133636336">+92-313-3636336 </a> </p>
                                            </Typography.Text>
                                        </List.Item>
                                        <List.Item>
                                            <Typography.Text mark>
                                                <h5>Sales:</h5>
                                                <p><a href="mailto:sales@nystore.pk">sales@nystore.pk</a></p>
                                            </Typography.Text>
                                        </List.Item>
                                        <List.Item>
                                            <Typography.Text mark>
                                                <h5>Info:</h5>
                                                <p><a href="mailto:support@nystore.pk">support@nystore.pk</a></p>
                                            </Typography.Text>
                                        </List.Item>
                                        <List.Item>
                                            <Typography.Text mark>
                                                <h5>Working Days/Hours:</h5>
                                                <p>Mon - Sat / 11:00AM - 8:00PM</p>
                                            </Typography.Text>
                                        </List.Item>
                                    </List>


                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </main>


        </>
    )
}
export default Contact