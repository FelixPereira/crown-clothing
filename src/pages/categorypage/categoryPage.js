import React from 'react';

// import CollectionItem from '../../components/collectionItem/CollectionItem';

const CategoryPage = ({match}) => {
  console.log(match)
  return (
    <div className='category'>
      <h2> CATEGORY PAGE: {match.params.categoryId}</h2>
    </div>
  );
};

export default CategoryPage;