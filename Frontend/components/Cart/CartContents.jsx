import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
    const cartProducts = [
        {
            ProductId : 1,
            Name : "T-shirt",
            Size : "M",
            Color : "Black",
            Quantity : 1,
            Price : 1500,
            Image : "https://picsum.photos/200?random=1",

        },
        {
            ProductId : 2,
            Name : "shirt",
            Size : "M",
            Color : "Blue",
            Quantity : 1,
            Price : 2000,
            Image : "https://picsum.photos/200?random=2",

        },
    ]

  return (
    <div>
      {
        cartProducts.map((Product,index) => (
        <div key={index} className='flex items-start justify-between py-4 border-b border-gray-200'>
          <div className='flex tem-start'>
              <img  src={Product.Image} 
              alt={Product.Name}
              className='w-20 h-24 object-cover mr-4 rounded'
              />
              <div>
                <h3>{Product.Name}</h3>
                <p className='text-gray-500 text-sm'>
                    Size: {Product.Size} | Color: {Product.Color}
                </p>
                <div className='flex item-center mt-2'>
                    <button className='border rounded px-2 py-1 text-xl font-medium border-gray-200 cursor-pointer'>-</button>
                    <span className='mx-4 py-2'>{Product.Quantity}</span>
                    <button className='border rounded px-2 py-1 text-xl font-medium  border-gray-200 cursor-pointer'>+</button>
                </div>
              </div>
            </div>        
            <div>
                <p>Rs {Product.Price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className='h-6 w-6 mt-2 text-gray-800 cursor-pointer' />
                </button>
            </div>
        </div>    
        ))
      }
    </div>
  )
}

export default CartContents;
