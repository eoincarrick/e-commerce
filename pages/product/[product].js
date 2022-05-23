import React, { useState, useEffect, useRef } from 'react';
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

import { useManageContext } from '../../context/ManageStateContext';

const ProductCredentials = ({ singleProduct, commentProduct }) => {
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

  const {
    addToCart,
    setQty,
    qty,
    increasedQuantity,
    decreaseQuantity,
  } = useManageContext();

  console.log(commentProduct);

  const displayComment = commentProduct?.comments;

  const [comments, setComments] = useState('');
  const [names, setNames] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const usernameEl = useRef();
  const commentsEl = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setComments('');
    setNames('');

    const { value: username } = usernameEl.current;
    const { value: comment } = commentsEl.current;

    const formObj = {
      _id,
      username,
      comment,
    };

    const handlePostComment = async (formObj) => {
      const response = await fetch('/api/comment', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formObj),
      });

      if (response.statusCode !== 200) {
        return;
      }

      const data = await response.json();
    };
    handlePostComment(formObj).then((response) => {
      setIsLoading(isLoading);
      setShowSuccessMessage(!showSuccessMessage);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500);
    });
  };

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
            <div>{new_price}</div>
          </div>
          <h4>Details:</h4>
          <div>
            <BlockContent
              blocks={description}
              projectId='4rywkbjf'
              dataset='production'
            />
          </div>
          <p className={css.price}>${new_price}</p>
          <div className={css.quantityContainer}>
            <h3>Quantity:</h3>
            <div className={css.quantityDescription}>
              <span className={css.minus} onClick={decreaseQuantity}>
                <AiOutlineMinus />
              </span>
              <span className={css.num}>{qty}</span>
              <span className={css.plus} onClick={increasedQuantity}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className={css.buttonContainer}>
            <button
              type='button'
              className={css.addToCart}
              onClick={() => {
                addToCart(singleProduct, qty);
              }}
            >
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
      <section className={css.productComment}>
        <div className='formContainer'>
          <form className='form' onSubmit={handleOnSubmit}>
            <section className='inputContainer'>
              <label>Name:</label>
              <input
                type='text'
                placeholder='Enter name here'
                name='username'
                ref={usernameEl}
                value={names}
                onChange={(event) => setNames(event.target.value)}
              />
            </section>
            <section className='inputContainer'>
              <label>Comment:</label>
              <textarea
                className='comment '
                type='text'
                placeholder='Enter name here'
                name='comment'
                ref={commentsEl}
                value={comments}
                onChange={(event) => setComments(event.target.value)}
              />
            </section>
            <section>
              {!isLoading && <button>Add Blog</button>}
              {isLoading && <button>Adding blog</button>}
            </section>
            {showSuccessMessage && (
              <span className={css.submitted}>
                Refresh after a minutes to see cemment.
              </span>
            )}
          </form>

          {displayComment && (
            <div className='commentSection'>
              <div className='headerComment'>
                <h1>Comment Section</h1>
              </div>

              <div className='comment'>
                {displayComment.map((comment) => (
                  <div key={comment._id} className='commentCard'>
                    <h3>{comment.authorName}</h3>
                    <p>1st may 2202</p>
                    <p>{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
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
  const queryComment = `*[_type == 'comment']{
  username,
  comment,
  product->{
  name,
  slug,
  image
}
}`;

  // Getting data back from backend (SANITY)
  const singleProduct = await client.fetch(queryProduct);
  const commentProduct = await client.fetch(queryComment);

  return {
    // And passing the data to props, to render it later.
    props: {
      singleProduct,
      commentProduct,
    },
  };
};

export default ProductCredentials;
