import React from 'react';

const Product = ({ product }) => {
  return(
    <section className='collection'>
      <h3 className='collection__title'>{ product.title }</h3>
      {
        product.items.map(item => (
          <div className='collection__innerSection'>
            <article key={item.id} className='collection__product'>
            <img src={item.imageUrl} alt={product.items.name} width='250' />
            <div>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
            </div>
          </article>
          </div>
        ))
      }
    </section>
  )
}

export default Product;