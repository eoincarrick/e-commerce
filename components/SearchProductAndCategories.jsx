import React, { useState } from 'react';
import css from '../styles/SearchProductAndCategories.module.css';

const SearchProductAndCategories = ({
  data,
  selectedValue,
  setSelectedValue,
}) => {
  const [filteredName, setFilteredName] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [word, setWord] = useState('');

  const handleClear = () => {
    setFilteredName([]);
    setFilteredCategory([]);
    setWord('');
  };

  switch (selectedValue) {
    case 'name':
      return (
        <div className={css.container}>
          <div className={css.input}>
            <input
              type='text'
              placeholder=''
              value={word}
              onChange={(event) => setWord(event.target.value)}
            />
            <FaTimes onClick={handleClear} /> <FaSearch />
          </div>

          <ul className={css.display}>
            {data.map((item, index) => (
              <li key={i} className={css.card}>
                <div className={css.center}>
                  <img
                    className={css.productImage}
                    src={urlFor(item?.image[0])}
                    alt={item.slug.current}
                    loading='lazy'
                  />
                  <p className={css.productName}>{item.name}</p>
                </div>
                <ul className={css.productDetails}>
                  <li className={css.priceContainer}>
                    <span className={css.green}>${item.new_price}</span>
                    <span className={css.gray}>${item.old_price}</span>
                  </li>
                  <li className={css.buttonContainer}>
                    <Link href={`/product/${item.slug.current}`}>
                      <button className={css.btn} type='button'>
                        Details
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
      break;

    case 'category':
      return (
        <div className={css.container}>
          <div className={css.input}>
            <input
              type='text'
              placeholder=''
              value={word}
              onChange={(event) => setWord(event.target.value)}
            />
            <FaTimes onClick={handleClear} /> <FaSearch />
          </div>

          <ul className={css.display}>
            {data.map((item, index) => (
              <li key={i} className={css.card}>
                <div className={css.center}>
                  <img
                    className={css.productImage}
                    src={urlFor(item?.image[0])}
                    alt={item.slug.current}
                    loading='lazy'
                  />
                  <p className={css.productName}>{item.name}</p>
                </div>
                <ul className={css.productDetails}>
                  <li className={css.priceContainer}>
                    <span className={css.green}>${item.new_price}</span>
                    <span className={css.gray}>${item.old_price}</span>
                  </li>
                  <li className={css.buttonContainer}>
                    <Link href={`/product/${item.slug.current}`}>
                      <button className={css.btn} type='button'>
                        Details
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      break;
  }
};

export default SearchProductAndCategories;
