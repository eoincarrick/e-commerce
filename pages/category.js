import React from 'react';

const Category = () => {
  return <div>Category</div>;
};

export const getStaticPaths = async () => {};

export const getStaticProps = async (pageContext) => {
  console.log(pageContext);
};

export default Category;
