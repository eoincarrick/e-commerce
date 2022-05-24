import React, { useState } from 'react';
import { client } from '../library/client';
import { SearchProductAndCategories } from '../components';

const search = ({ result, categories }) => {
  const [selectedValue, setSelectedValue] = useState('name');
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        <option value='name'>Name</option>
        <option value='category'>Category</option>
      </select>
      <SearchProductAndCategories
        categories={categories}
        data={result}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == 'product']{
    name,
  slug,
  image,
  new_price,
  old_price,
}`;

  const queryCategory = `*[_type == 'category']`;

  const result = await client.fetch(query);
  const categories = await client.fetch(queryCategory);

  return {
    props: {
      result,
      categories,
    },
  };
};

export default search;
