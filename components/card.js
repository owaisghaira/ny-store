import Image from 'next/image'
import classes from '../styles/App.module.css'
import CartBtn from '../public/images/btn-cart.svg'
import { Card, Typography } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction'
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Text } = Typography;
export default function CardComponent({ product }) {

    const dispatch = useDispatch();
    let { name, image, selling_price, slug, discount, offer, original_price } = product

    const renderOffer = () => {
        if (offer) {
            return (
                <div>
                    <span><del>Rs.{selling_price}</del></span>
                    <span className={classes.percentofflabel}>-{discount}%</span>
                </div>
            );
        }
    }
    const renderOrignalPrice = () => {
        if (offer) {
            return original_price

        } else {
            return selling_price
        }
    }
    const handleAddToCart = () => {
        let productcart = { ...product }
        productcart.Quantity = 1;
        productcart.selling_price = renderOrignalPrice()
        dispatch(addToCart(productcart))
    }
    return (
        <Card hoverable style={{ background: '#fff', padding: '5px', borderRadius: '7px', height: '100%' }}>
            <Link href={'/product/' + slug}>
                <Image src={image} width={202} height={202} />
            </Link>
            <div className='px-2'>
                <Link href={'/product/' + slug}>
                    <Text ellipsis={true}>{name}</Text>
                </Link>
            </div>
            <div className='p-2' style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div>
                    <strong style={{ color: ' #9ccb3c' }} >Rs.{renderOrignalPrice()}</strong>
                    {renderOffer()}

                </div>
                <div onClick={handleAddToCart} className={classes.carticon}>
                    <ShoppingCartOutlined style={{ fontSize: '25px' }} />
                </div>
            </div>
        </Card>
    )
}
