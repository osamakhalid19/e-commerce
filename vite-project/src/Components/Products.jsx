import React from 'react'

const Products = () => {
  return (
    <div className='text-black'>
  

          <div className=' bg-red-400 max-w-[80%] max-h-[80%] inline-block content-center '>
                   
                    <div ><img src="/Images/bathroom.jfif" alt="" /></div>
                   
                    <div>Living Room Sofa</div>
                    <div>1200$ Free Shipping</div>
                    <div className='text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, exercitationem commodi fuga maiores incidunt at corrupti accusamus reiciendis assumenda facere deleniti, hic voluptas tenetur consequuntur aliquid doloremque voluptatibus. Quos, non.</div>
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                    <button>Add to cart</button>

                  
            </div>


     {/* <div className='w-[30%] h-[100%] bg-slate-600 fixed top-0 right-0'>
      Shopping Cart
      </div> */}
    </div>
  )
}

export default Products
