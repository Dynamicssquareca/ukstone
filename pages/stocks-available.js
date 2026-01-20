import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import BookingForm from "@/components/BookingForm";
import Head from 'next/head';
import Image from "next/image";

import React from 'react';

const Test = () => {
    const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ✅ Called when Book Now is clicked
  const handleBook = (productData) => {
    setSelectedProduct(productData);
    setShowModal(true);
  };
    return (
         <>
         <Head>
        <title>Email Demo | Memorial Headstones Supplier in UK</title>
        <meta name="description"
          content=""
        />
        <link rel="canonical" href="https://www.stonediscover.co.uk/stocks-available/" />
        <meta name="robots" content="noidex, nofollow" />
      </Head>


      <div className="container py-5">
        <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'><span>Stocks</span> Available</h2>
            </div>
          </div>
          </div>
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBook={handleBook}   // ✅ IMPORTANT
            />
          ))}
        </div>
      </div>
       <section className='p-b-30'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='heading-center p-b-40'>
                      <h2 className='m-b-30'><span>Trade pricing. Reliable stock. Faster fulfilment</span></h2>
                      <p>Access real-time stock from a UK-based stone importer.
 Reliable availability, transparent pricing, and exclusive trade discounts for B2B sellers.</p>
                    </div>
      
                  </div>
                </div>
              </div>
            </section>
            <section className="mm-coo">
                <div className="container">
                    <div className='row'>
                  <div className='col-lg-12'>
                    <div className='card-05'>
                      <div className='card-05-item'>
                        <Image src='/img/icons/icons-1.png' alt='About Us' className='img-fluid' width={58} height={76} />
                        <span>Quality Craftmanship</span>
                      </div>
                      <div className='card-05-item'>
                        <Image src='/img/icons/icons-2.png' alt='About Us' className='img-fluid' width={58} height={76} />
                        <span>Nationwide Delivery</span>
                      </div>
                      <div className='card-05-item'>
                        <Image src='/img/icons/icons-3.png' alt='About Us' className='img-fluid' width={58} height={76} />
                        <span>24*7 Customer Service</span>
                      </div>
                      <div className='card-05-item'>
                        <Image src='/img/icons/icons-4.png' alt='About Us' className='img-fluid' width={58} height={76} />
                        <span>Custom Designs</span>
                      </div>
                      <div className='card-05-item'>
                        <Image src='/img/icons/icons-5.png' alt='About Us' className='img-fluid' width={58} height={76} />
                        <span>Experienced Masons</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </section>

      {/* ✅ BOOKING POPUP */}
      {showModal && selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">Book Product</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body">
                <BookingForm
  productData={selectedProduct}
  onSubmit={() => setShowModal(false)}
/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    );
}

export default Test;





