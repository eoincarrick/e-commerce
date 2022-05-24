import React, { useState, useEffect, useRef } from 'react';
import { client, urlFor } from '../../library/client';
import css from '../../styles/ProductCredentials.module.css';
import ReactImageMagnify from 'react-image-magnify';
import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
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

  const displayComment = commentProduct.comments;
  console.log(displayComment);

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

  const [comments, setComments] = useState('');
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [localStorage, setLocalStorage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  const usernameEl = useRef();
  const emailEl = useRef();
  const commentsEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email'),
    };
    setFormData(initialFormData);
  }, []);

  const handleOnSubmit = (event) => {
    // @desc prevent refresh
    event.preventDefault();

    // @desc reset input after submission.
    setComments('');
    // setNames('');
    // setEmail('');

    // @desc getting values
    const { value: username } = usernameEl.current;
    const { value: comment } = commentsEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    //@ desc, store the username and email, only if the user check it.
    if (storeData) {
      localStorage.setItem('name', username);
      localStorage.setItem('email', email);
    } else {
      //@desc remove remove the username and email unchecked.
      localStorage.removeItem('name', username);
      localStorage.removeItem('email', email);
    }

    // @desc, putting all value to one place, Object
    const formObj = {
      _id,
      username,
      email,
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
      setShowSuccessMessage(!showSuccessMessage);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
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
        <div className={css.formContainer}>
          <form className={css.form} onSubmit={handleOnSubmit}>
            <section className={css.inputContainer}>
              <label className={css.text}>Name:</label>
              <input
                className={css.input}
                type='text'
                placeholder='John Doe'
                name='username'
                ref={usernameEl}
                value={names}
                onChange={(event) => setNames(event.target.value)}
              />
            </section>
            <section className={css.inputContainer}>
              <label className={css.text}>E-mail:</label>
              <input
                className={css.input}
                type='email'
                placeholder='example@company.com'
                name='username'
                ref={emailEl}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </section>
            <section className={css.inputContainer}>
              <label className={css.text}>Comment:</label>
              <textarea
                className={css.input}
                type='text'
                placeholder='Write something about this product'
                name='comment'
                ref={commentsEl}
                value={comments}
                onChange={(event) => setComments(event.target.value)}
              />
            </section>
            <section className={css.checkboxContainer}>
              <input
                type='checkbox'
                ref={storeDataEl}
                className={css.checkbox}
                name='storeDate'
              />
              <label className={css.text}>Save my e-mail and name.</label>
            </section>
            {showSuccessMessage && (
              <span className={css.submitted}>
                Refresh after a minutes to see cemment.
              </span>
            )}
            <section className={css.CommentButton}>
              <button
                onClick={handleOnSubmit}
                type='button'
                className={css.buyNow}
              >
                Post Comment
              </button>
            </section>
          </form>

          {displayComment && (
            <div className={css.commentSectionBox}>
              <div className={css.headerComment}>
                <span className={css.commentNumber}>{displayComment.length}</span>
                <h1>Comment Section</h1>
              </div>

              <div className={css.commentBox}>
                {displayComment?.map((comment) => (
                  <section key={comment?._id} className={css.commentSection}>
                    <div className={css.userAndProduct}>
                      <div className={css.commenterName}>John Deo</div>
                      <a href={`/product/${comment.product.slug.current}#`}>
                        <div className={css.commentProductImgAndName}>
                          <img
                            className={css.commentProduct}
                            src={urlFor(comment?.product.image[0])}
                            alt={comment?.product.slug.current}
                          />
                          <div>{comment?.product.name}</div>
                        </div>
                      </a>
                    </div>
                    <div className={css.userComment}>
                      <div>
                        <FaUser />
                      </div>
                      <div className={css.commentText}>{comment.comment}</div>
                    </div>
                  </section>
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
  const queryComment = `*[_type == 'product' && slug.current == '${product}'][0]{
  'comments': *[_type == 'comment' && product._ref == ^._id]{
  _id,
  comment,
  username,
  product->{
  _id,
  slug,
  image,
  name,
}
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
