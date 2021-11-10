import React from 'react';
import './product.scss';

const Product = ({ product }) => {
  return(
    <section className='collection'>
      <h2 className='collection__title'>{ product.title }</h2>
      <div className='collection__innerSection'>
        {
          product.items.map(item => (
            <article key={item.id} className='collection__product'>
              <img src={item.imageUrl} alt={product.items.name} width='250' height='300' />
              <div className='product__info'>
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Product;