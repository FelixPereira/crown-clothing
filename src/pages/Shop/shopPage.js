import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionOverview/collectionOverview';
import CategoryPage from '../category/category';

const shopPage = ({match}) => {
  return(
    <section className='shopPage'>
      <Route exact path={`${match.path}`} component={CollectionsOverview}  />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage}  />
    </section>
  )
};

export default shopPage;