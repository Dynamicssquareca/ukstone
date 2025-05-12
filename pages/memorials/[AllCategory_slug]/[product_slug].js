// pages/memorials/[AllCategory_slug]/[product_slug].js

import Image from 'next/image';
import React from 'react';


const getImageUrl = (img) =>
  img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg'

const ProductDetailsPage = ({ product }) => {
  if (!product) return <p>Error: Product not found.</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      {product.images?.length > 0 ? (
        product.images.map((img, idx) => (
          <Image
            src={getImageUrl(product.images?.[0])}
            alt={product.title}
            width={500}
            height={400}
            className="img-fluid"
          />
        ))
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_API_URL);
    const data = await res.json();

    const paths = data.products.map((prod) => ({
      params: {
        AllCategory_slug: prod.categorySlug, // Ensure this is present in your data
        product_slug: prod.slug,
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (err) {
    console.error('Error in getStaticPaths:', err);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS_DETAILS_API_URL}/${params.product_slug}`
    );
    const data = await res.json();

    return {
      props: {
        product: data.product || null,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error('Error fetching product:', err);
    return {
      props: {
        product: null,
      },
    };
  }
};

export default ProductDetailsPage;
