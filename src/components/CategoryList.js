import React from 'react';

const CategoryList = ({ categories, categoryButtonClick }) => {
  const categoryNames = Object.keys(categories);
  const buttons = categoryNames.map((item, i) => {
    return (
      <button key={i} value={item} style={{ textTransform: 'capitalize' }} onClick={categoryButtonClick}>{item}</button>
    );
  });
  return(
    <div>{buttons}</div>
  );
}

export default CategoryList;