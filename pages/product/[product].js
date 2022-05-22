import React, { useState } from 'react';
import { client, urlFor } from '../../library/client';
import css from '../../styles/ProductCredentials.module.css';
import ReactImageMagnify from 'react-image-magnify';
import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineStar,
} from 'react-icons/ai';
import BlockContent from '@sanity/block-content-to-react';

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
          <h1>{name}</h1>
          <div className={css.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{new_price}</p>
          </div>
          <h4>Details:</h4>
          <p>
            <BlockContent
              blocks={description}
              projectId='4rywkbjf'
              dataset='production'
            />
          </p>
          <p className={css.price}>${new_price}</p>
          <div className={css.quantityContainer}>
            <h3>Quantity:</h3>
            <p className={css.quantityDescription}>
              <span className={css.minus}>
                <AiOutlineMinus />
              </span>
              <span className={css.num}>12</span>
              <span className={css.plus}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={css.buttonContainer}>
            <button type='button' className={css.addToCart}>
              Add to Cart
            </button>
            <button type='button' className={css.buyNow}>
              Buy Now
            </button>
          </div>
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
