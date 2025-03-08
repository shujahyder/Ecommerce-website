import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../Cart/CartContents'
const CartDrawer = ({DrawerOpen,toggleCartDrawer}) => {
  
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${DrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/*close button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
            <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer'/>
        </button>
      </div>
      {/* Cart Content */}
      <div className='flex-grow p-4 overflow-auto'>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        {/* Cart Items */}
        <CartContents/>
      </div>
      {/* checkout button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>Checkout</button>
       <p className='text-xs tracking-tighter textgray-500 mt-2 text-center'>
           Shipping, taxes, and discount codes calculated at checkout.
       </p>
      </div>
    </div>
  )
}

export default CartDrawer
