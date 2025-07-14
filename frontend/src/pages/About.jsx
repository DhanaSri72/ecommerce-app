import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div> 
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            We are a team of passionate individuals committed to delivering the best e-commerce experience.
          </p>
          <p>
            Our mission is to provide high-quality products at competitive prices while ensuring customer satisfaction.
          </p>
          <p>
            We believe in building long-term relationships with our customers based on trust and transparency.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to empower individuals and businesses by providing innovative solutions and exceptional service.
          </p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Quality Assurance:</p>
          <p className='text-gray-600'>Experience the perfect blend of style and comfort with our latest collection. Designed with high-quality materials and attention to detail, this product is ideal for daily use or special occasions. Available in multiple sizes and colors.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600'>Enjoy the convenience of shopping from home with our user-friendly online store. Browse through our extensive collection, add items to your cart, and checkout securely in just a few clicks.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Customer Support:</p>
          <p className='text-gray-600'>Our dedicated customer support team is here to assist you with any inquiries or issues you may have. We strive to provide timely and effective solutions to ensure your satisfaction.</p>
        </div>

      </div>
      <NewsLetter/>

    </div>
  )
}

export default About
