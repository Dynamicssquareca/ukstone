import Image from 'next/image';

const getImageUrl = (img) =>
 img ? `${process.env.NEXT_PUBLIC_IMAGE}/${img}` : '/img/webpages/product-01.jpg'

const CategoryPage = ({ category, products, error }) => {
  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!category) {
    return <p className="text-warning">Category not found.</p>;
  }

  return (
    <div className="container py-4">
      <h1 className="mb-3">{category.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: category.description }} />

      <div className="row mt-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div className="col-lg-3 sliding-col-05" key={product._id}>
              <div className="card-06">
                <div className="card-06-item">
                  <a href={`/memorials/${category.slug}/${product.slug}`}>
                    <img
                      width={300}
                      height={200}
                      src={getImageUrl(product.images?.[0])}
                      alt={product.title}
                      className="img-fluid"
                    />
                    <span>{product.title}</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_CATEGORY_API_URL);
    const data = await res.json();

    const paths = data?.map((cat) => ({
      params: { AllCategory_slug: cat.slug },
    }));

    return {
      paths: paths || [],
      fallback: 'blocking',
    };
  } catch (error) {
    console.error("Error generating paths:", error.message);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DETSILS_URL}/${params.AllCategory_slug}`);
    const data = await res.json();

    if (!data || !data.category || !data.products) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        category: data.category,
        products: data.products,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to load category details:", error.message);
    return {
      props: {
        category: null,
        products: [],
        error: 'Something went wrong while loading this page.',
      },
    };
  }
};

export default CategoryPage;
