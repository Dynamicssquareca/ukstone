import React, { useState, useRef } from 'react';
import Head from 'next/head';

export default function Home() {




  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className='hero-banner-one' style={{ backgroundImage: 'url("/img/banner/hero-banner-01.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat' }}>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-9 text-center'>
              <div className='hero-banner-content'>
                <h1>Welcome to <span>Stone Discover</span> UK</h1>
                <p>We specialize in creating premium quality memorial headstones and gravestones using the finest granite</p>
                <div className='hero-banner-btn'>
                <a className='btn btn-three'>Get Quotes</a>
                <a className='btn btn-transparent'>Request Catalogue</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
   
      <section className='quote-us-section'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-12 text-center'>
              <div className='quote-us-content'>
                <p>We proudly serve dealers and wholesalers across the UK, offering memorial stones in bulk quantities that are carefully designed and produced in our industries to meet the highest quality standards for the customers.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about-us-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about-us-content'>
                <h2>About Us</h2>
                <p>Stone Discover UK is a trusted name in the memorial industry, dedicated to supplying memorial stones all over the United Kingdom. Whether you are looking for an Ogee, Kerb set, Heart-shaped, or Angel memorial, we have a wide range of memorials to suit all kinds of needs.</p>

                <p>Our skilled professionals ensure that each piece is thoughtfully designed and crafted with care and precision, reflecting the memory of the deceased. We also do custom designs by adding memorial flower vases and graveside ornaments to add a personal touch to the memorial.</p>
                <p>With warehouses in Liverpool and Southampton, we ensure safe packaging and prompt delivery. Please feel free to visit our showrooms for any queries or further guidance.</p>
                <a href='/' className='btn btn-four m-t-30'>Read More</a>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='about-us-image'>
                <img src='/img/webpages/about-us-pic.png' alt='About Us' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 d-flex'>
              <div className='card-01'>
                <img src='/img/icons/add-location-alt.svg' alt='Our Location' className='img-fluid' />
                <h3>Our Location</h3>
                <p>We are based in Liverpool and Southampton, where we maintain a large inventory of catalog items for immediate delivery. As the largest stockist of headstones in the UK, we offer a diverse selection to meet various needs. Our manufacturing facility is located in Alinagar, Chetlapotham, Telangana, Southern India.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='card-01'>
              <img src='/img/icons/delivery-truck-speed.svg' alt='Seamless Delivery' className='img-fluid' />
                <h3>Seamless Delivery</h3>
                <p>We keep standard catalogue items in stock for quick delivery. If you need special bespoke designs or made-to-order items, we have one of the fastest delivery times in the industry, taking just 7 to 8 weeks from our factory in India.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='card-01'>
              <img src='/img/icons/handyman.svg' alt='Timeless Craftsmanship' className='img-fluid' />
                <h3>Timeless Craftsmanship</h3>
                <p>Our factory in India is powered by skilled craftsmen who expertly create memorials in any bespoke design you need. Click here to explore the latest personalized headstone designs that we have delivered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='row'>

          </div>
        </div>
      </section>



    </>
  );
}
