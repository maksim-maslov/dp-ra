import React, { Component } from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Sorting from '../Sorting';
import ProductCatalogueItemListFavorite from './ProductCatalogueItemListFavorite';
import Pagination from '../Pagination';

const Favorite = ({ favorites, updateFavorites }) => {
  // console.log('1', favorites)
  return(
    <div className="wrapper wrapper_favorite">
      <Breadcrumbs links={[{link: "/main-page", text: "Главная"}, {link: "/favorite", text: "Избранное"}]} />
      <main className="product-catalogue product-catalogue_favorite">
        <section className="product-catalogue__head product-catalogue__head_favorite">
          <div className="product-catalogue__section-title">
            <h2 className="section-name">В вашем избранном</h2><span className="amount amount_favorite"> {favorites.length} товаров</span>
          </div>
          <Sorting />            
        </section>
        <ProductCatalogueItemListFavorite favorites={favorites} updateFavorites={updateFavorites} />        
        <Pagination />
      </main>
    </div>
  );
}

export default Favorite;