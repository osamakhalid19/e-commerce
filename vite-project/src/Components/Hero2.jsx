import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";


const Hero2 = () => {
    return (
        <>
        
            <main>
                <section className="lg:pt-[126px] md:pt-[90px] md:pl-[128px] mb:pt-[70px] mb:pl-[115px] pt-[258px] pl-[165px] w-[70%]">
                    <div className="mb:text-xs text-[#FFFF55]">-- KKAYUU FURNITURE STORE</div>
                    <div>
                        <h1 className='mb:text-lg mb:w-[400px] mb:text-start mb:pl-0 mb:pt-[15px] mb:py-[10px] py-[30px] lg:text-4xl text-5xl md:text-3xl md:pl-[20px]' >MAKE YOURSELF AT HOME</h1>
                    </div>
                    <div className="lg:w-[75%] w-[60%] md:pl-[20px] md:w-[100%] mb:pl-0 mb:text-xs mb:absolute mb:left-[60px] mb:w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit doloremque sequi magni
                        laudantium numquam repellat, porro reprehenderit eligendi consequuntur voluptas sed quisquam tempora?
                        Laboriosam architecto nulla cum placeat cumque?</div>
                    <div className='md:pl-[20px] mb:mt-[80px]'>
                        <button className="hover:shadow-gray-600 hover:shadow-lg mt-[30px] mb:h-[15px] mb:w-[100px] mb:text-xs mb:ml-[30px] text-black bg-[#ebeb34] w-[200px] h-[50px] cursor-pointer rounded-xl">SHOP NOW</button>
                    </div>
                </section>
                <section className='ml-[80px] lg:ml-[20px]'>
                    <div className="mb:inline-block flex pt-[40%]">
                        <div>
                            <img className="mb:pl-[5px] shadow-lg pl-[30px] w-[100%] bg-cover lg:h-[100%] md:h-[70%]" src="Images/img1.jpg" alt="" />
                        </div>
                        <div className="pl-[60px]">
                            <div className=" mb:pt-[20px] text-[#d8d81f] ">-- NEW COLLECTION</div>
                            <div>
                                <h2 className='text-black text-[40px] py-[30px] md:py-[15px] md:text-2xl'>MAKE YOURSELF AT HOME</h2>
                            </div>
                            <div className=" w-[60%] md:w-[80%] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis unde
                                consequatur laborum rerum iste maiores maxime fugiat id eligendi?</div>
                            <button className="md:w-[120px] md:text-xs md:h-[30px] hover:shadow-yellow-100 hover:shadow-lg mt-[20px] text-black bg-[#ebeb34] w-[200px] h-[50px] cursor-pointer rounded-xl">SHOP THIS ITEM</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="md:flex-wrap flex my-[50px]">
                        <div className="leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] lg:mx-[50px] mb:w-full mb:ml-[100px] w-[25%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                            <img src="Images/p1.png" alt="" />
                            <div className="text-black text-center ">Living Room</div>
                            <div className="text-black text-center ">Brown Living Room Sofa</div>
                            <div className="text-center text-amber-500 ">$1200.00</div>
                        </div>
                        <div className="leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[25%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                            <img src="Images/p2.png" alt="" />
                            <div className="text-black text-center">Home Office</div>
                            <div className="text-black text-center">Egyption Vase</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>
                        <div className="leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[25%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                            <img src="Images/p3.png" alt="" />
                            <div className="text-black text-center">Living Room</div>
                            <div className="text-black text-center">Green Living Room Sofa</div>
                            <div className="text-amber-500 text-center">$1200.00</div>
                        </div>
                        <div className="leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[25%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                            <img src="Images/p4.png" alt="" />
                            <div className="text-black text-center">Chair</div>
                            <div className="text-black text-center">Modern Emerald Fabric Chair</div>
                            <div className="text-amber-500 text-center">$8600.00</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='flex gap-2 mb:flex-wrap '>     
                            <div className='mb:w-[100%] hover:w-[100%] transition-all duration-300 ease-in-out relative w-[25%]  h-[600px]'>
                                <div className='absolute inset-0 bg-[url("/Images/living-room.jpg")] bg-cover contrast-75 -z-10'></div>
                                <p className='flex gap-2 items-center  justify-end top-[92%] relative z-10 text-white text-2xl '>Living Room
                                <FaArrowRight size={25} className='text-yellow-300' />
                                </p>
                            </div>
                        <div className='mb:w-[100%] hover:w-[100%] transition-all duration-300 ease-in-out relative w-[25%]  h-[600px]'>
                             <div className='-z-10 absolute inset-0 bg-[url("/Images/bedroom.jpg")] contrast-75'></div>
                             <p className='flex gap-2 items-center  justify-end top-[92%] text-2xl text-white relative z-10'> Bedroom
                             <FaArrowRight size={25} className='text-yellow-300' />
                             </p>
                        </div>
                        <div className='mb:w-[100%] hover:w-[100%] transition-all duration-300 ease-in-out relative w-[25%]  h-[600px]'>
                             <div className='-z-10 absolute inset-0 bg-[url("/Images/bathroom.jfif")] contrast-75 bg-cover bg-no-repeat'></div>
                             <p className='flex gap-2 items-center  justify-end top-[92%] text-2xl text-white relative z-10'> Bathroom
                             <FaArrowRight size={25} className='text-yellow-300' />
                             </p>
                        </div>
                        <div className='mb:w-[100%] hover:w-[100%] transition-all duration-300 ease-in-out relative w-[25%]  h-[600px]'>
                             <div className='-z-10 absolute inset-0 bg-[url("/Images/kitchen.jpg")] contrast-75 bg-cover'></div>
                             <p className="flex gap-2 justify-end items-center top-[92%] text-2xl text-white relative z-10">Kitchen
                             <FaArrowRight size={25} className='text-yellow-300' />
                             </p>
                        </div>
                    </div>

                </section>
                <section>
                    <div className='mt-[10%]'>
                        <div>
                            <p className='text-[#d8d81f] pl-[12%]'> -- BEST SELLER</p>
                        </div>
                        <div className='flex'>
                            <h1 className='leading-[60px] mt-10 pl-[10%] text-black text-5xl w-[45%] text-left'>Discover Our Most Selling Products</h1>
                            <button className="md:w-[120px] md:text-xs md:h-[30px] ml-[30%] hover:shadow-yellow-100 hover:shadow-lg mt-[7%] text-black bg-[#ebeb34] w-[250px] h-[50px] cursor-pointer rounded-xl">VIEW ALL BEST SELLERS</button>
                        </div>

                        <div className=' flex gap-2 flex-wrap mt-[5%] ml-[5%]'>
                             <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] lg:mx-[50px] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">    
                             <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-island-set-400x400.png" alt="" />
                            <div className="text-black text-center ">Kitchen</div>
                            <div className="text-amber-700 text-center ">White Kitchen Island</div>
                            <div className="text-center text-amber-500 ">$1200.00</div>
                        </div>

                        <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                        <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/brown-wooden-stool-400x400.png" alt="" />
                            <div className="text-black text-center">Kitchen</div>
                            <div className="text-amber-700 text-center">Brown Circle Stool</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>

                        <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                        <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/kitchen-furniture-cabinet-400x400.png" alt="" />
                            <div className="text-black text-center">Cabinet</div>
                            <div className="text-amber-700 text-center">Kitchen Cabinet</div>
                            <div className="text-amber-500 text-center">$1200.00</div>
                        </div>
                        
                        <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                        <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bedroom-single-chair-400x400.png" alt="" />
                            <div className="text-black text-center">Chair</div>
                            <div className="text-amber-700 text-center">Bedroom Single Chair</div>
                            <div className="text-amber-500 text-center">$8600.00</div>
                        </div>
                        
                          <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                          <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/bathroom-circle-mirror-400x400.png" alt="" />
                            <div className="text-black text-center">Bathroom</div>
                            <div className="text-amber-700 text-center">Bathroom Circle Mirror</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>

                          <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                          <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wall-hanging-cabinet-400x400.png" alt="" />
                            <div className="text-black text-center">Cabinet</div>
                            <div className="text-amber-700 text-center">Wall Hanging Cabinet</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>

                          <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                          <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="Images/p1.png" alt="" />
                            <div className="text-black text-center">Living Room</div>
                            <div className="text-amber-700 text-center">Brown Living Room Sofa</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>

                          <div className="group/card relative leading-8 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[5px_7px_7px_4px_rgb(159,151,151)] mb:w-full mb:ml-[100px] w-[20%] py-[20px] px-[18px] my-[70px] mx-[25px]">
                          <div className='group/item flex relative'>  
                            <BsCartCheckFill size={20} className='cursor-pointer invisible text-black absolute top-[0.5px] right-0 group-hover/card:visible shadow-sm' />
                            <div className='absolute invisible group-hover/item:visible right-6 top-1 text-xs text-center w-[80px] rounded-md h-[18px] bg-black text-white'>Add to cart</div>
                             </div>
                            <img src="Images/p3.png" alt="" />
                             <div className="text-black text-center">Living Room</div>
                            <div className="text-amber-700 text-center">Green Living Room Sofa</div>
                            <div className="text-amber-500 text-center">$400.00</div>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                  <div className='border-4 border-none max-h-max:h-[40%] '>
                     
                       <div className='flex mb:block  mb:ml-[30px]'>
                       <div className='bg-slate-50 lg:top-[30px] md:top-0 md:left-0 pl-[20px] md:h-[300px] mb:w-full mb:h-[280px] h-[400px] relative top-[90px] left-[50px] py-[5%] w-[45%] border-2 border-none'>
                         <p className='text-4xl text-black md:text-2xl'>Sales up to 50% OFF</p>
                         <p className='text-black md:text-sm text-lg font-thin mt-[35px] lg:text-base mb:text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem, voluptatum reiciendis ullam ratione rem quo cum nulla aliquid excepturi doloribus. Repellendus placeat provident amet aspernatur, sequi sit deleniti dolorum obcaecati! Sint quaerat atque iusto?</p>
                         <button className="md:w-[120px] md:text-xs md:h-[30px] hover:shadow-yellow-100 hover:shadow-lg mt-[25px] text-black bg-[#ebeb34] w-[200px] h-[50px] cursor-pointer rounded-xl">SHOP THIS ITEM</button>
                       </div>
                       <div className='w-[50%] mb:w-[100%]'>
                         <img className=' md:h-auto ' src="Images/tv-trolly.jpg" alt="" />
                       </div>
                       </div>
                     
                  </div>
                </section>
                <section>
                    <div className='mt-[10%]'>
                       <div>
                            <p className='text-[#d8d81f] pl-[12%]'> -- BEST SELLER</p>
                        </div>
                        <div className='flex '>
                            <h1 className='leading-[60px] mb:text-3xl  mt-10 pl-[10%] text-black text-5xl w-[45%] lg:w-[50%] text-left'>What People Say.!</h1>
                            <button className="mb:w-[50%] mb:mt-[10%] md:w-[170px] md:text-xs md:h-[30px] ml-[30%] hover:shadow-yellow-100 hover:shadow-lg md:mt-[5%] mt-[3%] text-black bg-[#ebeb34] w-[250px] h-[50px] cursor-pointer rounded-xl">VIEW ALL BEST SELLERS</button>
                        </div>
                        <div className='flex ml-[2%] mt-[5%] min-h-[400px] md:block '>
                        <div className="flex md:my-[3%] ">
                            <div className='mt-[2%]'><img className='h-[300px] shadow-lg shadow-slate-400' src="/Images/review1.jfif" alt="" /></div>
                            <div className='mb:mt-0 lg:w-[70%] text-black text-lg mt-[3%] p-5 w-[50%] text-wrap'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere illum fuga culpa, error tenetur. Eaque perspiciatis id temporibus quo?"
                                <div className='text-amber-500 mt-[30px]'>John Abraham</div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className='mt-[2%]'><img className='h-[250px] shadow-lg lg:h-[250px] shadow-slate-800' src="/Images/review2.jfif" alt="" /></div>
                            <div className='lg:w-[70%] text-black text-lg mt-[3%] p-5 w-[50%] text-wrap'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere illum fuga culpa, error tenetur. Eaque perspiciatis id temporibus quo?"
                                <div className='text-amber-500 mt-[5px]'>Sarah Joseph</div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </section>
            <footer>
                <div className=' bg-gray-900 text-white p-11 flex flex-wrap\'>
                    <div >

                     <div className=' flex mb-6 '>
                        <img className='sm:h-[30px] sm:left-1 sm:top-[4px] sm:absolute h-[40px] m-2' src="../Images/logo1.avif" alt="" />
                        <div className='pt-2 text-white text-3xl '>KAYYUU</div>
                           </div>

                       <div className='leading-8 pl-5'>     
                    <div>3538 Torrance Blvd, Torrance, CA 90503, USA</div>
                    <div>+1 123 456 7890</div>
                    <div>info@example.com</div>
                    <div>Visit Our Store</div>
                       </div>

                    </div>

                    <div className='leading-8 pl-16'>
                        <div className='text-3xl pb-6'>Useful Links</div>
                        <div className='leading-8 pl-5'>
                        <div>Home</div>
                        <div>Products</div>
                        <div>Room</div>
                        <div>About Us</div>
                        <div>Contact</div>
                        </div>
                    </div>

                    <div className='leading-8 pl-16'>
                        <div className='text-3xl pb-6'>Rooms</div>
                        <div className='leading-8 pl-5'>
                        <div>Living Roomd</div>
                        <div>Bedroom</div>
                        <div>Kitchen</div>
                        <div>Bathroom</div>
                        <div>Home Office</div>
                        </div>
                    </div>

                    <div className='pl-11'>
                        <div className='text-3xl pb-6'>Saty In Touch</div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='flex gap-6 py-6'><FaFacebookF />
                        <FiInstagram />
                        <IoLogoWhatsapp />
                        <IoLogoTwitter />
                        </div>
                       
                    </div>

                </div>
            </footer>
                
            </main>
        </>
    )
}

export default Hero2
