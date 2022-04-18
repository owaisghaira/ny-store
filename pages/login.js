import classes from '../styles/Checkout.module.css'
import { Breadcrumb, Button, Col, Divider, Row, Input, Space, Select, Radio, Form, notification } from 'antd';
import ajaxService from '../services/ajax-service'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useReducer } from 'react-redux';
import { setToken, setUser } from '../redux/actions/authAction';
import {cityData} from '../components/cityData';
const { Option } = Select;

function Login() {

    const router = useRouter();
    const dispatch = useDispatch();

    const [loginForm] = Form.useForm();
    const [registerForm] = Form.useForm();

    let loginValues = {
        email: '',
        password: '',
    };

    const onLoginFinish = async (values) => {
        let response = await ajaxService.post('login', values);

        if (response) {
            getUser(response);
        } else {
            notification.info({
                message: `Error`,
                description: 'Invalid user name or password',
                placement: 'bottomCenter'
            });
        }
    };

    const onLoginFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    let registerValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        city: ''
    };

    const getUser = async ({ token, user }) => {
        dispatch(setToken(token))
        dispatch(setUser(user))
        router.push({ pathname: '/', });
    }

    const onRegisterFinish = async (values) => {

        let response = await ajaxService.post('register', values);

        if (response) {
            getUser(response);
        } else {
            notification.info({
                message: `Error`,
                description: 'Email already exists',
                placement: 'bottomCenter'
            });
        }
    };

    const onRegisterFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <main>
            <Head>
                <title>Login</title>
            </Head>
            <div className='py-3' >
                <Row className='p-3 bg-white rounded '>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Login</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='bg-white mt-3 py-3' >
                    <Row className='' style={{ margin: '15px 0px', backgroundColor: '#FFF' }} gutter={[26, 16]}>
                        <Col style={{ borderRight: '1px solid gray', padding: '13px' }} xs={24} md={8}>
                            <h5>Login</h5>
                            <Divider />
                            <Form
                                layout={'vertical'}
                                form={loginForm}
                                name="control-hooks"
                                initialValues={loginValues}
                                onFinish={onLoginFinish}
                                onFinishFailed={onLoginFinishFailed}
                            >
                                <Form.Item label="Email" name="email" rules={[
                                    {
                                        required: true,
                                        message: 'Email field is required',
                                    },
                                ]}>
                                    <Input size='large' placeholder="Email" />
                                </Form.Item>
                                <Form.Item label="Password" name="password" rules={[
                                    {
                                        required: true,
                                        message: 'Password field is required',
                                    },
                                ]}>
                                    <Input size='large' placeholder="Password" type="password" />
                                </Form.Item>
                                <Divider />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button size='large' type='primary' danger htmlType="submit" >Login  </Button>
                                    <p >Forgot password?</p>
                                </div>
                            </Form>
                        </Col>
                        <Col style={{ padding: '13px' }} xs={24} md={16}>
                            <h5>Register</h5>
                            <Divider />
                            <Form
                                layout={'vertical'}
                                form={registerForm}
                                name="control-hooks"
                                initialValues={registerValues}
                                onFinish={onRegisterFinish}
                                onFinishFailed={onRegisterFinishFailed}
                            >
                                <Row gutter={30}>
                                    <Col xs={24} md={12} lg={12}>
                                        <Form.Item label="Full Name" name="name" rules={[
                                            {
                                                required: true,
                                                message: 'Name field is required',
                                            },
                                        ]}>
                                            <Input size='large' placeholder="Full Name" />
                                        </Form.Item>
                                        <Form.Item label="Mobile" name="phone" rules={[
                                            {
                                                required: true,
                                                message: 'Mobile field is required',
                                            },
                                        ]}>
                                            <Input size='large' placeholder="Mobile Number" />
                                        </Form.Item>
                                        <Form.Item label="Password" name="password" rules={[
                                            {
                                                required: true,
                                                message: 'Password field is required',
                                            },
                                        ]}>
                                            <Input size='large' placeholder="Password" type="password" />
                                        </Form.Item>
                                        <Form.Item label="Re-Enter Password" name="password_confirmation" rules={[
                                            {
                                                required: true,
                                                message: 'Password confirmation field is required',
                                            },
                                        ]}>
                                            <Input size='large' placeholder=" Re-Type Password" type="password" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12} lg={12}>
                                        <Form.Item label="Email" name="email" rules={[
                                            {
                                                required: true,
                                                message: 'Email field is required',
                                            },
                                        ]}>
                                            <Input size='large' placeholder="Email" />
                                        </Form.Item>
                                        <Form.Item label="City" name="city" rules={[
                                            {
                                                required: true,
                                                message: 'City field is required',
                                            },
                                        ]}>
                                            <Select>
                                                {
                                                    cityData.map(city => <Option value={city.value}>{city.Title}</Option>)
                                                }
                                            </Select>
                                        </Form.Item>
                                        <Divider />
                                        <Button type='primary' htmlType='submit' danger size="large" > Sign Up </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </main>
    )
}
export default Login