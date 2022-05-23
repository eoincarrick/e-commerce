import React, { useState } from 'react';
import css from '../styles/SearchProductAndCategories.module.css';
import { urlFor } from '../library/client';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const SearchProductAndCategories = ({ data, categories, selectedValue }) => {
  const [filteredName, setFilteredName] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [word, setWord] = useState('');

  const handleSearch = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setWord(searchWord);
    const searchName = data.filter((productName, index) => {
      return productName.name.toLowerCase().includes(searchWord);
    });

    const searchCategory = categories.filter((categoryName, index) => {
      return categoryName.name.toLowerCase().includes(searchWord);
    });

    if (searchWord === '') {
      setFilteredName([]);
      setFilteredCategory([]);
    } else {
      setFilteredName(searchName);
      setFilteredCategory(searchCategory);
    }
  };

  const handleClear = () => {
    setFilteredName([]);
    setFilteredCategory([]);
    setWord('');
  };

  switch (selectedValue) {
    case 'name':
      return (
        <div className={css.container}>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type='text'
              placeholder=''
              value={word}
              onChange={handleSearch}
            />
            {filteredName.length === 0 ? (
              <FaSearch className={css.icons} />
            ) : (
              <FaTimes
                onClick={handleClear}
                className={`${css.icons} ${css.icon}`}
              />
            )}
          </div>

          {filteredName !== 0 && (
            <ul className={css.cardContainer}>
              {filteredName.map((item, i) => (
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
          )}

          {!filteredName && (
            <div>
              <p>Search For A Product Name</p>
            </div>
          )}
        </div>
      );
      break;

    case 'category':
      return (
        <div className={css.container}>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type='text'
              placeholder=''
              value={word}
              onChange={handleSearch}
            />
            {filteredCategory.length !== 0 ? (
              <FaSearch className={css.icons} />
            ) : (
              <FaTimes
                onClick={handleClear}
                className={`${css.icons} ${css.icon}`}
              />
            )}
          </div>

          <ul className={css.categories}>
            {filteredCategory.map((category) => (
              <div
                key={category?._id}
                className={css.cards}
                style={{
                  backgroundImage: `url('${urlFor(category?.image)}')`,
                }}
              >
                <Link href={`/category/${category?._id}`}>
                  <p className={css.categoryText}>{category.name}</p>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      );

    default:
      break;
  }
};

export default SearchProductAndCategories;
