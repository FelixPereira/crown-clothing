import React from 'react';

const Product = ({ product }) => {
  return(
    <section>
      <h3>{ product.title }</h3>
      {
        product.items.map(item => (
          <img key={item.id} src={item.imageUrl} alt={product.items.name} />
        ))
      }
    </section>
  )
}

export default Product;