import React from 'react'
import Navbar from './header'
import Footer from './footer'
import MobileHeader from './mobileHeader'
import { useLayout } from '../providers/layout-provider'
import SideDrawer from '../components/sideDrawer/side-drawer';
import CartDrawer from '../components/sideDrawer/cart-drawer';
import BackDrawer from '../components/back-drawer';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Layout({ children, categories }) {
  const [sideBar, setSideBar] = React.useState(false);
  const [cartBar, setCartBar] = React.useState(false);
  const [isMobileScreen] = useLayout()
  const cartItems = useSelector(state => state.cart);

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }
  const handlebackdrop = () => {
    setSideBar(false)
    setCartBar(false)
  }
  const handleCartBar = () => {
    setCartBar(!cartBar)
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartBar(true)
    }
  }, [cartItems.length])

  return (
    <>
      {isMobileScreen ? <MobileHeader handleSideBar={handleSideBar} handleCartBar={handleCartBar} categories={categories} /> : <Navbar categories={categories} handleCartBar={handleCartBar} />}

      {sideBar &&
        <div>
          <SideDrawer handleSideBar={handleSideBar}  categories={categories}/>
          <BackDrawer handlebackdrop={handlebackdrop} />
        </div>
      }
      {cartBar &&
        <div>
          <CartDrawer handleCartBar={handleCartBar} />
          <BackDrawer handlebackdrop={handlebackdrop} />
        </div>
      }
      {/* {!isMobileScreen && <Navbar />} */}
      {children}
      <Footer categories={categories} />
    </>
  )
}