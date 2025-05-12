// pages/product/[slug].js

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import ImageMagnifier from '@/components/ImageMagnifier';
import ModelBox from '@/components/ModelBox';
import Link from 'next/link';

export async function getStaticPaths() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
  
        const paths = data.products.map(product => ({
            params: { id: product.id.toString() },
        }));
  
        return { paths, fallback: false };
    } catch (error) {
        console.error('Error fetching product paths:', error);
        return { paths: [], fallback: false };
    }
}
  
export async function getStaticProps({ params }) {
    try {
        const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);
        const product = await productRes.json();
  
        const [categoriesRes, relatedRes] = await Promise.all([
            fetch('https://dummyjson.com/products/categories'),
            fetch(`https://dummyjson.com/products/category/${product.category}`),
        ]);
  
        const categories = await categoriesRes.json();
        const relatedCategoryData = await relatedRes.json();
  
        // Filter out the current product from related products
        const relatedProducts = relatedCategoryData.products.filter(p => p.id !== product.id);
  
        return {
            props: {
                product,
                categories,
                relatedProducts,
            },
        };
    } catch (error) {
        console.error('Error fetching product data:', error);
        return {
            props: {
                product: {},
                categories: [],
                relatedProducts: [],
            },
        };
    }
}

const SingleProduct = ({ product, categories, relatedProducts }) => {
    const router = useRouter();
    const [open, setOpen] = useState('');
    const [openone, setOpenone] = useState('');
    const sliderRef = useRef(null);

    const toggle = (id) => {
        setOpen(open === id ? '' : id);
    };
    const toggles = (id) => {
        setOpenone(openone === id ? '' : id);
    };

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>{product.title} | Product Page</title>
            </Head>

            <div className="container m-t-40">
                {/* Breadcrumb */}
                <div className="row">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/products">Products</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='product-page-wrap p-t-40'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='product-pic' ref={sliderRef}>
                                <ImageMagnifier src={product.images[0]} alt={product.name} zoomScale={2} sliderRef={sliderRef} />
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='single-product-details'>
                                <div className='product-title m-b-30'>
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                </div>

                                <div className='product-size-info'>
                                    <ul>
                                        <li><strong>Brand:</strong> {product.brand}</li>
                                        <li><strong>Category:</strong> {product.category}</li>
                                        <li><strong>Price:</strong> ${product.price}</li>
                                        <li><strong>Stock:</strong> {product.stock}</li>
                                        <li><strong>Rating:</strong> {product.rating}</li>
                                    </ul>
                                </div>

                                <div className='m-t-40 m-b-30'>
                                    <ModelBox className='btn-three' headerText="Scale Your Store!" buttonText="Request a Quote" />
                                </div>

                                <div className='product-dis'>
                                    <div className='form-left'>
                                        <Accordion open={openone} toggle={toggles}>
                                            <AccordionItem>
                                                <AccordionHeader targetId="01">
                                                    <h3>Description</h3>
                                                </AccordionHeader>
                                                <AccordionBody accordionId="01">
                                                    <p>{product.description}</p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='p-t-100'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Realted Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row g-4 sliding-row'>
                        {relatedProducts.map(product => (
                            <div className='col-lg-3 col-md-4 sliding-col'>
                                <div className='card-04'>
                                    <div className='card-04-item text-center'>
                                        <Link href={`/products/${product.id}`}>
                                            <Image
                                                src={product.thumbnail}
                                                alt={product.title}
                                                width={300}
                                                height={200}
                                                className="card-img-top"
                                            />
                                            <h4>{product.title}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
