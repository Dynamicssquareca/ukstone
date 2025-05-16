import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
export default function About() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };



    return (
        <>
            <Head>
                <title>About US</title>
            </Head>

            <div className='common-header-banner'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='commn-head'>
                                <h1>About US</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className='about-us-section p-b-60 p-t-80'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-us-image'>
                                <Image src='/img/webpages/about-us-pic.png' alt='About Us' className='img-fluid' width={553} height={545} />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='about-us-content'>
                                <h2>Stone Discover – The Largest Wholesalers of Granite Monuments in the UK</h2>
                                <p>Stone Discover is one of the largest suppliers of wholesale granite memorials across the United Kingdom. We have been in the stone industry since 1984 and have been providing exceptional experience with our products worldwide.</p>
                                <p>With over a decade of experience in the import business, we have built a huge customer base by delivering excellence every time. We make sure that our dealers and fabricators get the finest quality granite memorials at the most competitive pricing. With safe packaging and countless checks, you get reliable delivery and a seamless service experience.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <section className='content-section-two p-b-80 p-t-60'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 d-flex align-self-center'>
                            <div className='about-us-content'>
                                <p>We are located in the Southern part of India. From our factories in India, we export Indian Granite Monuments to our warehouses based in Liverpool and Southampton in the UK. Most of our standard monuments and catalogue items are kept in stock in these warehouses. This is how we control the whole process and ensure quick distribution and deliveries to all wholesalers and dealers in the UK.</p>
                                <p>Our modern manufacturing plant in Khammam, India, produces granite memorials and tombstones in a wide variety of Granite colors, such as
                                    Absolute Indian Black Light Grey, Bahama Blue, Indian Aurora, Indian ImpalaImperial Red, and many others.</p>
                                <p>We also have imported granite color varieties like Blue Pearl, olive Green, South African Impala, etc. We offer bespoke designs and possible customizations in terms of colours, textures, finishes, and shapes. Whether you're a fabricator, dealer, or wholesaler, Stone Discover UK is your trusted partner for quality, reliability, and long-term value.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 align-items-center'>
                            <div className='left-card-01-img'>
                                <Image src='/img/webpages/abot-side-01.jpg' alt='abot-side-01' className='img-fluid' width={555} height={436} />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className='content-section-two p-b-80 p-t-60'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 d-flex'>
                            <div className='about-us-content'>
                                <h2>Our Vision</h2>
                                <p>Our modern manufacturing plant in Khammam, India, produces granite memorials and tombstones in a wide variety of Granite colors, such as
                                    Absolute Indian Black Light Grey, Bahama Blue, Indian Aurora, Indian ImpalaImperial Red, and many others.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex'>
                            <div className='about-us-content'>
                                <h2>Our Mission</h2>
                                <p>To provide superior quality granite monuments to our partners/wholesalers across the UK at the most competitive prices. To maintain excellence in sourcing, shipping, and delivery, ensuring a seamless customer experience.</p> <p>To build long-lasting partnerships with dealers, fabricators, and wholesalers by ensuring trust, transparency, and consistency.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className='partner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='heading-left p-b-20'>
                                <h2 className='m-b-30'>Why Partner with Us?</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='partner-pic'>
                                <img src='/img/webpages/partent-side-pic.jpg' alt='partent-side-pic' />
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='form-left'>
                                <div className='accordion-one accordion-one-product'>
                                    <Accordion open={open} toggle={toggle}>
                                        <AccordionItem>
                                            <AccordionHeader targetId="1">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-01.png' alt='faq-icon' />What types of memorials do you supply?</h3>
                                                    {/* <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span> */}
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                <p>Salesforce integration services are a way to enhance operational harmony by fostering data synchronization and improved collaboration among the various business processes. </p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="2">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-02.png' alt='faq-icon' />Consistent Quality, Every Time</h3>
                                                    {/* <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span> */}
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="2">
                                                <p>Salesforce integration services are a way to enhance operational harmony by fostering data synchronization and improved collaboration among the various business processes. </p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="3">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-03.png' alt='faq-icon' />Custom Shapes & Sizes</h3>
                                                    {/* <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span> */}
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="3">
                                                <p>Salesforce integration services are a way to enhance operational harmony by fostering data synchronization and improved collaboration among the various business processes. </p>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="4">
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3><img src='/img/icons/faq-icon-04.png' alt='faq-icon' />Seamless Logistics & Delivery</h3>
                                                    {/* <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span> */}
                                                </div>
                                            </AccordionHeader>
                                            <AccordionBody accordionId="4">
                                                <p>Salesforce integration services are a way to enhance operational harmony by fostering data synchronization and improved collaboration among the various business processes. </p>
                                            </AccordionBody>
                                        </AccordionItem>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className='p-b-30'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Why Choose Us?</h2>
                                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
                            </div>

                        </div>
                    </div>

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
              <section className='p-t-80'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='heading-center p-b-40'>
                                <h2 className='m-b-30'>Join Hands with a Reliable <span>Tombstone Supplier</span></h2>
                                <p>Whether you’re a high-volume buyer or expanding your product line, our team is here to support your growth. We understand the B2B dynamics of the memorial industry and deliver not just products—but trust, consistency, and partnership.</p>
                            </div>
                            <div className='button-center-new text-center'>
                                <a href='/' className='btn btn-three'>Request a Quote</a>
                                <a href='/' className='btn btn-four'>Request Catalogue</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='faq'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='heading-center p-b-40'>
                <h2 className='m-b-30'>Frequently Asked <span>Questions</span></h2>
              </div>

            </div>
          </div>
        </div>
      </section> */}



        </>
    );
}
