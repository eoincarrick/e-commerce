import React, { useState } from 'react';
import { client, urlFor } from '../../library/client';
import css from '../../styles/ProductCredentials.module.css';
import ReactImageMagnify from 'react-image-magnify';
import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';

const ProductCredentials = ({ singleProduct }) => {
  // Querying for data from backend (SANITY)

  const [index, setIndex] = useState(0);
  const {
    _id,
    name,
    image,
    slug: { current },
    description,
    color,
    tags,
    old_price,
    new_price,
  } = singleProduct;

  console.log(singleProduct);
  return (
    <div className={css.ProductCredentials}>
      <section>
        <Link href={'/'}>
          <p className={css.back}>
            <RiArrowGoBackFill className={css.icon} />
            <span> Back to all product</span>
          </p>
        </Link>
      </section>
      <section className={css.productSection}>
        <div className={css.imageSection}>
          <div className={css.image}>
            {/* <span className={css.show}>
              <img
                src={urlFor(image && image[index])}
                alt={current}
                className={css.img}
                loading='lazy'
              />
            </span> */}
            <div className={css.hide}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: current,
                    className: css.ReactImageMagnify,
                    isFluidWidth: true,
                    src: urlFor(image[index]),
                  },
                  largeImage: {
                    src: urlFor(image[index]),
                    width: 1400,
                    height: 1400,
                  },
                  lensStyle: {
                    background: 'hsla(0, 0%, 100%, .3)',
                    border: '1px solid #000',
                  },
                  isHintEnabled: true,
                  shouldUsePositiveSpaceLens: true,
                }}
              />
            </div>
          </div>

          <div className={css.otherImg}>
            {image &&
              image?.map((img, i) => (
                <img
                  key={i}
                  src={urlFor(img && img)}
                  alt={name}
                  loading='lazy'
                  onMouseEnter={() => setIndex(i)}
                  className={`${css.smallImage} ${
                    i === index ? css.active : null
                  }`}
                />
              ))}
          </div>
        </div>

        <div className={css.descriptionSection}>
          <div className={css.nameInfo}>
            <p className={css.underline}>
              <h2 className={css.font}>{name}</h2>
            </p>
            <div>
              <span>212 Rating</span>
              <span>212 Rating</span>
              <span>212 Rating</span>
            </div>
          </div>
          <div className={css.priceInfo}></div>
          <div className={css.quantityInfo}></div>
          <div className={css.otherInfo}></div>
        </div>
      </section>

      <section className={css.productDescription}></section>

      <section className={css.productOthers}></section>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{
  slug{
  current
}
}`;

  const slug = await client.fetch(query);

  const paths = slug.map((item) => ({
    params: {
      product: item.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { product } }) => {
  // Querying for data from backend (SANITY)
  const queryProduct = `*[_type == 'product' && slug.current == "${product}"][0]`;

  // Getting data back from backend (SANITY)
  const singleProduct = await client.fetch(queryProduct);

  return {
    // And passing the data to props, to render it later.
    props: {
      singleProduct,
    },
  };
};

export default ProductCredentials;
