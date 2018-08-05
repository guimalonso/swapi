import React from 'react';

const ItemList = ({ items }) => {
  const itemList = items.map((item, i) => {

    let itemLabel;
    if (item.title) {
      itemLabel = item.title;
    } else {
      itemLabel = item.name;
    }

    return (
      <li key={i}>{itemLabel}</li>
    );
  });
  return(
    <div>
      <ul>
        {itemList}
      </ul>
    </div>
  );
}

export default ItemList;