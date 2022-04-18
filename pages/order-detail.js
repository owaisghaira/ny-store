import { Divider, Space, Row, Col, Input, Typography, Button, Table, Form, Breadcrumb } from "antd"
import Image from 'next/image';
import Logo from '../public/images/appLogo.jpeg'

const { Title } = Typography

export default function OrderDetail() {

    const columns = [

        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',

        },
        {
            title: 'QTY',
            dataIndex: 'qty',
            key: 'qty',


        },

        {
            title: 'Total PKR',
            dataIndex: 'amount',
            key: 'amount',


        }
    ];

    const tableData = [
        {
            item: 'Cup',
            qty: 10,
            amount: 200,
        }
    ]



    return (
        <main>
            <div className="py-3">
                <div className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item href="">Order Detail</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='bg-white mt-3 py-3' >
                    <div className="text-center">
                        <Image src={Logo} width={200}/>
                    </div>

                    <div className="py-1 px-3 bg-white">
                        <Title level={4}>Orders</Title>
                        <Table
                            columns={columns}
                            data={tableData}
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}
